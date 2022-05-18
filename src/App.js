import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Component/AddTask';
import AllTask from './Component/AllTask';
import Header from './Component/Header';
import Login from './Component/Login';
import Register from './Component/Register';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<AddTask />} />
        <Route path="/allTask" element={<AllTask />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
