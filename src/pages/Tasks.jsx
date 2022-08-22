import React, { useEffect } from 'react';
import api from '../services';

export default function Tasks({ id }) {
  // const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api
      .get(`/todos/{id}`)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log('Um erro ocorreu! ' + err));
  }, []);

  return (
    <div>
      <h1>Tarefas</h1>
    </div>
  );
}
