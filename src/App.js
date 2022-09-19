import logo from './logo.svg';
import './App.css';
import Layout from './container/Layout';
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import CartPage from './Pages/Cart/CartPage'
import CartProvider from './contexts/CartProvider';
import LoginPage from './Pages/Login/Login'
import SingUpPage from './Pages/SingUp/SingUp'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/singUp' element={<SingUpPage />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
