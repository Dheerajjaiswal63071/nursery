import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import About from './components/About';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="container">
          <h1 className="brand"><Link to="/">🌿 Namrit Nursery</Link></h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Plants</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/admin/login">Admin</Link>
          </nav>
        </div>
      </header>

      <main className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '30px' }}>
            <div>
              <h4 style={{ marginBottom: '15px', color: '#27ae60' }}>🌿 Namrit Nursery</h4>
              <p className="muted" style={{ fontSize: '14px' }}>
                Your trusted source for beautiful, healthy plants and expert plant care.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '15px', color: '#27ae60' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link to="/" style={{ color: '#7f8c8d', textDecoration: 'none', fontSize: '14px' }}>Home</Link></li>
                <li><Link to="/products" style={{ color: '#7f8c8d', textDecoration: 'none', fontSize: '14px' }}>Plants</Link></li>
                <li><Link to="/about" style={{ color: '#7f8c8d', textDecoration: 'none', fontSize: '14px' }}>About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '15px', color: '#27ae60' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link to="/contact" style={{ color: '#7f8c8d', textDecoration: 'none', fontSize: '14px' }}>Contact</Link></li>
                <li><a href="#" style={{ color: '#7f8c8d', textDecoration: 'none', fontSize: '14px' }}>Plant Care Guide</a></li>
                <li><a href="#" style={{ color: '#7f8c8d', textDecoration: 'none', fontSize: '14px' }}>FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '15px', color: '#27ae60' }}>Bulk Orders</h4>
              <p className="muted" style={{ fontSize: '14px', margin: 0, marginBottom: '10px' }}>
                For bulk orders, contact us at:
              </p>
              <a href="tel:+917772092192" style={{ color: '#27ae60', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
                📞 +91 7772092192
              </a>
            </div>
            <div>
              <h4 style={{ marginBottom: '15px', color: '#27ae60' }}>Connect</h4>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="#" style={{ fontSize: '20px', textDecoration: 'none' }}>📘</a>
                <a href="#" style={{ fontSize: '20px', textDecoration: 'none' }}>📷</a>
                <a href="#" style={{ fontSize: '20px', textDecoration: 'none' }}>🐦</a>
                <a href="https://wa.me/917772092192" target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px', textDecoration: 'none', cursor: 'pointer' }} title="Chat on WhatsApp">💬</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #ecf0f1', paddingTop: '20px', textAlign: 'center', color: '#7f8c8d', fontSize: '14px' }}>
            © {new Date().getFullYear()} Namrit Nursery. All rights reserved. | <a href="#" style={{ color: '#27ae60', textDecoration: 'none' }}>Privacy Policy</a> | <a href="#" style={{ color: '#27ae60', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Icon */}
      <a
        href="https://wa.me/917772092192"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          zIndex: 1000,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        }}
        title="Chat with us on WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 00-6.941 6.968c0 1.918.594 3.81 1.71 5.413l-1.82 6.585 6.733-1.76a6.963 6.963 0 006.229 1.122c3.826-1.01 6.532-4.56 6.532-8.759 0-3.862-3.134-7.008-6.981-7.008 0 0-.033 0-.06 0" />
        </svg>
      </a>
    </div>
  );
}

export default App;
