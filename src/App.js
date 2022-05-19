import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Component/AddTask';
import AllTask from './Component/AllTask';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Login from './Component/Login';
import NotFound from './Component/NotFound';
import Register from './Component/Register';
import RequireAuth from './Component/RequireAuth';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <AddTask />
            </RequireAuth>
          }
        />
        <Route
          path="/allTask"
          element={
            <RequireAuth>
              <AllTask />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
