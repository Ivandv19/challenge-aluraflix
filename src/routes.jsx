// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaginaBase from './pages/PaginaBase';
import NuevoVideo from './pages/NuevoVideo';
import Main from './pages/Main';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<PaginaBase />}>
      <Route index element={<Main />} />
      <Route path="nuevovideo" element={<NuevoVideo />} />
    </Route>
  </Routes>
);

export default AppRoutes;