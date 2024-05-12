import NavBar from "./NavBar";
import SearchPage from "./SearchPage";

export default function RecommendationPage() {
  return (
    <div>
      <SearchPage
        showForm={true}
        showSearchBar={false}
        multipleCards={false}
      ></SearchPage>
    </div>
  );
}
