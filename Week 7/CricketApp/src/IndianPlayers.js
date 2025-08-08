import React from 'react';

export default function IndianPlayers() {
    const T20 = ["P1", "P2", "P3"];
    const Ranji = ["P4", "P5", "P6"];
    const merged = [...T20, ...Ranji];
    return (
        <div>
            <h2>Indian Players</h2>
            <ul>{merged.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </div>
    );
}