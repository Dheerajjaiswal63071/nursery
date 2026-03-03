import React, { useEffect, useState } from 'react';
import ProductForm from './ProductForm';
import BASE_URL from '../config';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null);
  const [msg, setMsg] = useState(null);

  function getToken() { return localStorage.getItem('token'); }

  async function load() {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/products`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setMsg({ type: 'error', text: 'Could not load products' });
    } finally { setLoading(false); }
  }

  useEffect(() => { load(); }, []);

  async function remove(id) {
    if (!confirm('Are you sure? This product will be deleted permanently.')) return;
    try {
      const res = await fetch(`${BASE_URL}/api/products/${id}`, {
        method: 'DELETE',
        headers: { Authorization: 'Bearer ' + getToken() }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Delete failed');
      setMsg({ type: 'success', text: '✓ Product deleted successfully' });
      setProducts(products.filter(p => p._id !== id));
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    }
  }

  return (
    <div>
      <h3>📦 Manage Products</h3>
      {msg && <div className={`alert ${msg.type}`}>{msg.text}</div>}

      <ProductForm
        onSaved={(p) => {
          if (editing) {
            setProducts(products.map(x => x._id === p._id ? p : x));
            setMsg({ type: 'success', text: '✓ Product updated successfully' });
          } else {
            setProducts([p, ...products]);
            setMsg({ type: 'success', text: '✓ Product added successfully' });
          }
          setEditing(null);
        }}
        editing={editing}
        setEditing={setEditing}
      />

      <div style={{ marginTop: '40px' }}>
        <h4 style={{ marginBottom: '20px' }}>All Products ({products.length})</h4>
        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px 0', color: '#7f8c8d' }}>Loading products...</p>
        ) : products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', background: '#f8f9fa', borderRadius: '12px', color: '#7f8c8d' }}>
            <p>No products yet. Add one to get started!</p>
          </div>
        ) : (
          <div className="grid">
            {products.map(p => (
              <div className="card" key={p._id}>
                {p.imagePath ? (
                  <img src={`${BASE_URL}${p.imagePath}`} alt={p.name} />
                ) : (
                  <div style={{ width: '100%', height: '200px', background: '#ecf0f1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7f8c8d' }}>
                    No Image
                  </div>
                )}
                <h4>{p.name}</h4>
                <p className="price">₹{p.price.toFixed(2)}</p>
                <p className="muted small">{p.description?.substring(0, 60)}...</p>
                <div className="admin-actions">
                  <button className="btn small" onClick={() => setEditing(p)}>✏️ Edit</button>
                  <button className="btn small ghost" onClick={() => remove(p._id)}>🗑️ Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
