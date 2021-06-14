import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieView = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails ] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3f4a4438067d9317384e1d747fe6b26e&language=en-US`)
            .then(response => response.json())
            .then(data => {
                //setTimeout(() => {
                    setMovieDetails(data)
                    setIsLoading(false)
                //}, 2000)
            })
    }, [id])

    function renderMovieDetails() {
        if(isLoading) {
            return <Hero text="Loading..." />
        }
        if(movieDetails) {
            var posterPath
            // TODO: Deal with a possible missing image
            if(movieDetails.poster_path){
                posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            } else {
                posterPath = "https://as2.ftcdn.net/v2/jpg/00/90/40/47/1000_F_90404776_o3iTJ12Mb88zrfKcaxoAHPmr4D6C0Fpf.jpg"
            }
            
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            
            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt="..." className="img-fluid shadow rounded" />
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">
                                    {movieDetails.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    return renderMovieDetails()
}

export default MovieView;