import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import api from '../../services';
import './Home.css';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadLocalStorage = () => {
    const storedArray = localStorage.getItem('users');
    setUsers(JSON.parse(storedArray));
  };

  const saveLocalStorage = () => {
    setLoading(true);

    api
      .get('/users')
      .then((response) => {
        localStorage.setItem('users', JSON.stringify(response.data));
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => console.log('Ops! Ocorreu um erro!' + err));
  };

  useEffect(() => {
    if (localStorage.getItem('users')) {
      loadLocalStorage();
    } else {
      saveLocalStorage();
    }
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="home">
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
