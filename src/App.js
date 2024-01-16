import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Board from './pages/Board';
import Up from './pages/Up';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className='w-screen h-screen bg-black flex flex-col'>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/up" element={<Up setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/board" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
            <Board />
        </PrivateRoute>
        
        
        } />
      </Routes>
    </div>
  );
}

export default App;
