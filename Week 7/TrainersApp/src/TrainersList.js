import React from 'react';
import { Link } from 'react-router-dom';

export default function TrainersList({ trainers }) {
    return (
        <div>
            <h2>Trainers List</h2>
            <ul>
                {trainers.map(t => (
                    <li key={t.TrainerId}>
                        <Link to={`/trainer/${t.TrainerId}`}>{t.Name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}