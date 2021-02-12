import React from 'react'
const IMAGE_API = "https://image.tmdb.org/t/p/w500/"

const Movies = ({title,poster_path,overview,vote_average}) => {
    return (
        <div className="moviesComponent">
            <div className="moviesComponent__header">
                <img src={IMAGE_API+poster_path} alt={title} />
            </div>
            <div className="moviesComponent__info">
                <h3>{title}</h3>
                <h3>{vote_average}</h3>
            </div>

            <div className="moviesComponent__overview">
                <h3>{overview}</h3>
            </div>
        </div>
    )
}

export default Movies
