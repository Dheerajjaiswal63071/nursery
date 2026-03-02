import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h2>🌿 About Namrit Nursery</h2>

      <section style={{ marginTop: '40px', marginBottom: '50px' }}>
        <div style={{
          background: '#fff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          lineHeight: '1.8'
        }}>
          <h3 style={{ marginBottom: '15px', color: '#27ae60' }}>Our Story</h3>
          <p>
            Namrit Nursery was founded in 2015 with a simple mission: to bring the beauty and benefits of plants into every home and office. 
            What started as a small local nursery has grown into a thriving plant shop dedicated to providing high-quality, healthy plants 
            and expert care guidance to plant enthusiasts of all levels.
          </p>
          <p style={{ marginTop: '15px' }}>
            We believe that plants are more than just décor—they're living companions that improve air quality, boost mood, and create 
            a connection to nature. Whether you're a seasoned plant parent or just starting your green journey, we're here to help you 
            find the perfect plant for your space.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '50px' }}>
        <h3 style={{ marginBottom: '30px' }}>Why Choose Us?</h3>
        <div className="grid">
          <div style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            border: '2px solid #ecf0f1'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>🌱</div>
            <h4>Premium Quality</h4>
            <p className="muted">
              All our plants are carefully selected and grown in optimal conditions to ensure they arrive healthy and vibrant.
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            border: '2px solid #ecf0f1'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>📚</div>
            <h4>Expert Knowledge</h4>
            <p className="muted">
              Our team of plant experts provides detailed care guides and personalized recommendations for each plant.
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            border: '2px solid #ecf0f1'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>🌍</div>
            <h4>Eco-Friendly</h4>
            <p className="muted">
              We're committed to sustainable practices and environmentally responsible sourcing of all our plants.
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            border: '2px solid #ecf0f1'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>💚</div>
            <h4>Plant Care Support</h4>
            <p className="muted">
              We provide ongoing support and care tips to ensure your plants thrive for years to come.
            </p>
          </div>
        </div>
      </section>

      <section style={{
        background: 'linear-gradient(135deg, #27ae60, #52be80)',
        color: '#fff',
        padding: '50px 40px',
        borderRadius: '12px',
        textAlign: 'center',
        marginBottom: '50px'
      }}>
        <h3 style={{ marginBottom: '20px' }}>Join Our Plant Community</h3>
        <p style={{ marginBottom: '30px', fontSize: '16px' }}>
          Become part of thousands of happy plant parents who've transformed their spaces with Namrit Nursery.
        </p>
        <Link to="/products" className="btn" style={{ background: '#fff', color: '#27ae60', fontWeight: '700' }}>
          Start Shopping Now
        </Link>
      </section>

      <section style={{
        background: '#f8f9fa',
        padding: '40px',
        borderRadius: '12px'
      }}>
        <h3 style={{ marginBottom: '20px' }}>Our Values</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div>
            <h4 style={{ color: '#27ae60', marginBottom: '10px' }}>🎯 Quality First</h4>
            <p className="muted">We never compromise on plant quality or customer satisfaction.</p>
          </div>
          <div>
            <h4 style={{ color: '#27ae60', marginBottom: '10px' }}>🌍 Sustainability</h4>
            <p className="muted">We care for the environment and use eco-friendly practices throughout our business.</p>
          </div>
          <div>
            <h4 style={{ color: '#27ae60', marginBottom: '10px' }}>💚 Community</h4>
            <p className="muted">We believe in building a supportive community of plant lovers.</p>
          </div>
          <div>
            <h4 style={{ color: '#27ae60', marginBottom: '10px' }}>📖 Education</h4>
            <p className="muted">We empower our customers with knowledge to care for their plants properly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
