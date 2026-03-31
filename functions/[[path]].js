import { createPagesFunctionHandler } from "@react-router/cloudflare";

// @ts-ignore
import * as build from "../build/server/index.js";

const handleRequest = createPagesFunctionHandler({
  build
});

export function onRequest(context) {
  return handleRequest(context);
}
