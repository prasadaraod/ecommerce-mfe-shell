import React, { Suspense, lazy } from 'react';

const ProductList = lazy(() => import('productsRemote/ProductList'));
const CartBadge = lazy(() => import('cartRemote/CartBadge'));

export default function App() {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 16px' }}>
      {/* Header Container */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid #e5e7eb',
          paddingBottom: '20px',
          gap: '24px',
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: '1.75rem',
            lineHeight: 1.2,
            fontWeight: 700,
            color: '#111827',
          }}
        >
          Ecommerce Store <span style={{ color: '#6b7280', fontSize: '1.1rem', fontWeight: 400 }}>(Shell)</span>
        </h1>

        <Suspense fallback={<div style={{ padding: '8px 16px' }}>Loading Cart...</div>}>
          <CartBadge />
        </Suspense>
      </header>

      {/* Catalog Section */}
      <main style={{ marginTop: '28px' }}>
        <Suspense fallback={<p>Loading Catalog...</p>}>
          <ProductList />
        </Suspense>
      </main>
    </div>
  );
}