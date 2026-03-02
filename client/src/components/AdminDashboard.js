import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminProducts from './AdminProducts';

export default function AdminDashboard() {
  const nav = useNavigate();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      nav('/admin/login');
    } else {
      setAuth(true);
    }
  }, [nav]);

  function logout() {
    localStorage.removeItem('token');
    nav('/');
  }

  if (!auth) return null;

  return (
    <div>
      <div className="admin-head">
        <div>
          <h2>📊 Admin Dashboard</h2>
          <p className="muted">Manage your plant inventory and products</p>
        </div>
        <div>
          <button className="btn" onClick={() => nav('/')}>← Back to Store</button>
          <button className="btn ghost" onClick={logout}>🚪 Logout</button>
        </div>
      </div>
      <AdminProducts />
    </div>
  );
}
