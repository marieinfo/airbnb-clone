import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star";

function SearchResult({img, location, title, description, star, price, total}) {
    return (
        <div className="SearchResult">
            <img src={img} />
            <FavoriteBorderIcon className="searchResult__heart"/>
            <div className="searchresult_info">
                <div className="searchinfo_top">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_________</p>
                    <p>{description}</p>
                </div>
                <div className="searchinfo_bottom">
                    <div className="search_star">
                    <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                    </div>
                </div>
            </div>

     
    )
}

export default SearchResult
