import { renderToReadableStream } from "react-dom/server.browser";
import { ServerRouter } from "react-router";
import type { EntryContext } from "react-router";

function prependDoctype(stream: ReadableStream) {
  return new ReadableStream({
    async start(controller) {
      controller.enqueue(new TextEncoder().encode("<!DOCTYPE html>"));
      const reader = stream.getReader();

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        controller.enqueue(value);
      }

      controller.close();
    },
  });
}

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const stream = await renderToReadableStream(
    <ServerRouter context={remixContext} url={request.url} />,
    {
      signal: request.signal,
    }
  );

  await stream.allReady;

  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("X-CF-Email-Obfuscation", "off");

  return new Response(prependDoctype(stream), {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
