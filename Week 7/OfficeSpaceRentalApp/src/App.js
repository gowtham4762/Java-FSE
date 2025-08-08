import React from 'react';

export default function App() {
    const offices = [
        { name: "Office A", rent: 50000, address: "Location 1", img: "office1.jpg" },
        { name: "Office B", rent: 70000, address: "Location 2", img: "office2.jpg" }
    ];

    return (
        <div>
            <h1>Office Space Rental</h1>
            {offices.map((o, i) => (
                <div key={i} style={{ color: o.rent < 60000 ? 'red' : 'green' }}>
                    <img src={o.img} alt={o.name} width="100" />
                    <p>{o.name} - Rs.{o.rent}</p>
                    <p>{o.address}</p>
                </div>
            ))}
        </div>
    );
}