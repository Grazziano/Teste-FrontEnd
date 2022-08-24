import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services';

export default function Tasks() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api
      .get(`/todos/${id}`)
      .then((response) => setTasks(response.data))
      .catch((err) => console.log('Um erro ocorreu! ' + err));
  }, [id, navigate]);

  return (
    <div>
      <h1>Tarefas</h1>
      {tasks !== '' && (
        <p>
          {tasks.userId} - {tasks.title} - {!tasks.completed}
        </p>
      )}
    </div>
  );
}
