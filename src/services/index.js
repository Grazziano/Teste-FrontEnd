import axios from 'axios';

// export const getUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
