import React from 'react';
import { useParams } from 'react-router-dom';
import trainers from './TrainersMock';

export default function TrainerDetails() {
    const { id } = useParams();
    const trainer = trainers.find(t => t.TrainerId.toString() === id);
    return trainer ? (
        <div>
            <h2>{trainer.Name}</h2>
            <p>Email: {trainer.Email}</p>
            <p>Phone: {trainer.Phone}</p>
            <p>Technology: {trainer.Technology}</p>
            <p>Skills: {trainer.Skills}</p>
        </div>
    ) : <p>Trainer not found</p>;
}