
import React, { useState } from 'react';

function CurrencyConvertor() {
  const [inr, setInr] = useState('');
  const [eur, setEur] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 0.011; // Example rate
    setEur((inr * conversionRate).toFixed(2));
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inr}
          onChange={(e) => setInr(e.target.value)}
          placeholder="Amount in INR"
        />
        <button type="submit">Convert</button>
      </form>
      {eur && <p>{inr} INR = {eur} EUR</p>}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleOnPress = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Event Examples App</h1>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>
      <br /><br />
      <button onClick={handleOnPress}>OnPress Event</button>
      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
