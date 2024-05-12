export default function ActionButton({
  SetFuction,
  onClickValue,
  text,
  hidden,
}) {
  return (
    <button
      className={
        "mt-2 flex-shrink-0 bg-custom-purple hover:bg-custom-dark-blue border-custom-purple hover:border-custom-lighter-cyan text-sm md:text-base lg:text-lg border-4 text-white py-1 px-2 rounded" +
        (hidden ? "" : " invisible")
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
