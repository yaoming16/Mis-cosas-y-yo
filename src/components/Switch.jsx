export default function Switch({ SetFunction, currentValue, text, disabled }) {
  return (
    <div>
      <label
        className="text-nowrap inline-flex items-center cursor-pointer m-1 m"
        htmlFor={text}
      >
        <input
          className="sr-only peer"
          type="checkbox"
          role="switch"
          id={text}
          onChange={(e) => {
            SetFunction(!currentValue);
          }}
          // We will disable the switch if any of the other switch elements is selected
          disabled={disabled}
        ></input>
        <div
          className={
            `relative w-11 h-6   rounded-full 
        peer  peer-checked:after:translate-x-full 
        rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
        after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 
        after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 
        peer-checked:bg-custom-dark-blue` +
            (!disabled ? " bg-gray-700" : " bg-gray-400")
          }
        ></div>
        <span className="ms-3">{text}</span>
      </label>
    </div>
  );
}
