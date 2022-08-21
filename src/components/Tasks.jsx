import React, { useEffect, useState } from 'react';
import { api } from '../services';
import Loading from './Loading';

export default function Tasks() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get('/users')
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.log('Ops! Ocorreu um erro!' + err);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h1>Tarefas</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
