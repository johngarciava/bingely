import Movie from "../ui/Movie/Movie"
import "./display.css"
import { useState } from "react"
import { Slider } from "@material-ui/core"
import EmptyDisplay from "../../assets/undraw_searching.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Display = ({ movies, loading }) => {
  const homeSearch = localStorage.getItem("homeSearch")
  const displaySearch = localStorage.getItem("displaySearch")
  const [val, setVal] = useState([1900, 2020])

  const handleChange = (e, newVal) => {
    setVal(newVal)
  }

  const marks = [
    {
      value: 1900,
      label: "1900",
    },
    {
      value: 2020,
      label: "2020",
    },
  ]
  return (
    <section id="display">
      <div className="display__container">
        <div className="row">
          <div className="display__heading-section">
            <h1 className="display__search--header">
              Search results for{" "}
              <span className="text--accent">
                "{homeSearch || displaySearch}"
              </span>
            </h1>
            <div className="display__price-filter--wrapper">
              <h2 className="display__price-filter-title">
                Date range:{" "}
                <span className="text--accent">
                  {" "}
                  {val[0]} to {val[1]}
                </span>
              </h2>
              <Slider
                getAriaLabel={() => "Date"}
                value={val}
                onChange={handleChange}
                marks={marks}
                min={1900}
                max={2020}
              />
            </div>
          </div>
          <div className="display-movies">
            {!loading ? (
              <>
                {(homeSearch || displaySearch) !== null &&
                (homeSearch || displaySearch) !== "" &&
                movies[0] !== undefined ? (
                  movies
                    .filter(
                      (movie) =>
                        movie.release_date?.split("-")[0] >= val[0] &&
                        movie.release_date?.split("-")[0] <= val[1]
                    )
                    .slice(0, 8)
                    .map((movie) => <Movie movie={movie} key={movie.id} />)
                ) : (
                  <div className="display__empty">
                    <img
                      src={EmptyDisplay}
                      alt=""
                      className="display__empty--img"
                    />
                    <h1 className="display__empty--description">
                      Could not find any matches related to your search.
                    </h1>
                    <p className="display__empty--sub-description">
                      Try searching again
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="landing-modal__overlay--loading display__spinner">
                  <FontAwesomeIcon
                    icon="spinner"
                    className="loading-state__spinner"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Display
