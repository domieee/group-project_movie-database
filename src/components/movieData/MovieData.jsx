// TODO: CHECK WHY

const MovieData = (movie) => {

    return (
        <>
            <div className="articleWrap">
                <p>{movie.title}</p>
                <p>{movie.year}</p>
                <p>{movie.director}</p>
                <p>{movie.duration}</p>
                <p>{movie.rate}</p>
                <div className="genreWrap">
                    {movie.genre}
                </div>
            </div>
        </>
    );
}

export default MovieData;