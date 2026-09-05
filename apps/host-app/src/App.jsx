import React, { Suspense, lazy } from 'react';

const ProductList = lazy(() => import('productsRemote/ProductList'));
const CartBadge = lazy(() => import('cartRemote/CartBadge'));

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '850px', margin: '40px auto', padding: '0 16px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #111', paddingBottom: '16px' }}>
        <h1 style={{ margin: 0 }}>Ecommerce Store (Shell)</h1>
        <Suspense fallback={<span>Loading Cart...</span>}>
          <CartBadge />
        </Suspense>
      </header>

      <main>
        <Suspense fallback={<p>Loading Catalog...</p>}>
          <ProductList />
        </Suspense>
      </main>
    </div>
  );
}