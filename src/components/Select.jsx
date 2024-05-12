export default function Select({
  optionsToAdd,
  selectSetFunction,
  disabled = false,
  firstOption,
  score = false,
}) {
  return (
    <div className="inline-block relative m-auto mt-3">
      <select
        disabled={disabled}
        onChange={(e) => {
          // First we check that the user selected a genre, if they select the default option we set the genre to ""
          e.target.value != firstOption
            ? selectSetFunction(e.target.value)
            : selectSetFunction("");
        }}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option>{firstOption}</option>
        {score ? (
          <>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </>
        ) : (
          optionsToAdd.map((option) => (
            <option value={option.name} key={option.id}>
              {option.display ? option.display : option.name}
            </option>
          ))
        )}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
