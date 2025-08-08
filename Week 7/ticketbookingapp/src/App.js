
import React, { useState } from 'react';

function GuestPage() {
  return <h2>Welcome Guest! Please log in to book tickets.</h2>;
}

function UserPage() {
  return <h2>Welcome User! You can now book your tickets.</h2>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? <UserPage /> : <GuestPage />}
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  );
}

export default App;
