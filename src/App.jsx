import './App.css';
import Tasks from './pages/Tasks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header title="Lista de Tarefas" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/tasks/:id" element={<Tasks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
