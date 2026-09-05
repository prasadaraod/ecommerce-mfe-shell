import React, { useState, useEffect } from 'react';

export default function CartBadge() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const handleAdd = (e) => setCart((prev) => [...prev, e.detail]);
    window.addEventListener('cart:add-item', handleAdd);
    return () => window.removeEventListener('cart:add-item', handleAdd);
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ border: '2px solid #16a34a', padding: '8px 16px', borderRadius: '8px', background: '#f0fdf4' }}>
      <strong style={{ color: '#16a34a' }}>Cart Remote (Port 5002): </strong>
      <span>{cart.length} item(s) | Total: ${total}</span>
    </div>
  );
}