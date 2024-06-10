import { LazyLoadImage } from "react-lazy-load-image-component";

export default function topTracksCard({ data, number }) {
  const { album, artists, name } = data;
  return (
    <div className="bg-custom-lighter-cyan mb-2 flex flex-row p-1">
      <p className="align-middle w-[20px]">{number}.</p>
      <LazyLoadImage
        className="object-scale-down"
        src={album.images[2].url}
        width={album.images[2].width}
        height={album.images[2].height}
      ></LazyLoadImage>
      <div className="ml-2 flex flex-col lg:flex-row">
        <p className="font-bold">{name}</p>
        {artists.map((artist, index) => (
          <p className="ml-2" key={index}>
            {artist.name}
          </p>
        ))}
      </div>
    </div>
  );
}
