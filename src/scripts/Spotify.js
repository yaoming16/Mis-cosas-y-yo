// Again this was for an idea to show spotify songs that i like in the webpage. I decided to keep this file in case that in the future add it

export default async function Spotify() {
  // Code Verifier

  const generateRandomString = (length) => {
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  };

  const codeVerifier = generateRandomString(64);

  const sha256 = async (plain) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return crypto.subtle.digest("SHA-256", data);
  };

  const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  };

  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  const clientId = "63ea9625ca5543ef85e64fd62285e1df";
  const redirectUri = "http://localhost:/";

  const scope = "user-read-currently-playing user-top-read";
  const authUrl = new URL("https://accounts.spotify.com/authorize");

  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("code");

  // generated in the previous step
  localStorage.setItem("code_verifier", codeVerifier);

  const params = {
    response_type: "code",
    client_id: clientId,
    scope,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  };

  authUrl.search = new URLSearchParams(params).toString();
  // window.location.href = authUrl.toString();
}
