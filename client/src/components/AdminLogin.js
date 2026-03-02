import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('admin@nursery.com');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      localStorage.setItem('token', data.token);
      setMsg({ type: 'success', text: 'Logged in successfully! Redirecting...' });
      setTimeout(() => nav('/admin/dashboard'), 1000);
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-box">
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>🔐</div>
        <h2>Admin Login</h2>
        <p className="muted">Manage your plant inventory</p>
      </div>

      {msg && <div className={`alert ${msg.type}`}>{msg.text}</div>}

      <form onSubmit={submit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="admin@nursery.com"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <button
          type="submit"
          className="btn"
          disabled={loading}
          style={{ width: '100%', marginTop: '24px' }}
        >
          {loading ? '🔄 Logging in...' : '🚀 Login'}
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '20px', color: '#7f8c8d', fontSize: '13px' }}>
        Default: admin@nursery.com / admin123
      </p>
    </div>
  );
}
