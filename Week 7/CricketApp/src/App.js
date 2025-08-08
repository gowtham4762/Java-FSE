import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

export default function App() {
    const flag = true;
    return flag ? <ListofPlayers /> : <IndianPlayers />;
}