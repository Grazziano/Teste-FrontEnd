import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ title }) {
  return (
    <header>
      <div>
        <h1>{title}</h1>
        <nav>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul> */}
        </nav>
      </div>
    </header>
  );
}
