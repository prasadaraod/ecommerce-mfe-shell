import React from 'react';
import ProductList from './ProductList';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '20px auto', padding: '0 16px' }}>
      <h2>Products App (Standalone Mode)</h2>
      <p style={{ color: '#666' }}>Running on port 5001 as an isolated remote.</p>
      <ProductList />
    </div>
  );
}