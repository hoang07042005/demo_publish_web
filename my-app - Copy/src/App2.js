import React from 'react';
import ItemList from './Item'

const ItemList = () => {
    const items =[
        {
            id: 1,
            image:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00c881c85dad2a0863fc5737f14437d2e4bb00fb_full.jpg',
            name: 'Item 1',
            price: 25.99,
            rating: 4.5,
        },
        {
            id: 2,
            image:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00c881c85dad2a0863fc5737f14437d2e4bb00fb_full.jpg',
            name: 'Item 2',
            price: 34.99,
            rating: 3.8,
        },
        {
            id: 3,
            image:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00c881c85dad2a0863fc5737f14437d2e4bb00fb_full.jpg',
            name: 'Item 3',
            price: 34.67,
            rating: 4.7,
        },
        {
            id: 4,
            image:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00c881c85dad2a0863fc5737f14437d2e4bb00fb_full.jpg',
            name: 'Item 4',
            price: 49.89,
            rating: 4.8,
        },
    ]
}
export default function ItemList() {
    return (
        <div className="App">
            <ItemList />
        </div>
    );
}