import logo from './logo.svg';
import './App.css';
import Layout from './container/Layout';
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import CartPage from './Pages/Cart/CartPage'
import CartProvider from './contexts/CartProvider';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Layout>
          <Routes>
            <Route path='' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </div>
  );
}

export default App;
