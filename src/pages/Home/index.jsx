import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get('/users')
      .then((response) => setUsers(response.data))
      .catch((err) => console.log('Ops! Ocorreu um erro!' + err));
  }, []);

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/tasks/${user.id}`}>
              {user.id} - {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
