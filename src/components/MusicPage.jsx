import Navbar from "./NavBar";
import TopTracksCard from "./TopTracksCard";
import ActionButton from "./ActionButton";
import TopArtistsCard from "./TopArtistsCard";
import { useState, useEffect } from "react";

/* Before upload i will need to limit the resets so the user only gets anew token if
 there is none stored or is about to expire. Let's do it!! */

let dev = false;
const fetchTokenURL = dev
  ? "http://localhost:3000/refresh_token"
  : "https://book-list-server.vercel.app/refresh_token";

// Function to get a token from the server
async function getToken() {
  let data = await fetch(fetchTokenURL);
  data = await data.json();
  let date = new Date();
  let dataToStore = {
    token: data.access_token,
    date: date.getTime(),
  };
  localStorage.setItem("token", JSON.stringify(dataToStore));
}

async function chechForExistingToken() {
  let nowDate = new Date();
  /* First we want to check if a token is stored in local storage, if there isn't we wil get one */
  if (localStorage.getItem("token") === null) {
    console.log("null token", Date.now);
    await getToken();
    console.log(JSON.parse(localStorage.getItem("token")));
  } else if (
    /* If there is a token stored we need to check if an hour has passe since it was requested to know if we can still use it */
    (nowDate.getTime() - JSON.parse(localStorage.getItem("token")).date) /
      1000 >
    3550
  ) {
    await getToken();
  } else {
    console.log("we already had a valid token");
  }
}

/* console.log(
  "Passed since last token",
  (nowDate.getTime() - JSON.parse(localStorage.getItem("token")).date) / 1000
); */
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    mode: "cors",
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("token")).token
      }`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

// Get top  tracks from spotify
async function getTopItem(timeRange, type) {
  return (
    await fetchWebApi(
      `v1/me/top/${type}?time_range=${timeRange}&limit=50`,
      "GET"
    )
  ).items;
}

export default function MusicPage() {
  // we need this state to know time range to use
  const [timeRange, SetTimeRange] = useState("long_term");
  // This state is to store the data
  const [data, setData] = useState();
  // This state is to know when the page is loading (waiting for the request answear)
  const [loading, setLoading] = useState(true);
  // This state is to know if the user wants to show top artists or top tracks
  const [listType, setListType] = useState("artists");

  // Fetch the data and saves it in data state. This is called when the page is first rendered and on timeRange, listType updates.
  const handleFetch = () => {
    getTopItem(timeRange, listType).then((res) => {
      setData(res);
      setLoading(false);
    });
  };

  /* On first load and when the time range changes, we set loading to true and start fetching the data.
  handleFetch sets loading to false when it finishes */
  useEffect(() => {
    console.log("useEffect");
    setLoading(true);
    /* We will check if a valid token is saved when we first load the page and on every update. This is to prevent the case that the user left open
    the page for x time and, if the token expired, when a new request for data is made we won't have a valid token. */
    chechForExistingToken().then((response) => {
      handleFetch();
    });
  }, [timeRange, listType]);

  // This function is to get the info we want to display in the desired format
  function toRender() {
    switch (listType) {
      case "tracks":
        return data.map((item, index) => (
          <TopTracksCard
            key={index}
            data={item}
            number={index + 1}
          ></TopTracksCard>
        ));
      case "artists":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-2 md:gap-3 lg:gap-6 xl:gap-10">
            {data.map((item, index) => (
              <TopArtistsCard
                key={index}
                data={item}
                number={index + 1}
              ></TopArtistsCard>
            ))}
          </div>
        );
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="p-3 md:p-5 lg:p-7 xl:p-10">
        <div className="grid grid-cols-3 gap-1 mb-5">
          <ActionButton
            text="Último mes"
            SetFuction={SetTimeRange}
            onClickValue={"short_term"}
            show={true}
            active={timeRange === "short_term"}
          ></ActionButton>
          <ActionButton
            text="últimos 6 meses"
            SetFuction={SetTimeRange}
            onClickValue={"medium_term"}
            show={true}
            active={timeRange === "medium_term"}
          ></ActionButton>
          <ActionButton
            text="últimos 12 semanas"
            SetFuction={SetTimeRange}
            onClickValue={"long_term"}
            show={true}
            active={timeRange === "long_term"}
          ></ActionButton>
        </div>
        <div className="grid grid-cols-2 gap-1 mb-5">
          <ActionButton
            text="Canciones"
            SetFuction={setListType}
            onClickValue={"tracks"}
            show={true}
            active={listType === "tracks"}
          ></ActionButton>
          <ActionButton
            text="Artistas"
            SetFuction={setListType}
            onClickValue={"artists"}
            show={true}
            active={listType === "artists"}
          ></ActionButton>
        </div>
        <div className="">
          {loading ? (
            <div className="flex flex-row">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-custom-dark-blue"
                role="status"
              ></div>
              <p className="ml-3 font-bold text-custom-dark-blue text-xl">
                Cargando...
              </p>
            </div>
          ) : (
            toRender()
          )}
        </div>
      </div>
    </div>
  );
}
