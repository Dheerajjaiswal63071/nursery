import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(r => r.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setProduct(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p style={{ textAlign: 'center', padding: '60px 0', color: '#7f8c8d', fontSize: '18px' }}>Loading plant details...</p>;
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0' }}>
        <p style={{ color: '#e74c3c', fontSize: '18px', marginBottom: '20px' }}>Plant not found</p>
        <Link to="/products" className="btn">← Back to Plants</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div>
        {product.imagePath ? (
          <img src={`http://localhost:5000${product.imagePath}`} alt={product.name} />
        ) : (
          <div style={{
            width: '100%',
            height: '500px',
            background: '#ecf0f1',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#7f8c8d',
            fontSize: '48px'
          }}>
            🌿
          </div>
        )}
      </div>

      <div>
        <Link to="/products" className="small muted" style={{ textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
          ← Back to Plants
        </Link>
        <h2>{product.name}</h2>
        <p className="price" style={{ fontSize: '32px', margin: '15px 0' }}>₹{product.price.toFixed(2)}</p>

        <div style={{
          background: '#ecf0f1',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '24px',
          borderLeft: '4px solid #27ae60'
        }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#7f8c8d' }}>📦 In Stock</p>
        </div>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>Description</h3>
        <p style={{ lineHeight: '1.8', color: '#2c3e50', fontSize: '16px' }}>
          {product.description || 'No description available.'}
        </p>

        <div style={{ marginTop: '40px' }}>
          <button className="btn" style={{ width: '100%', padding: '16px' }}>
            🛒 Add to Cart
          </button>
        </div>

        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '1.8'
        }}>
          <h4 style={{ marginTop: '0' }}>Care Tips</h4>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#2c3e50' }}>
            <li>Keep soil consistently moist but not waterlogged</li>
            <li>Place in bright, indirect light</li>
            <li>Maintain temperature between 65-75°F</li>
            <li>Fertilize monthly during growing season</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
