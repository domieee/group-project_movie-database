const MovieData = (movie) => {
    console.log('object');
    return (
        <>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
            <p>{movie.director}</p>
            <p>{movie.duration}</p>
            <p>{movie.rate}</p>
            <div>
                <p>{movie.genre}</p>
            </div>
        </>
    );
}

export default MovieData;