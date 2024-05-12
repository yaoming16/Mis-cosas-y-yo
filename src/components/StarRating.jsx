import parse from "html-react-parser";

export default function StarRatings({ rating }) {
  function addStars(score) {
    let stars = "";
    for (let i = 1; i <= score; i++) {
      stars += `
              <span className="fa fa-star text-custom-red"></span>
              `;
    }
    for (let j = score + 1; j <= 10; j++) {
      stars += `
              <span className="fa fa-star"></span>
              `;
    }
    return stars;
  }

  return <div className="m-auto">{parse(addStars(rating))}</div>;
}
