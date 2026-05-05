'use client';
import { useState, useEffect, use } from 'react';
import Link from 'next/link';

export default function ProductPage({ params }) {
  const { id } = use(params);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:8000/products/${id}`);
        if (!res.ok) throw new Error('Product not found');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>Loading product...</div>;
  if (!product) return (
    <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
      <h2 className="serif">Product Not Found</h2>
      <Link href="/shop" className="btn btn-outline" style={{ marginTop: '2rem' }}>Back to Shop</Link>
    </div>
  );

  return (
    <main className="container" style={{ paddingTop: '120px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
          <img src="/sample-product.png" alt={product.name} style={{ width: '100%', maxWidth: '500px' }} />
        </div>
        <div>
          <p style={{ color: '#888', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1rem', marginBottom: '1rem' }}>{product.category}</p>
          <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{product.name}</h1>
          <p className="serif" style={{ fontSize: '2rem', marginBottom: '2rem' }}>₦{product.price.toLocaleString()}</p>
          <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '3rem', fontSize: '1.1rem' }}>{product.description}</p>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn" style={{ flex: 2 }}>Add to Cart</button>
            <Link href="/shop" className="btn btn-outline" style={{ flex: 1, textAlign: 'center' }}>Back</Link>
          </div>
          
          <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#aaa' }}>
            Availability: {product.stock > 0 ? `In Stock (${product.stock} units)` : 'Out of Stock'}
          </p>
        </div>
      </div>
    </main>
  );
}
