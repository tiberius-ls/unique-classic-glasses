'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const url = category 
          ? `http://localhost:8000/products?category=${category}`
          : 'http://localhost:8000/products';
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [category]);

  return (
    <main className="container" style={{ paddingTop: '120px' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 className="serif" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {category ? `${category} Collection` : 'The Full Collection'}
        </h1>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/shop" style={{ textDecoration: category ? 'none' : 'underline' }}>All</Link>
          <Link href="/shop?category=Medicated" style={{ textDecoration: category === 'Medicated' ? 'underline' : 'none' }}>Medicated</Link>
          <Link href="/shop?category=Fashion" style={{ textDecoration: category === 'Fashion' ? 'underline' : 'none' }}>Fashion</Link>
        </div>
      </header>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '5rem' }}>Loading our collection...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {products.length > 0 ? products.map((product) => (
            <div key={product.id} className="glass" style={{ padding: '2rem', transition: 'transform 0.3s' }}>
              <div style={{ height: '200px', background: '#f5f5f5', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/sample-product.png" alt={product.name} style={{ width: '100%', objectFit: 'contain' }} />
              </div>
              <h3 className="serif" style={{ fontSize: '1.4rem' }}>{product.name}</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', margin: '0.5rem 0' }}>{product.category}</p>
              <p className="serif" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>₦{product.price.toLocaleString()}</p>
              <Link href={`/product/${product.id}`} className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>View Details</Link>
            </div>
          )) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '5rem' }}>
              No products found in this category.
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
