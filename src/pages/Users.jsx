import React, { useEffect, useState } from 'react';
import api from '../services';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get('/users')
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.log('Ops! Ocorreu um erro!' + err);
      });
  }, []);

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.id}>{user.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
