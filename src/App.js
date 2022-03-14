import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage'
import Checkout from './components/CheckoutForm/Checkout'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/productos' element={<Products />}/>
          <Route path='/carrito' element={<CheckoutPage />}/>
          <Route path='compra' element={<Checkout />}/>
          <Route path='*' element={ <Navigate replace to="/" /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
