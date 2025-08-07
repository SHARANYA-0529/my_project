import React, { useState } from 'react';

export default function Conditional({ initialLoggedIn = false }) {
  // turn the prop into state
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedIn);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back, user! 🎉</p>
      ) : (
        <p>Please log in to continue.</p>
      )}

      {isLoggedIn ? (
        // when logged in, show Logout button
        <button onClick={handleLogout}>Logout</button>
      ) : (
        // when not logged in, show Login button
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
