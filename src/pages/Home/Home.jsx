import { useNavigate } from 'react-router-dom';
import Landing from '../../components/Landing/Landing'
import Nav from '../../components/Nav/Nav';
import { useState } from 'react';
import React from 'react';

const Home = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);

    function onSearch() {
        if (searchValue !== "") {
            setTimeout(() => {
                navigate('/search-movies');
            }, 1000)
            if (searchValue === "") {
                setSearchValue(null);
                localStorage.removeItem("homeSearch");
            } else {
                localStorage.setItem("homeSearch", searchValue)
            }

            localStorage.removeItem("displaySearch");
            setLoading(true);
        }
    }
    return (
        <>
            <Nav />
            <Landing
                onSearch={onSearch}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                loading={loading} />
        </>
    )
}

export default Home