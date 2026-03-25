import getAccessToken from "../../functions/utils/getAccessToken";
import type { AppEnv } from "../../types/env";

export async function sendFeedback(env: AppEnv | null, formData: FormData) {
  if (!env) {
    return new Response(
      JSON.stringify({ message: "Cloudflare env bindings are not configured for local dev." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const message = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    date: new Date().toISOString(),
  };

  const token = await getAccessToken(env);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${env.GSHEET_ID}/values/Feedbacks!A1:append?valueInputOption=USER_ENTERED`;

  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      majorDimension: "ROWS",
      values: [[message.date, message.name || "", message.email || "", message.message || ""]],
    }),
  });
}
