import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(r => r.json())
      .then(data => {
        setFeatured(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading products:', err);
        setFeatured([]);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <section className="hero">
        <h2>🌿 Welcome to Namrit Nursery</h2>
        <p>Transform your space with nature's beauty. Discover a curated collection of indoor and outdoor plants perfect for every home.</p>
        <Link to="/products" className="btn">Explore Our Plants</Link>
      </section>

      {/* Featured Plants Section */}
      <section style={{ marginTop: '60px', marginBottom: '60px' }}>
        <h2>Featured Plants</h2>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#7f8c8d', padding: '40px 0' }}>Loading beautiful plants...</p>
        ) : featured.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', background: '#f8f9fa', borderRadius: '12px', marginTop: '20px' }}>
            <p style={{ color: '#7f8c8d', fontSize: '16px' }}>No plants available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid">
            {featured.slice(0, 4).map(p => (
              <div className="card" key={p._id}>
                {p.imagePath ? (
                  <img src={`http://localhost:5000${p.imagePath}`} alt={p.name} />
                ) : (
                  <div style={{ width: '100%', height: '200px', background: '#ecf0f1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7f8c8d' }}>
                    No Image
                  </div>
                )}
                <h4>{p.name}</h4>
                <p className="price">₹{p.price.toFixed(2)}</p>
                <p className="muted small">{p.description?.substring(0, 60)}...</p>
                <Link to={`/products/${p._id}`} className="btn small">View Details</Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Why Choose Us Section */}
      <section style={{ marginBottom: '60px', padding: '40px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
        <h2 style={{ marginBottom: '40px', textAlign: 'center' }}>Why Choose Namrit Nursery?</h2>
        <div className="grid">
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>✓</div>
            <h4>Premium Quality</h4>
            <p className="muted">Hand-selected, healthy plants grown in optimal conditions</p>
          </div>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>📦</div>
            <h4>Fast Delivery</h4>
            <p className="muted">Shipped with care to your door within same day</p>
          </div>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎯</div>
            <h4>Expert Support</h4>
            <p className="muted">Care guides and personalized recommendations included</p>
          </div>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>💚</div>
            <h4>Eco-Friendly</h4>
            <p className="muted">Sustainable sourcing and environmentally responsible practices</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '30px' }}>Shop by Category</h2>
        <div className="grid">
          <Link to="/products?category=indoor" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, #27ae60, #52be80)',
              color: '#fff',
              padding: '40px',
              borderRadius: '12px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🏠</div>
              <h4 style={{ margin: '0 0 10px 0', color: '#fff' }}>Indoor Plants</h4>
              <p style={{ margin: 0, opacity: 0.9 }}>Perfect for any room</p>
            </div>
          </Link>

          <Link to="/products?category=outdoor" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, #f39c12, #f9b233)',
              color: '#fff',
              padding: '40px',
              borderRadius: '12px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🌞</div>
              <h4 style={{ margin: '0 0 10px 0', color: '#fff' }}>Outdoor Plants</h4>
              <p style={{ margin: 0, opacity: 0.9 }}>Garden & patio favorites</p>
            </div>
          </Link>

          <Link to="/products?category=succulents" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, #3498db, #2980b9)',
              color: '#fff',
              padding: '40px',
              borderRadius: '12px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🌱</div>
              <h4 style={{ margin: '0 0 10px 0', color: '#fff' }}>Succulents</h4>
              <p style={{ margin: 0, opacity: 0.9 }}>Low-maintenance & beautiful</p>
            </div>
          </Link>

          <Link to="/products?category=flowering" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
              color: '#fff',
              padding: '40px',
              borderRadius: '12px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🌸</div>
              <h4 style={{ margin: '0 0 10px 0', color: '#fff' }}>Flowering Plants</h4>
              <p style={{ margin: 0, opacity: 0.9 }}>Colorful & vibrant blooms</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{
        background: 'linear-gradient(135deg, #27ae60, #52be80)',
        color: '#fff',
        padding: '50px 40px',
        borderRadius: '12px',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h3 style={{ marginBottom: '15px' }}>Stay Updated with Plant Care Tips</h3>
        <p style={{ marginBottom: '25px', opacity: 0.95 }}>
          Subscribe to our newsletter for exclusive deals, plant care tips, and new arrivals!
        </p>
        <div style={{ display: 'flex', gap: '10px', maxWidth: '500px', margin: '0 auto' }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '14px'
            }}
          />
          <button className="btn" style={{ background: '#fff', color: '#27ae60', fontWeight: '700', minWidth: '120px' }}>
            Subscribe
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: '#f8f9fa',
        padding: '50px 40px',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <h3 style={{ marginBottom: '20px' }}>Ready to Start Your Green Journey?</h3>
        <p className="muted" style={{ marginBottom: '30px', fontSize: '16px' }}>
          Explore our full collection of plants and find the perfect fit for your space.
        </p>
        <Link to="/products" className="btn">Shop Now</Link>
      </section>
    </div>
  );
}
