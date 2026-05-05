import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url("/hero.png")' }}>
        <div className="container hero-content">
          <h1 className="serif">Vision in its Purest Form</h1>
          <p>Unique Classic brings you a curated collection of medicated and fashion eyewear, designed for the modern minimalist.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/shop" className="btn">Shop Collection</Link>
            <Link href="/shop?category=Medicated" className="btn btn-outline">Medicated</Link>
          </div>
        </div>
      </section>

      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="serif" style={{ fontSize: '2.5rem' }}>The Collection</h2>
          <p style={{ color: '#666', marginTop: '1rem' }}>Elegance meets clarity in every frame.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Featured items could go here */}
          <div className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
             <img src="/sample-product.png" alt="Glasses" style={{ width: '100%', marginBottom: '1.5rem' }} />
             <h3 className="serif">Silver Clarity</h3>
             <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1rem' }}>Medicated Frame</p>
             <p className="serif" style={{ fontSize: '1.2rem' }}>₦180.00</p>
          </div>
          {/* More placeholders */}
          <div className="glass" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
             <h3 className="serif">Classic Noir</h3>
             <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1rem' }}>Fashion Frame</p>
             <p className="serif" style={{ fontSize: '1.2rem' }}>₦150.00</p>
             <div style={{ marginTop: '2rem', color: '#ccc' }}>Image coming soon</div>
          </div>
        </div>
      </section>
    </main>
  );
}
