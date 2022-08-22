import './App.css';
import Users from './pages/Users';
import Tasks from './pages/Tasks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
      {/* <Header title="Lista de Tarefas" /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path="/tasks/:id" element={<Tasks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
