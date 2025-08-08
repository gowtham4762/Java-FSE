import React from 'react';
import Cart from './Cart';

export default function OnlineShopping() {
    const items = [
        { Itemname: "Shirt", Price: 800 },
        { Itemname: "Pants", Price: 1200 },
        { Itemname: "Shoes", Price: 2000 },
        { Itemname: "Hat", Price: 500 },
        { Itemname: "Watch", Price: 1500 }
    ];
    return (
        <div>
            <h2>Shopping Cart</h2>
            {items.map((item, index) => (
                <Cart key={index} Itemname={item.Itemname} Price={item.Price} />
            ))}
        </div>
    );
}