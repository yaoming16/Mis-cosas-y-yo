import GenresBooks from "../Lists/Books/GenresBooks";
import GenreGames from "../Lists/Games/GenresGames";
import GenresMangas from "../Lists/Mangas/GenresMangas";
import GenreAnimes from "../Lists/Animes/GenresAnime";
import GenreTheater from "../Lists/Theater/GenresTheater";
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
    optionsToAdd = GenreTheater;
  }

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
        <div className="flex flex-col justify-around">
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
              hidden={displayRandomRecommendation ? true : false}
            ></ActionButton>
          </div>
        </div>
        <Switch
          SetFunction={SetDisplayFavourite}
          currentValue={displayFavourite}
          // We pass this conditions to disable the switch when any of the other switchs is selected
          disabled={
            displayRandomRecommendation || displayPending ? true : false
          }
          text="Favoritos"
        ></Switch>

        <Switch
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
