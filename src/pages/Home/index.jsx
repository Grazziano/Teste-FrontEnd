import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services';

export default function Home() {
  const [users, setUsers] = useState([]);
  // const navigate = useNavigate();

  // const handleClick = (id) => {
  //   navigate(`/tasks/${id}`);
  // };

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
            <Link to={`/tasks/${user.id}`}>{user.id} - {user.name}</Link>
            {/* <button type="button" onClick={() => handleClick(user.id)}>
              {user.id} - {user.name}
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
