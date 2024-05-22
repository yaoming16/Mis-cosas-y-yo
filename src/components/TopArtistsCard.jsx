import { LazyLoadImage } from "react-lazy-load-image-component";

export default function topTracksCard({ data, number }) {
  const { images, genres, name } = data;
  return (
    <div className="bg-custom-lighter-cyan mb-2 flex flex-col p-1">
      <LazyLoadImage
        className="object-scale-down m-auto"
        src={images[2].url}
        width={images[2].width}
        height={images[2].height}
      ></LazyLoadImage>
      <div className="flex flex-row m-auto">
        <p className="">{number}.</p>
        <p className="font-bold ml-1">{name}</p>
      </div>
    </div>
  );
}
