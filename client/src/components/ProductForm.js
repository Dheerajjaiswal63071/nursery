import React, { useState, useEffect } from 'react';

export default function ProductForm({ onSaved, editing, setEditing }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('indoor');
  const [image, setImage] = useState(null);
  const [imagePath, setImagePath] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (editing) {
      setName(editing.name || '');
      setPrice(editing.price || '');
      setDescription(editing.description || '');
      setCategory(editing.category || 'indoor');
      setImagePath(editing.imagePath || '');
      setPreview(editing.imagePath ? `http://localhost:5000${editing.imagePath}` : null);
      setImage(null);
    }
  }, [editing]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  }

  function getToken() { return localStorage.getItem('token'); }

  async function uploadFile(file) {
    const fd = new FormData();
    fd.append('image', file);
    const res = await fetch('http://localhost:5000/api/products/upload', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + getToken() },
      body: fd
    });
    return await res.json();
  }

  async function submit(e) {
    e.preventDefault();
    if (!name.trim() || !price) {
      setMsg({ type: 'error', text: 'Please fill in all required fields' });
      return;
    }
    setLoading(true);
    setMsg(null);
    try {
      let path = imagePath;
      if (image) {
        const up = await uploadFile(image);
        if (up.error) throw new Error(up.error);
        path = up.path;
      }

      const payload = { name, price: Number(price), description, category, imagePath: path };
      const token = getToken();
      let res;
      if (editing) {
        res = await fetch(`http://localhost:5000/api/products/${editing._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
          body: JSON.stringify(payload)
        });
      } else {
        res = await fetch('http://localhost:5000/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
          body: JSON.stringify(payload)
        });
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Save failed');
      setMsg({ type: 'success', text: editing ? '✓ Product updated' : '✓ Product created' });
      setImage(null);
      setPreview(null);
      setImagePath('');
      setName('');
      setPrice('');
      setDescription('');
      setCategory('indoor');
      setEditing(null);
      onSaved && onSaved(data);
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="product-form" onSubmit={submit}>
      <h4>{editing ? '✏️ Edit Product' : '➕ Add New Product'}</h4>
      {msg && <div className={`alert ${msg.type}`}>{msg.text}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <label htmlFor="name">Plant Name *</label>
          <input
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g., Monstera Deliciosa"
            required
          />

          <label htmlFor="price">Price (Rs) *</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="e.g., 29.99"
            step="0.01"
            required
          />

          <label htmlFor="category">Category *</label>
          <select
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          >
            <option value="indoor">🏠 Indoor Plants</option>
            <option value="outdoor">🌞 Outdoor Plants</option>
            <option value="succulents">🌱 Succulents</option>
            <option value="flowering">🌸 Flowering Plants</option>
          </select>

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Describe your plant, care tips, etc."
            style={{ marginTop: '6px' }}
          />
        </div>

        <div>
          <label htmlFor="image">Plant Image</label>
          <input
            id="image"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            style={{ marginTop: '6px' }}
          />
          {preview && (
            <div style={{ marginTop: '15px' }}>
              <img
                src={preview}
                alt="Preview"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  border: '2px solid #ecf0f1'
                }}
              />
              <p className="muted small" style={{ marginTop: '8px' }}>Preview</p>
            </div>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button
          className="btn"
          type="submit"
          disabled={loading}
          style={{ minWidth: '150px' }}
        >
          {loading ? '💾 Saving...' : editing ? '💾 Update Product' : '➕ Add Product'}
        </button>
        {editing && (
          <button
            type="button"
            className="btn ghost"
            onClick={() => {
              setEditing(null);
              setName('');
              setPrice('');
              setDescription('');
              setCategory('indoor');
              setImage(null);
              setImagePath('');
              setPreview(null);
              setMsg(null);
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
