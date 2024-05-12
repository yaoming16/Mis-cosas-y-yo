import Spotify from "../scripts/Spotify";

// Before upload i will need to limit the resets so the user only gets anew token if
// ther eis none stored or is about to expire. How to do it is the question jeje
let data = await fetch("https://book-list-server.vercel.app/login");
data = await data.json();
console.log(data);

const token = data.access_token;
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

// Get top  tracks from spotify
async function getTopTracks() {
  return (await fetchWebApi("v1/me/player/currently-playing", "GET")).items;
}

console.log("Token" + data.access_token);
const topTracks = await getTopTracks();
console.log(topTracks);

export default function MusicPage() {
  return <div></div>;
}
