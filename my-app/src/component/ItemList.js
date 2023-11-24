import React from 'react';
import Item from './Item';

const items = [
    {
        name: 'Item 1',
        image: 'https://picsum.photos/200/300',
        price: 90,
        rating: 4,
    },
    {
        name: 'Item 2',
        image: 'https://picsum.photos/200/301',
        price: 91,
        rating: 4.1,
    },
    {
        name: 'Item 3',
        image: 'https://picsum.photos/200/302',
        price: 92,
        rating: 4.2,
    },
    {
        name: 'Item 4',
        image: 'https://picsum.photos/200/304',
        price: 93,
        rating: 4.3,
    },
    {
        name: 'Item 5',
        image: 'https://picsum.photos/200/305',
        price: 94,
        rating: 4.4,
    },
    {
        name: 'Item 6',
        image: 'https://picsum.photos/200/306',
        price: 95,
        rating: 4.5,
    },
];

export default function ItemList() {
    return (
        <div className="container p-5" style={{ background: '#007bff' }}>
            <div className="row">
                {items.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-12 mb-4">
                        <Item {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
}