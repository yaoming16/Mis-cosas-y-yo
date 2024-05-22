export default function SearchBar({ SetwordsToSearch, showSearchBar }) {
  return (
    <div className="w-full mt-3 md:w-2/3">
      <div className="flex items-center border-b border-custom-dark-blue py-2 w-2/3 m-auto">
        <input
          className="border bg-white appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none disabled:bg-slate-200 rounded"
          type="text"
          disabled={showSearchBar ? false : true}
          placeholder="¿Qué deseas buscar?"
          aria-label="Full name"
          onChange={(e) => {
            SetwordsToSearch(e.target.value.toLowerCase());
          }}
        />
      </div>
    </div>
  );
}
