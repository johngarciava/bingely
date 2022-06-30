import Nav from '../Nav/Nav';
import './movies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Movies = ({ searchValue, handleSearch, setSearchValue }) => {
    return (
        <section id="movies">
            <Nav />
            <div className="header__container">
                <div className="header__description">
                    <h1 className="header__description--title">Browse our Movies</h1>
                    <div className="header__form">
                        <input
                            type="text"
                            placeholder="Search by title"
                            className="header__description--input"
                            value={searchValue || ''}
                            onChange={e => setSearchValue(e.target.value)}
                            onKeyUp={event => event.key === 'Enter' && handleSearch()} />
                        <div className="btn--submit">
                            <FontAwesomeIcon icon="search" onClick={() => handleSearch()} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Movies
