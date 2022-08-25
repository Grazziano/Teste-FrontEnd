import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services';

export default function Tasks() {
  const { id } = useParams();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api
      .get(`/users/${id}/todos`)
      .then((response) => setTasks(response.data))
      .catch((err) => console.log('Um erro ocorreu! ' + err));
  }, [id]);

  return (
    <div>
      <h1>Tarefas</h1>
      <ol>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.title} - {task.completed ? 'completed' : 'incomplete'}
            </li>
          );
        })}
      </ol>
      <Link to={`/create/${id}`}>ADD TASK</Link>
    </div>
  );
}
