'use client';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Medicated',
    image_url: '',
    stock: 10
  });
  const [status, setStatus] = useState('');

  if (loading) return <div className="container" style={{paddingTop: '100px'}}>Loading...</div>;
  if (!user || !user.isAdmin) {
    router.push('/login');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Adding product...');
    
    // In a real app, this would be a POST to your FastAPI backend
    // const res = await fetch('http://localhost:8000/admin/products', {
    //   method: 'POST',
    //   headers: { 
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`
    //   },
    //   body: JSON.stringify(formData)
    // });
    
    setTimeout(() => {
      setStatus('Success! Product added to Unique Classic.');
      setFormData({ name: '', description: '', price: '', category: 'Medicated', image_url: '', stock: 10 });
    }, 1000);
  };

  return (
    <main className="container" style={{ paddingTop: '120px' }}>
      <h1 className="serif" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Admin Dashboard</h1>
      
      <div className="glass" style={{ padding: '3rem', maxWidth: '600px' }}>
        <h2 className="serif" style={{ marginBottom: '1.5rem' }}>Add New Eyewear</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Product Name</label>
            <input 
              type="text" 
              required 
              style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', background: 'transparent' }}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Price (₦)</label>
              <input 
                type="number" 
                required 
                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', background: 'transparent' }}
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Category</label>
              <select 
                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', background: 'transparent' }}
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="Medicated">Medicated</option>
                <option value="Fashion">Fashion</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Description</label>
            <textarea 
              rows="4"
              style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', background: 'transparent' }}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            ></textarea>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Image URL</label>
            <input 
              type="text" 
              placeholder="Paste image link here"
              style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', background: 'transparent' }}
              value={formData.image_url}
              onChange={(e) => setFormData({...formData, image_url: e.target.value})}
            />
          </div>

          <button type="submit" className="btn">List Product</button>
          
          {status && <p style={{ marginTop: '1rem', color: status.includes('Success') ? 'green' : 'inherit' }}>{status}</p>}
        </form>
      </div>
    </main>
  );
}
