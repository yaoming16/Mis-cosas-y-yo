export default function ActionButton({
  SetFuction,
  onClickValue,
  text,
  show = false,
  active = false,
}) {
  return (
    <button
      className={
        "whitespace-normal mt-2 flex-shrink-0  hover:bg-custom-dark-blue hover:border-custom-lighter-cyan text-sm md:text-base lg:text-lg border-4 text-white py-1 px-2 rounded" +
        (show ? "" : " invisible") +
        (active
          ? " bg-custom-dark-blue border-custom-lighter-cyan"
          : " bg-custom-purple border-custom-purple")
      }
      type="button"
      // We set the display to the value of onClickValue.
      onClick={(e) => {
        SetFuction(onClickValue);
      }}
    >
      {text}
    </button>
  );
}
