import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Escolha a sua preferida' data={productData} />
      <Feature />
      <Products
        heading='Peça também algumas de nossas sobremesas'
        data={productDataTwo}
      />
      <Footer />
    </Router>
  );
}

export default App;
