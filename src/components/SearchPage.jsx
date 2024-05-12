import { useState, lazy } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import completedGames from "../Lists/Games/CompletedGames";
import completedBooks from "../Lists/Books/CompletedBooks";
import completedMangas from "../Lists/Mangas/CompletedMangas";
import completedAnimes from "../Lists/Animes/CompletedAnimes";
import completedPlays from "../Lists/Theater/CompletedPlays";
import pendingGames from "../Lists/Games/PendingGames";
import pendingBooks from "../Lists/Books/PendingBooks";
import pendingMangas from "../Lists/Mangas/PendingMangas";
import Accordion from "./Accordion";

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

  // By default we want to show completed items
  let books = completedBooks;
  let games = completedGames;
  let mangas = completedMangas;
  let animes = completedAnimes;
  let plays = completedPlays;

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
    listToDisplay = listToDisplay.filter(
      (item) =>
        item.author.toLowerCase().includes(wordsToSearch) ||
        item.name.toLowerCase().includes(wordsToSearch)
    );
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

      <div className="w-3/4 m-auto border-4 border-custom-dark-blue rounded-xl mt-4 bg-custom-lighter-cyan">
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
      {
        // We want to check if the user wants to see a random recommendation or a list if items
        !displayRandomRecommendation ? (
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
        ) : randomToDisplay ? (
          <div className="flex m-auto p-3 lg:w-3/4 ">
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
    </div>
  );
}
