import type { AppEnv } from "../../types/env";

type MaybeCloudflareContext = {
  cloudflare?: {
    env?: Partial<AppEnv>;
  };
};

type ProcessLike = {
  env?: Record<string, string | undefined>;
};

function getProcessEnv() {
  const maybeProcess = (globalThis as { process?: ProcessLike }).process;

  return maybeProcess?.env;
}

export function resolveAppEnv(context?: MaybeCloudflareContext): AppEnv | null {
  const env = context?.cloudflare?.env;
  const processEnv = getProcessEnv();

  const resolved = {
    GSHEET_ID: env?.GSHEET_ID ?? processEnv?.GSHEET_ID,
    GSHEET_CLIENT_EMAIL: env?.GSHEET_CLIENT_EMAIL ?? processEnv?.GSHEET_CLIENT_EMAIL,
    GSHEET_PRIVATE_KEY: env?.GSHEET_PRIVATE_KEY ?? processEnv?.GSHEET_PRIVATE_KEY,
    KVDATA: env?.KVDATA,
  };

  if (!resolved.GSHEET_ID || !resolved.GSHEET_CLIENT_EMAIL || !resolved.GSHEET_PRIVATE_KEY) {
    return null;
  }

  return resolved as AppEnv;
}
