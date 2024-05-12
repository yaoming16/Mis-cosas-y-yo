import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import FormSection from "./FormSection";

export default function Accordion({
  text,
  title,
  mdDisabled,
  form,
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
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <>
      <div id="accordionExample" className={mdDisabled ? " md:hidden" : ""}>
        <div className="rounded-t-lg borde">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${
                activeElement === "element1" &&
                `text-primary [box-shadow:inset_0_-2px_0_rgba(12,6,46)] `
              } group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none bg-transparent font-semibold`}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {title}
              <span
                className={`${
                  activeElement === "element1"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] `
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element1"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            {form ? (
              <FormSection
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
              ></FormSection>
            ) : (
              <div className="px-5 py-4 text-lg">{text}</div>
            )}
          </TECollapse>
        </div>
      </div>
    </>
  );
}
