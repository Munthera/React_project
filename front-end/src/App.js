import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './admin/main';
import AdminUsers from './admin/users/users';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Contact from './components/contact/contact';
import About from './components/about/about';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/users' element={<AdminUsers />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
