'use client';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleGoogleLogin = () => {
    // In a real app, redirect to FastAPI Google Auth endpoint
    // window.location.href = 'http://localhost:8000/login/google';
    
    // For demo, we'll simulate a successful login
    login('fake-jwt-token', { email: 'admin@uniqueclassic.com', isAdmin: true });
    router.push('/admin');
  };

  return (
    <main className="container" style={{ paddingTop: '200px', textAlign: 'center' }}>
      <div className="glass" style={{ padding: '4rem', maxWidth: '500px', margin: '0 auto' }}>
        <h1 className="serif" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome Back</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Sign in to manage Unique Classic or track your orders.</p>
        
        <button 
          onClick={handleGoogleLogin}
          className="btn btn-outline"
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
        >
          <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" style={{ width: '20px' }} />
          Continue with Google
        </button>

        <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'center', gap: '1rem', color: '#ccc' }}>
          <hr style={{ flex: 1 }} /> OR <hr style={{ flex: 1 }} />
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div>
            <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '0.3rem', display: 'block' }}>Email Address</label>
            <input type="email" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '0.3rem', display: 'block' }}>Password</label>
            <input type="password" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd' }} />
          </div>
          <button type="button" className="btn" style={{ marginTop: '1rem' }}>Sign In</button>
        </form>
      </div>
    </main>
  );
}
