import {Fragment, useState} from "react";
// import Message from "./Components/message";
// import Counter from "./Components/counter";
import Pic1 from "./assets/movies/Pic1.png";
import Pic2 from "./assets/movies/Pic2.png";
import Pic3 from "./assets/movies/Pic3.png";
import Pic4 from "./assets/movies/Pic4.png";
import Pic5 from "./assets/movies/Pic5.png";
import trailer from "./assets/movies/trailer.png";
// import Text from "./Components/Text";
// import ListGroup from "./Components/ListGroup";
// // import Button from "./Components/Button";
import MovieCard from "./Components/MovieCard";
import UserForm from "./Components/Forms/UserForm";

const movies = [
  {
    title: "My Card",
    description:
      "Lorem ipsum dolor sit animi at alias excepturi sint amet ut fugiat deserunt cum. Quo aliquid ad, corporis ametpellat odit quibusdam enim debitis!",
    rating: 4.0,
    image: Pic1,
    OnTop: "watch trailer",
  },
  {
    title: "My Second Card",
    description:
      "Lorem ipsum dolor sit animi at alias excepturi sint amet ut fugiat deserunt cum. Quo aliquid ad, corporis ametpellat odit quibusdam enim debitis!",
    rating: 6.0,
    image: Pic2,
    OnTop: "watch trailer",
  },

  {
    title: "My Third Card",
    description:
      "Lorem ipsum dolor sit animi at alias excepturi sint amet ut fugiat deserunt cum. Quo aliquid ad, corporis ametpellat odit quibusdam enim debitis!",
    rating: 3.0,
    image: Pic3,
    OnTop: "watch trailer",
  },

  {
    title: "My fourth Card",
    description:
      "Lorem ipsum dolor sit animi at alias excepturi sint amet ut fugiat deserunt cum. Quo aliquid ad, corporis ametpellat odit quibusdam enim debitis!",
    rating: 5.0,
    image: Pic4,
    OnTop: "watch trailer",
  },

  {
    title: "My fourth Card",
    description:
      "Lorem ipsum dolor sit animi at alias excepturi sint amet ut fugiat deserunt cum. Quo aliquid ad, corporis ametpellat odit quibusdam enim debitis!",
    rating: 9.0,
    image: Pic5,
    OnTop: "watch trailer",
  },

  {
    title: "My fourth Card",
    description:
      "Lorem ipsum dolor sit animi at alias excepturi sint amet ut fugiat deserunt cum. Quo aliquid ad, corporis ametpellat odit quibusdam enim debitis!",
    rating: 5.0,
    image: Pic3,
    OnTop: "watch trailer",
  },

  {
    title: "My fourth Card",
    description:
      "Lorem ipsum dolor sit animi at alias excepturi sint amet ut fugiat deserunt cum. Quo aliquid ad, corporis ametpellat odit quibusdam enim debitis!",
    rating: 8.5,
    image: Pic2,
    OnTop: "watch trailer",
  },

  {
    title: "My  Card",
    description:
      "Lorem ipsum dolor sit animi at alias excepturi sint amet ut fugiat deserunt cum. Quo aliquid ad, corporis ametpellat odit quibusdam enim debitis!",
    rating: 7.8,
    image: Pic5,
    OnTop: "watch trailer",
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <>
      <div className="container mt-8">
        <h2 className="mt-4">Movie List</h2>
        <div className="d-flex flex-wrap">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search a for a movie"
              className="form-control"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <br />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>{" "}
          *
          <div className="row">
            {movies.map((movie, index) => {
              return (
                <div
                  className="col-12 col-sm-12 col-md-4 col-lg-3 mb-4"
                  key={index}>
                  {movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard
                      key={index}
                      title={movie.title}
                      description={movie.description}
                      rating={movie.rating}
                      image={movie.image}
                      OnTop={movie.OnTop}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <UserForm />
        </div>
      </div>
    </>
  );
}

export default App;
