import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import ListConversions from './pages/ListConversions';
import History from './pages/History';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/all-conversions" element={<ListConversions />} />
      <Route path="/history" element={<History />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  </Layout>
);

export default App;
