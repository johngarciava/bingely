import './recommended.css';

const Recommended = ({ navigate, base_url, recommendedMovies }) => {
    return (
        <div className="movieDetails__container">
            <div className="movieDetails__row">
                <div className="movieDetails--top">
                    <h2 className="movieDetails--title--top">
                        Recommended Movies
                    </h2>
                </div>
                <div className="recommendedMovies" >
                    {
                        recommendedMovies
                            .filter(movie => movie.poster_path !== null)
                            .slice(0, 4)
                            .map(movie => (
                                <div className="recommendedMovies__search-result" key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
                                    <figure className="recommended__img--figure">
                                        <img
                                            src={`${movie.poster_path === null ? '' : base_url + movie.poster_path}`}
                                            alt=""
                                            key={movie.id}
                                            className="recommendedMovies__img-row" />
                                    </figure>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Recommended
