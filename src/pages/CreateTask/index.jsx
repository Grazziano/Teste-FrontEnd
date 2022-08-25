import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services';
import { toast } from 'react-toastify';

export default function CreateTask() {
  const { id } = useParams();
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title === '') {
      toast.error('Nome da Tarefa é obrigatório!');
      return;
    }

    api
      .post('/todos', {
        title,
        userId: id,
        completed: false,
      })
      .then((response) => {
        toast.success(`Tarefa nº${response.data.id} criada com sucesso`);
      });

    setTitle('');
  };

  console.log(title);

  return (
    <div>
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Task</label>
        <input
          type="text"
          onChange={({ target }) => setTitle(target.value)}
          value={title}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
