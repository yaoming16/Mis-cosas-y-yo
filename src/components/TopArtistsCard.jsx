import { LazyLoadImage } from "react-lazy-load-image-component";

export default function topTracksCard({ data, number }) {
  let { images, genres, name } = data;
  genres = genres.slice(0, 2);
  return (
    <div className="bg-custom-lighter-cyan mb-2 flex flex-col p-1">
      <LazyLoadImage
        className="object-scale-down m-auto"
        src={images[2].url}
        width={images[2].width}
        height={images[2].height}
      ></LazyLoadImage>
      <div className="flex flex-row m-auto mt-4">
        <p className="">{number}.</p>
        <p className="font-bold ml-1">{name}</p>
      </div>
      <div className="flex flex-row justify-center w-3/4 m-auto">
        {genres.map((genre, index) => (
          <p className="text-center ml-2 italic" key={index}>
            {genre}
          </p>
        ))}
      </div>
    </div>
  );
}
