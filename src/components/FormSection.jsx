import GenresBooks from "../Lists/Books/GenresBooks";
import GenreGames from "../Lists/Games/GenresGames";
import GenresMangas from "../Lists/Mangas/GenresMangas";
import GenreAnimes from "../Lists/Animes/GenresAnime";
import CategoriesTheater from "../Lists/Theater/CategoriesTheater";
import categoriesMusic from "../Lists/Music/CategoriesMusic";
import GenresMovies from "../Lists/Movies/GenresMovies";
import genresSeries from "../Lists/Series/GenresSeries";
import AllLists from "../Lists/AllLists";
import SearchBar from "./SearchBar";
import Select from "./Select";
import ActionButton from "./ActionButton";
import Switch from "./Switch";

export default function FormSection({
  showSearchBar,
  SetwordsToSearch,
  SetgenreToSearch,
  SetTypeOfListToDisplay,
  typeOfListToDisplay,
  SetDisplayFavourite,
  displayFavourite,
  displayRandomRecommendation,
  SetDisplayRandomRecommendation,
  displayPending,
  SetDisplayPending,
  alreadyRecommended,
  SetAlreadyRecommended,
  SetScoreToFilterBy,
}) {
  let optionsToAdd;
  if (typeOfListToDisplay === "Games") {
    optionsToAdd = GenreGames;
  } else if (typeOfListToDisplay === "Books" || typeOfListToDisplay === "") {
    optionsToAdd = GenresBooks;
  } else if (typeOfListToDisplay === "Mangas") {
    optionsToAdd = GenresMangas;
  } else if (typeOfListToDisplay === "Animes") {
    optionsToAdd = GenreAnimes;
  } else if (typeOfListToDisplay === "Plays") {
    optionsToAdd = CategoriesTheater;
  } else if (typeOfListToDisplay === "Music") {
    optionsToAdd = categoriesMusic;
  } else if (typeOfListToDisplay === "Movies") {
    optionsToAdd = GenresMovies;
  } else if (typeOfListToDisplay === "Series") {
    optionsToAdd = genresSeries;
  }

  // This is to sort the genders alphabetically
  optionsToAdd.sort((item1, item2) => {
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

  return (
    <div className="flex flex-col w-full  m-auto">
      <div className="flex w-full m-auto flex-col md:flex-row justify-around">
        <Select
          optionsToAdd={optionsToAdd}
          selectSetFunction={SetgenreToSearch}
          firstOption={"Cualquier género"}
          score={false}
        ></Select>
        <Select
          optionsToAdd={optionsToAdd}
          selectSetFunction={SetScoreToFilterBy}
          firstOption={"Cualquier puntuación"}
          score={true}
        ></Select>
        <Select
          selectSetFunction={SetTypeOfListToDisplay}
          firstOption={"Opciones"}
          optionsToAdd={AllLists}
        ></Select>
      </div>
      <div className={"flex flex-col md:flex-row justify-around"}>
        <SearchBar
          SetwordsToSearch={SetwordsToSearch}
          showSearchBar={showSearchBar}
        ></SearchBar>
      </div>
      <div className="mt-5  m-auto flex flex-col justify-around md:mt-10 md:flex-row w-full">
        <div className="flex flex-col m-auto">
          <Switch
            SetFunction={SetDisplayRandomRecommendation}
            currentValue={displayRandomRecommendation}
            // We pass this conditions to disable the switch when any of the other switchs is selected
            disabled={displayFavourite || displayPending ? true : false}
            text="Activar Recomendaciones"
          ></Switch>
          <div className={"m-auto mt-2 mb-2"}>
            <ActionButton
              text="Cambiar Recomendación"
              SetFuction={SetAlreadyRecommended}
              onClickValue={!alreadyRecommended}
              show={displayRandomRecommendation ? true : false}
            ></ActionButton>
          </div>
        </div>
        <Switch
          className="m-auto md:mt-0"
          SetFunction={SetDisplayFavourite}
          currentValue={displayFavourite}
          // We pass this conditions to disable the switch when any of the other switchs is selected
          disabled={
            displayRandomRecommendation || displayPending ? true : false
          }
          text="Favoritos"
        ></Switch>

        <Switch
          className="m-auto md:mt-0"
          SetFunction={SetDisplayPending}
          currentValue={displayPending}
          // We pass this conditions to disable the switch when any of the other switchs is selected
          disabled={
            displayRandomRecommendation || displayFavourite ? true : false
          }
          text="Pendientes"
        ></Switch>
      </div>
    </div>
  );
}
