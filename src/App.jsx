import './App.css';
import Tasks from './pages/Tasks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import CreateTask from './pages/CreateTask';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Router>
        <Header title="Lista de Tarefas" />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/tasks/:id" element={<Tasks />} />
          <Route path="/create/:id" element={<CreateTask />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
