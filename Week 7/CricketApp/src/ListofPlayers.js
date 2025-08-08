import React from 'react';

export default function ListofPlayers() {
    const players = [
        { name: "Player1", score: 80 },
        { name: "Player2", score: 60 },
        { name: "Player3", score: 90 }
    ];
    const filteredPlayers = players.filter(p => p.score >= 70);
    return (
        <div>
            <h2>Top Players</h2>
            <ul>{filteredPlayers.map((p, i) => <li key={i}>{p.name} - {p.score}</li>)}</ul>
        </div>
    );
}