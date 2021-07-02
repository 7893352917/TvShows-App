import React, { useState, useEffect } from 'react'
//api
import { getTvShows, getAllShows } from '../service/TvshowsApi'

//Components
import ItemList from './ItemList'

export const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [shows, setShows] = useState([])

    useEffect(() => {
        getAllShows().then((res) => {
            setShows(res.data)
            // eslint-disable-next-line        
        })
    }, [])

    const onSearchHandler = (e) => {
        e.preventDefault();
        if (search === "") {
            alert("Please enter something");
        }
        else {
            getTvShows(search).then((res) => {
                const response = res.data.map((item) => item.show)
                setShows(response);
                setSearch("");
            })
        }
    }

    return (
        <div className="searchbar">
            <form className="searchbar__form">
                <input
                    type="text"
                    placeholder="Search for tv show"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <button className="btn"
                    onClick={onSearchHandler}>
                    SEARCH
                </button>
            </form>
            <div className="home__list">
                {shows && shows
                    .sort((a, b) => b.rating.average - a.rating.average)
                    .map((item) => {
                        return (
                            <ItemList
                                name={item.name}
                                key={item.id}
                                id={item.id}
                                image={item.image ? item.image.medium : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
                                rating={item.rating?.average ? item.rating.average : "No Rating"}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchBar;