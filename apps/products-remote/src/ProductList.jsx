import React from 'react';

const ITEMS = [
  { id: 101, name: 'Smart Watch', price: 199 },
  { id: 102, name: 'Wireless Headphones', price: 99 },
  { id: 103, name: 'Mechanical Keyboard', price: 129 },
];

export default function ProductList() {
  const addToCart = (product) => {
    window.dispatchEvent(new CustomEvent('cart:add-item', { detail: product }));
  };

  return (
    <div style={{ border: '2px solid #0284c7', padding: '16px', borderRadius: '8px', margin: '16px 0' }}>
      <h3 style={{ color: '#0284c7', marginTop: 0 }}>Products Remote (Port 5001)</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        {ITEMS.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '12px', borderRadius: '6px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>{item.name}</h4>
            <p style={{ fontWeight: 'bold' }}>${item.price}</p>
            <button
              onClick={() => addToCart(item)}
              style={{ background: '#0284c7', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}