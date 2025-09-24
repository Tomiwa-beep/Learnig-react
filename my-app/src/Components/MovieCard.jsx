import {useState} from "react";
import heartFilled from "../assets/movies/heartFilled.png";
import heartopen from "../assets/movies/heartopen.png";

function MovieCard({title, description, image, rating, OnTop}) {
  const ratingClass = ["text-bg-danger", "text-bg-success", "text-bg-warning"];
  const [hasLiked, setHasLiked] = useState(false);
  let setRating =
    rating >= 8
      ? "text-bg-success"
      : rating >= 5
      ? "text-bg-warning"
      : "text-bg-danger";

  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <div className="position-relative">
          <img src={image} className="card-img-top  " alt={title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <span className={setRating}>{rating}/10</span>
            <button onClick={() => setHasLiked(!hasLiked)}>
              {hasLiked ? (
                <img src={heartFilled} width={20} height={20} alt={title} />
              ) : (
                <img src={heartopen} width={20} height={20} alt={title} />
              )}
            </button>
          </p>
          <button
            className="btn btn-primary"
            onClick={alert("tralier coming soon")}>
            {OnTop}
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
