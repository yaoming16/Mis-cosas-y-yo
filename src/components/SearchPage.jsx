import { useState, lazy, useEffect } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import completedGames from "../Lists/Games/CompletedGames";
import completedBooks from "../Lists/Books/CompletedBooks";
import completedMangas from "../Lists/Mangas/CompletedMangas";
import completedAnimes from "../Lists/Animes/CompletedAnimes";
import completedPlays from "../Lists/Theater/CompletedPlays";
import completedMusic from "../Lists/Music/CompletedMusic";
import completedMovies from "../Lists/Movies/CompletedMovies";
import completedSeries from "../Lists/Series/CompletedSeries";
import pendingGames from "../Lists/Games/PendingGames";
import pendingBooks from "../Lists/Books/PendingBooks";
import pendingMangas from "../Lists/Mangas/PendingMangas";
import Footer from "./Footer";
import Accordion from "./Accordion";
import ScrollTopButton from "./ScrollTopButton";

export default function SearchPage() {
  // We need this state to get the words from the input we will use to search the book list
  const [wordsToSearch, SetwordsToSearch] = useState("");
  // we need this state to get the genre that the user selected
  const [genreToSearch, SetgenreToSearch] = useState("");
  // We need another hook to change the list we want to display (Books, Games, etc)
  const [typeOfListToDisplay, SetTypeOfListToDisplay] = useState("");
  // We need a hook to keep track if the user want to only see the favourite games
  const [displayFavourite, SetDisplayFavourite] = useState(false);
  //This hook is to know if the user want a random recommendation
  const [displayRandomRecommendation, SetDisplayRandomRecommendation] =
    useState(false);
  //This hook is to know if the user want a random recommendation
  const [displayPending, SetDisplayPending] = useState(false);
  // Hook for the recommendation button
  const [alreadyRecommended, SetAlreadyRecommended] = useState(false);
  // Hook for the score filter
  const [scoreToFilterBy, SetScoreToFilterBy] = useState("");

  useEffect(() => {
    // When typeOfListToDisplay changes we need to reset genre to a "" to show all available options
    // This is to avoid the following case: if we are looking at movies and select western and after that we change to books, we will se an empty list
    // because there is no western genre in books.
    SetgenreToSearch("");
  }, [typeOfListToDisplay]);

  //Function to check if we just changed a state
  function checkPrevState(state, setState) {
    set;
  }

  // By default we want to show completed items
  let books = completedBooks;
  let games = completedGames;
  let mangas = completedMangas;
  let animes = completedAnimes;
  let plays = completedPlays;
  let music = completedMusic;
  let movies = completedMovies;
  let series = completedSeries;

  // This array will contain the result of the books list after filtered by the parameters entered by the user.
  let listToDisplay;
  // We check if the user want to see pending items to set the list to use
  if (displayPending) {
    books = pendingBooks;
    games = pendingGames;
    mangas = pendingMangas;
    // For categories other than the above i don't plan to add a pending list for now. So if the user wants to see pending of the categories below we set them to a an empty array.
    animes = [];
    plays = [];
    music = [];
    movies = [];
    series = [];
  }

  // We will set the variables depending on the list selected determined by listToDisplay. The || typeOfListToDisplay === "" is to set the default option
  if (typeOfListToDisplay === "Games") {
    listToDisplay = games;
  } else if (typeOfListToDisplay === "Books" || typeOfListToDisplay == "") {
    listToDisplay = books;
  } else if (typeOfListToDisplay === "Mangas") {
    listToDisplay = mangas;
  } else if (typeOfListToDisplay === "Animes") {
    listToDisplay = animes;
  } else if (typeOfListToDisplay === "Plays") {
    listToDisplay = plays;
  } else if (typeOfListToDisplay === "Music") {
    listToDisplay = music;
  } else if (typeOfListToDisplay === "Series") {
    listToDisplay = series;
  } else if (typeOfListToDisplay === "Movies") {
    listToDisplay = movies;
  }

  // By default we will filter the array alphabetically
  listToDisplay.sort((item1, item2) => {
    const lowerItem1 = item1.name.toLowerCase();
    const lowerItem2 = item2.name.toLowerCase();

    if (lowerItem1 < lowerItem2) {
      return -1; // Return a negative value if item1 should come before item2
    } else if (lowerItem2 > lowerItem1) {
      return 1; // Return a positive value if item1 should come after item2
    } else {
      return 0; // Return 0 if equal
    }
  });

  // Filter by genre
  if (genreToSearch != "") {
    listToDisplay = listToDisplay.filter((item) =>
      item.genres.includes(genreToSearch)
    );
  }

  // Filter by user input
  if (wordsToSearch != "") {
    listToDisplay = listToDisplay.filter((item) => {
      if (typeOfListToDisplay !== "Music") {
        if (
          item.author.toLowerCase().includes(wordsToSearch) ||
          item.name.toLowerCase().includes(wordsToSearch)
        )
          return true;
        /* In case the user is looking at the music category, we want them to be able to filter 
    taking into account the pieces in the program of the concert (composer and name)
    This surely can be done better*/
      } else {
        let programtrue = false;
        for (let piece of item.program) {
          for (let [k, v] of Object.entries(piece)) {
            if (v.toLowerCase().includes(wordsToSearch)) {
              programtrue = true;
            }
          }
        }
        if (
          programtrue ||
          item.author.toLowerCase().includes(wordsToSearch) ||
          item.name.toLowerCase().includes(wordsToSearch)
        ) {
          return true;
        }
      }
    });
  }

  // Filter by score of the game
  if (scoreToFilterBy != "") {
    listToDisplay = listToDisplay.filter(
      (item) => item.score === parseInt(scoreToFilterBy)
    );
  }

  // Filter to display favourites
  if (displayFavourite) {
    listToDisplay = listToDisplay.filter((item) => item.favourite);
  }

  // Filter only for when we want to show a random item for the recommendation.
  // We need to keep this section after all the filters are applied
  let randomToDisplay;
  if (displayRandomRecommendation) {
    let maxIndex = listToDisplay.length;
    randomToDisplay = listToDisplay[Math.floor(Math.random() * maxIndex)];
  }

  return (
    <div className="">
      <NavBar></NavBar>

      <div className="m-6 sm:w-3/4 sm:m-auto sm:mt-6 border-4 border-custom-dark-blue rounded-xl bg-custom-lighter-cyan">
        <Accordion
          SetwordsToSearch={SetwordsToSearch}
          SetgenreToSearch={SetgenreToSearch}
          SetTypeOfListToDisplay={SetTypeOfListToDisplay}
          typeOfListToDisplay={typeOfListToDisplay}
          SetDisplayFavourite={SetDisplayFavourite}
          displayFavourite={displayFavourite}
          displayRandomRecommendation={displayRandomRecommendation}
          SetDisplayRandomRecommendation={SetDisplayRandomRecommendation}
          displayPending={displayPending}
          SetDisplayPending={SetDisplayPending}
          showSearchBar={displayRandomRecommendation ? false : true}
          alreadyRecommended={alreadyRecommended}
          SetAlreadyRecommended={SetAlreadyRecommended}
          SetScoreToFilterBy={SetScoreToFilterBy}
          form={true}
          title={"Filtros"}
        ></Accordion>
      </div>

      <ScrollTopButton></ScrollTopButton>

      {
        // We want to check if the user wants to see a random recommendation or a list if items
        !displayRandomRecommendation ? (
          displayPending && listToDisplay.length === 0 ? (
            <div className="flex mt-8 p-3">
              <p className="m-auto font-bold text-2xl sm:text-4xl text-center">
                No hay pendientes en esta categoría
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-10 p-3 md:p-5 lg:p-7 xl:p-10  m-auto lg:w-[95%] 2xl:w-[90%]">
              {listToDisplay.map((item) => (
                <Card
                  item={item}
                  key={item.id}
                  typeOfListToDisplay={typeOfListToDisplay}
                  pendingCard={displayPending}
                ></Card>
              ))}
            </div>
          )
        ) : randomToDisplay ? (
          <div className="grid grid-cols-1 p-3 lg:w-1/2 m-auto">
            <Card
              item={randomToDisplay}
              typeOfListToDisplay={typeOfListToDisplay}
              pendingCard={displayPending}
            ></Card>
          </div>
        ) : (
          <div></div>
        )
      }
      <Footer></Footer>
    </div>
  );
}
