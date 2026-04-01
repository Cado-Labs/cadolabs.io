import { renderToReadableStream } from "react-dom/server.browser";
import { ServerRouter } from "react-router";
import type { EntryContext } from "react-router";

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

  return new Response(stream, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
