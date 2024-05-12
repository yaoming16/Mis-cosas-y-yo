//This file was from an idea i had. It basically consisted in using steam api to get the information for the games.
// Altough i could access the information for the games, i finally decided that it wasn't what i wanted and was better to have more control to the descriptions and information displayed on the page
// I decided to keep the file in case of future use

// A list with all steam games, name and appid
let allGamesSteamLink =
  "https://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json";

let gameID;
// you need to add the game ID at the end of "=" sign
let singleGameLink = "https://store.steampowered.com/api/appdetails?appids=";

// This one is to store all game names
let allGamesNames = ["Baldur's gate 3"];
// This one is to store al gme ids
let allId = [];
// Store game info in the format that we need
let finalGamesInfo = [];
// Here we store the data from allGamesSteamLink
let allGamesData = await jsonData(allGamesSteamLink);
allGamesData = allGamesData.data;

// Now we store the steam ids of all the games in allGamesList array
for (let gameName of allGamesNames) {
  for (let steamGame of allGamesData.applist.apps) {
    try {
      if (gameName.toLowerCase() === steamGame.name.toLowerCase()) {
        allId.push(steamGame.appid);
      }
    } catch (error) {
      continue;
    }
  }
}

// Finally we search each id to save the game info in the format that we need
for (let id of allId) {
  let gameData = jsonData(singleGameLink + id.stringify());
  let { data, status } = gameData;

  let dataToPush = {
    id: id,
    name: data.data.name,
    author: "asd",
    img: "1984.jpg",
    altImgText: "",
    plot: data.data.short_description,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    genres: ["Ciencia Ficción"],
    favourite: false,
    score: 3,
  };
}

// function to fetch the json files
async function jsonData(url) {
  const result = {};
  try {
    const response = await fetch(url);
    if (response.ok) {
      result.data = await response.json();
      result.status = "ok";
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    result.status = "error";
    result.data = error;
  }
  return result;
}
