import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container" style={{ 
      paddingTop: '200px', 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem'
    }}>
      <h1 className="serif" style={{ fontSize: '5rem', color: '#eee' }}>404</h1>
      <h2 className="serif" style={{ fontSize: '2rem' }}>Looking for something?</h2>
      <p style={{ color: '#666', maxWidth: '500px' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" className="btn">Go Home</Link>
        <Link href="/shop" className="btn btn-outline">Browse Collection</Link>
      </div>
    </main>
  );
}
