import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services';
import { toast } from 'react-toastify';
import './CreateTask.css';

export default function CreateTask() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const updateLocalStorage = (newTask) => {
    const storedArray = localStorage.getItem('tasks');
    const list = JSON.parse(storedArray);
    const newArray = [...list, newTask];
    localStorage.setItem('tasks', JSON.stringify(newArray));
  };

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
        const obj = {
          userId: response.data.userId,
          id: response.data.id,
          title: response.data.title,
          completed: response.data.completed,
        };

        updateLocalStorage(obj);

        toast.success(`Tarefa nº${response.data.id} criada com sucesso`);
      });

    setTitle('');
  };

  return (
    <div className="form">
      <h2>Formulário</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nome da tarefa</label>
        <input
          type="text"
          onChange={({ target }) => setTitle(target.value)}
          value={title}
          placeholder="Digite uma tarefa"
        />
        <button type="submit">Salvar</button>
        <button type="button" onClick={() => navigate(-1)}>
          Voltar
        </button>
      </form>
    </div>
  );
}
