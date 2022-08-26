import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services';
import './Tasks.css';

export default function Tasks() {
  const { id } = useParams();

  const [tasks, setTasks] = useState([]);

  const handleTaskStatus = (taskId, title, completed) => {
    api
      .put(`/todos/${id}`, {
        userId: id,
        id: taskId,
        title,
        completed: !completed,
      })
      .then((response) => {
        const newListTask = [];

        tasks.forEach((task) => {
          if (task.id === taskId) {
            console.log(response.data.id);
            newListTask.push({
              userId: id,
              id: task.id,
              title: title,
              completed: !completed,
            });
          } else {
            newListTask.push(task);
          }
        });

        setTasks(newListTask);
        localStorage.setItem('tasks', JSON.stringify(newListTask));

        const resultMessage = `Tarefa nº ${taskId} ${
          !completed ? 'completed' : 'incomplete'
        }`;
        toast.success(resultMessage);
      });
  };

  const loadLocalStorage = () => {
    const storedArray = localStorage.getItem('tasks');
    const list = JSON.parse(storedArray);
    setTasks(list);
  };

  const saveLocalStorage = () => {
    api
      .get('/todos')
      .then((response) => {
        localStorage.setItem('tasks', JSON.stringify(response.data));
        setTasks(response.data);
      })
      .catch((err) => console.log('Um erro ocorreu! ' + err));
  };

  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      loadLocalStorage();
    } else {
      saveLocalStorage();
    }
  }, [id]);

  return (
    <div className="tasks">
      <h1>Tarefas</h1>

      <Link to={`/create/${id}`}>ADD TASK</Link>

      <ol>
        {tasks.map((task) => {
          return (
            Number(task.userId) === Number(id) && (
              <li key={task.id}>
                {task.id} - {task.title}
                <button
                  onClick={() =>
                    handleTaskStatus(task.id, task.title, task.completed)
                  }
                  className={task.completed ? 'completed' : 'incomplete'}
                >
                  {task.completed ? (
                    <span>completed</span>
                  ) : (
                    <span>incomplete</span>
                  )}
                </button>
              </li>
            )
          );
        })}
      </ol>
    </div>
  );
}
