import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services';

export default function Tasks() {
  const { id } = useParams();

  const [tasks, setTasks] = useState([]);

  const handleTaskStatus = (taskId, title, completed) => {
    api
      .patch(`/todos/${id}`, {
        id: taskId,
        title,
        userId: id,
        completed: !completed,
      })
      .then((response) => {
        const tasksStatus = Object.values(response.data);
        const resultMessage = `Tarefa nº ${tasksStatus[1]} ${
          tasksStatus[3] ? 'completed' : 'incomplete'
        }`;
        toast.success(resultMessage);
      });
  };

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
              {task.title} -{' '}
              <button
                onClick={() =>
                  handleTaskStatus(task.id, task.title, task.completed)
                }
              >
                {task.completed ? (
                  <span>completed</span>
                ) : (
                  <span>incomplete</span>
                )}
              </button>
            </li>
          );
        })}
      </ol>
      <Link to={`/create/${id}`}>ADD TASK</Link>
    </div>
  );
}
