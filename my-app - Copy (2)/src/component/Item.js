import React from 'react';

function Item ({ name, image, price, rating}) {
    return (
        <section>
            <img className="item-picture" alt={name} src={image}  />
            <h3>{name}</h3>
            Price: <span>${price}</span>
            <br/>
            Rating: <span>{rating}</span>😎
        </section>
    )
}

export default Item;