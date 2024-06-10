import ScrollToTop from "react-scroll-to-top";

export default function ScrollTopButton() {
  return (
    <ScrollToTop
      top={2500}
      smooth
      className="!bg-custom-purple !rounded-full text-white"
      component={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 block m-auto"
        >
          <path
            fillRule="evenodd"
            d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      }
      viewBox="-50 0 256 256"
    />
  );
}
