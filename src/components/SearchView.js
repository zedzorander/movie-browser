import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    var posterUrl
    if(movie.poster_path) {
        posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    } else {
        posterUrl = "https://as2.ftcdn.net/v2/jpg/00/90/40/47/1000_F_90404776_o3iTJ12Mb88zrfKcaxoAHPmr4D6C0Fpf.jpg"
    }
    const detailUrl = `/movies/${movie.id}`

    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}

const SearchView = ({ keyword, searchResults }) => {
    var title
    
    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })

    if(searchResults.length === 0) {
        title = `There are no results for ${keyword}`
    } else {
        title = `You are searching for ${keyword}`
    }
    
    return (
        <>
            <Hero text={title} />
            {resultsHtml &&
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            }
        </>
    )
}

export default SearchView;