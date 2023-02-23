import movies from '../data/data.js'
import MovieData from '../movieData/MovieData.jsx'
import { useState } from 'react'

/*
    TODO: Erstelle ein Feld, in dem man neue Filme hinzufügen kann.
    TODO: Erstelle eine Suchleiste, um nach Filmen zu suchen.
*/

const MovieFrame = () => {

    const [filter, setFilter] = useState(false)

    if (filter === 'ascending') {
        movies.sort((a, b) => a.year - b.year)
    } else if (filter === 'descending') {
        movies.sort((a, b) => b.year - a.year)
    } else if (filter === 'bestRate') {
        movies.sort((a, b) => b.rate - a.rate)
    } else if (filter === 'aToZ') {
        movies.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            } else if (a.title > b.title) {
                return 1;
            }
        })
    } else if (filter === 'zToA') {
        movies.sort((a, b) => {
            if (a.title > b.title) {
                return -1;
            } else if (a.title < b.title) {
                return 1;
            }
        })
    }

    return (
        <>
            <div>
                <button onClick={() => setFilter('ascending')}>Ascending</button>
                <button onClick={() => setFilter('descending')}>Descending</button>
                <button onClick={() => setFilter('bestRate')}>Best Rate</button>
                <button onClick={() => setFilter('aToZ')}>A - Z</button>
                <button onClick={() => setFilter('zToA')}>Z - A</button>
            </div>
            <h1>Movie Databank Project</h1>
            <div className='frameWrap'>
                {movies.map((movie) => {
                    return <MovieData
                        title={movie.title}
                        year={movie.year}
                        director={movie.director}
                        duration={movie.duration}
                        genre={movie.genre.map((genre) => {
                            return <p>{genre}</p>
                        })}
                        rate={movie.rate}
                    />
                })}
            </div>
        </>
    );
}

export default MovieFrame;