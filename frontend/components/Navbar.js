'use client';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="glass">
      <div className="container nav-content">
        <Link href="/" className="logo">Unique Classic</Link>
        <div className="nav-links">
          <Link href="/shop">Shop</Link>
          <Link href="/shop?category=Medicated">Medicated</Link>
          <Link href="/shop?category=Fashion">Fashion</Link>
          {user ? (
            <>
              {user.isAdmin && <Link href="/admin">Dashboard</Link>}
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
