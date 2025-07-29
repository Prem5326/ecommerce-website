import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-aqua text-dark p-4 flex justify-between">
      <h1 className="text-xl font-bold">AquaCart</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/payment">Payment</Link>
      </nav>
    </header>
  );
}

export default Header;
