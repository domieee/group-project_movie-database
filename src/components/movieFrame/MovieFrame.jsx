import movies from '../data/data.js'
import MovieData from '../movieData/MovieData.jsx'
import { useState } from 'react'

/*
    TODO: Erstelle ein Feld, in dem man neue Filme hinzufügen kann.
*/

const MovieFrame = () => {

    const [filter, setFilter] = useState(false)
    const [query, setQuery] = useState('')

    // Creates a copy of the actual data, so we can manipulate the copy instead of the real data
    let filteredMovies = [...movies]

    filteredMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(query.toLowerCase())
    })

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
            } else {
                return 1;
            }
        })
    } else if (filter === 'zToA') {
        movies.sort((a, b) => {
            if (a.title > b.title) {
                return -1;
            } else {
                return 1;
            }
        })
    }

    return (
        <>
            <h1>Movie Data Project</h1>

            <input
            onChange={e => {
                setQuery(e.target.value)
            }}
            type="text" 
            placeholder='Search movie title'
            value={query}
            />

            <br/>

            <div>
                <button onClick={() => setFilter('ascending')}>Year Ascending</button>
                <button onClick={() => setFilter('descending')}>Year Descending</button>
                <button onClick={() => setFilter('bestRate')}>Best Rate</button>
                <button onClick={() => setFilter('aToZ')}>A - Z</button>
                <button onClick={() => setFilter('zToA')}>Z - A</button>
            </div>

            <div className='frameWrap'>
                {filteredMovies.map((movie) => {
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