import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = ({ name, image, rating, id }) => {
    return (
        <Link to={`/singleshow/${id}`} className="listitem">
            <img src={image} alt={name} />
            <div className="listitem__info">
                <h3 className="info__name"> {name} </h3>
                <h3 className="info__rating">  {rating} </h3>
            </div>
        </Link>

    )
}

export default ItemList
