import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ title }) {
  return (
    <header>
      <Link className="logo" to="/">
        {title}
      </Link>
    </header>
  );
}
