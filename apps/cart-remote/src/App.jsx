import React from 'react';
import CartBadge from './CartBadge';

export default function App() {
  // Test helper to simulate add-to-cart events during standalone testing
  const simulateAddToCart = () => {
    window.dispatchEvent(
      new CustomEvent('cart:add-item', {
        detail: { id: Date.now(), name: 'Test Product', price: 50 },
      })
    );
  };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '20px auto', padding: '0 16px' }}>
      <h2>Cart App (Standalone Mode)</h2>
      <p style={{ color: '#666' }}>Running on port 5002 as an isolated remote.</p>
      
      <div style={{ margin: '20px 0' }}>
        <CartBadge />
      </div>

      <button
        onClick={simulateAddToCart}
        style={{
          background: '#16a34a',
          color: '#fff',
          border: 'none',
          padding: '8px 14px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Simulate Add Test Item ($50)
      </button>
    </div>
  );
}