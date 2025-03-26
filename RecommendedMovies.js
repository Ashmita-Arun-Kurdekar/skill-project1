import React from "react";

const movies = [
  { title: "Jab We Met", imgSrc: "/images/movies/jab-we-met.jpeg" },
  { title: "3 Idiots", imgSrc: "/images/movies/3-idiots.jpeg" },
  { title: "Tare Zameen Par", imgSrc: "/images/movies/tare-zameen-par.jpeg" },
  { title: "Bahubali", imgSrc: "/images/movies/bahubali.jpeg" },
  { title: "Zindagi Na Milegi Dobara", imgSrc: "/images/movies/zindagi-na-milegi-dobara.jpeg" }
];

const RecommendedMovies = () => {
  return (
    <div className="container mt-4">
      <h4>Recommended Movies</h4>
      <div className="row">
        {movies.map((movie, index) => (
          <div key={index} className="col-md-2">
            <div className="card text-center">
              <img src={movie.imgSrc} className="card-img-top" alt={movie.title} style={{ height: "150px", objectFit: "cover" }} />
              <div className="card-body">
                <p className="card-text">{movie.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedMovies;
