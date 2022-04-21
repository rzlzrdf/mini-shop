import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout/Layout';
import Product from './Page/Product';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1 className='text-3-xl font-bold'>Home</h1>} />
            <Route path='/login' element={<h1>Login</h1>} />
            <Route path='/products' element={<Product />} />
            <Route path='/categories' element={<h1>categories</h1>} />
            <Route path='/shopping-cart' element={<h1>shopping cart</h1>} />
            <Route path='/order-history' element={<h1>order histrory</h1>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
