import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
  <BrowserRouter>
   <Header />
   <div>
    <Routes>
      <Route path="/" exact>
      </Route>
      <Route path="/cart" element={<Cart />}>
      </Route>
    </Routes>
   </div>
    </BrowserRouter>
  )
}