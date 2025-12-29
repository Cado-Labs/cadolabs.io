const pemToArrayBuffer = (pem: string) => {
  const b64 = pem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s+/g, "");

  const binary = atob(b64);
  const buffer = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    buffer[i] = binary.charCodeAt(i);
  }
  return buffer.buffer;
}

const getAccessToken = async (env: { GSHEET_CLIENT_EMAIL: string; GSHEET_PRIVATE_KEY: string; }) => {


  try {
    const now = Math.floor(Date.now() / 1000);

    const header = {
      alg: "RS256",
      typ: "JWT",
    };

    const payload = {
      iss: env.GSHEET_CLIENT_EMAIL,
      scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    };

    const encoder = new TextEncoder();

    function base64url(input: string) {
      return btoa(input)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    }

    const jwtHeader = base64url(JSON.stringify(header));
    const jwtPayload = base64url(JSON.stringify(payload));
    const jwtUnsigned = `${jwtHeader}.${jwtPayload}`;

    const formatPrivateKey = (key: string) => {
      return key.includes("\\n") ? key.replace(/\\n/g, "\n") : key;
    }

    const key = await crypto.subtle.importKey(
      "pkcs8",
      pemToArrayBuffer(formatPrivateKey(env.GSHEET_PRIVATE_KEY)),
      {
        name: "RSASSA-PKCS1-v1_5",
        hash: "SHA-256",
      },
      false,
      ["sign"]
    );

    const signature = await crypto.subtle.sign(
      "RSASSA-PKCS1-v1_5",
      key,
      encoder.encode(jwtUnsigned)
    );

    const jwt = `${jwtUnsigned}.${base64url(
      String.fromCharCode(...new Uint8Array(signature))
    )}`;

    const res = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: jwt,
      }),
    });

    const json = await res.json();

    return json.access_token;
  } catch (error) {
    console.log('getAccessToken error', error);
  }
}

export default getAccessToken;
