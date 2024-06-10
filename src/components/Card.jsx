import Accordion from "./Accordion";
import StarRatings from "./StarRating";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Card(props) {
  const { name, author, plot, review, genres, id, score, program } = props.item;
  const { typeOfListToDisplay, pendingCard } = props;

  return (
    <div className="p-2 lg:p-4 border-4 shadow-xl hover:shadow-2xl border-custom-red  bg-custom-lighter-cyan break-words flex flex-col sm:flex-row lg:flex-col xl:flex-row">
      <div className="block m-auto h-1/2 max-h-[500px] sm:max-h-full sm:h-full sm:w-2/5 md:w-2/5 lg:w-full  lg:max-h-[500px]  xl:max-h-full xl:w-5/12 2xl:w-4/12  xl-h-full">
        <LazyLoadImage
          className="w-full h-full  object-contain sm:object-cover lg:object-contain xl:object-cover"
          src={
            // If the user has not selected a list, typeOfListToDisplay == "", so we need to take into account this situation.
            // Books is going to be the default option we want to show so we set the book images folder as the src aattribute if typeOfListToDisplay = "".
            typeOfListToDisplay != ""
              ? "/Mis-cosas-y-yo/images/" +
                typeOfListToDisplay +
                "/" +
                id.toString() +
                ".jpg"
              : "/Mis-cosas-y-yo/images/Books/" + id.toString() + ".jpg"
          }
          alt={name + " image"}
          htloading="lazy"
        ></LazyLoadImage>
      </div>
      <div className="m-auto w-full sm:w-3/5 md:w-3/5 lg:w-full xl:w-7/12 2xl:w-7/12  sm:ml-3 lg:ml-0 xl:ml-3">
        <div className="mt-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">{name}</h2>
          <h3 className="mt-2 text-center text-xl sm:text-2xl">{author}</h3>
          <div className="mt-2 text-lg flex flex-row flex-wrap justify-center italic">
            {genres.map((item, index) => (
              <span className="mr-2" key={index}>
                {item + (genres.length - 1 !== index ? ", " : "")}
              </span>
            ))}
          </div>
        </div>
        <div className="">
          {/* We will use a slightly different format to show the "plot" of the music concerts, so we need to send to the accordeon a diferent object than the rest of  */}
          <Accordion
            text={
              typeOfListToDisplay === "Music" ? (
                <div>
                  {program.map((piece, index) => (
                    <div className="mb-3" key={index}>
                      <p className="font-bold text-lg">{piece.composer}</p>
                      <p>{piece.name}</p>
                    </div>
                  ))}
                </div>
              ) : (
                plot
              )
            }
            title={typeOfListToDisplay === "Music" ? "Programa" : "Trama"}
            mdDisabled={false}
          ></Accordion>
          {
            // We will show the secction of "Comentario personal" only for the items that have a review or some kind of comment different from an empty string "".
            !pendingCard && review != `` ? (
              <Accordion
                text={review}
                title={"Comentario personal"}
                mdDisabled={false}
              ></Accordion>
            ) : (
              <></>
            )
          }
          {
            // The items that i don't remeber i scored them 0. We are going to show only the score of items that have a score different from 0
            score != 0 ? (
              <div className="flex justify-around">
                <StarRatings rating={score}></StarRatings>
              </div>
            ) : (
              ""
            )
          }
        </div>
      </div>
    </div>
  );
}
