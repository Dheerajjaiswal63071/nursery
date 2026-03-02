import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setLoading(false);
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  }

  return (
    <div>
      <h2>📧 Contact Us</h2>
      <p className="muted" style={{ marginBottom: '40px', fontSize: '16px' }}>
        Have questions about our plants or need help? We'd love to hear from you!
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px' }}>
        <div>
          <h3 style={{ marginBottom: '30px' }}>Contact Information</h3>

          <div style={{
            background: '#fff',
            padding: '25px',
            borderRadius: '12px',
            marginBottom: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            borderLeft: '4px solid #27ae60'
          }}>
            <h4 style={{ marginTop: '0' }}>📍 Address</h4>
            <p className="muted">
              Sec No 1, Navjeevan Vihar<br />
              Vindhyanagar, Madhya Pradesh 486886<br />
              India
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: '25px',
            borderRadius: '12px',
            marginBottom: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            borderLeft: '4px solid #27ae60'
          }}>
            <h4 style={{ marginTop: '0' }}>📞 Phone</h4>
            <p className="muted">
              Main: +91 7772092192, 8889316586<br />
              Support: +91 9294554748
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: '25px',
            borderRadius: '12px',
            marginBottom: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            borderLeft: '4px solid #27ae60'
          }}>
            <h4 style={{ marginTop: '0' }}>✉️ Email</h4>
            <p className="muted">
              General: <a href="mailto:info@greennursery.com" style={{ color: '#27ae60', textDecoration: 'none' }}>info@greennursery.com</a><br />
              Support: <a href="mailto:support@greennursery.com" style={{ color: '#27ae60', textDecoration: 'none' }}>support@greennursery.com</a>
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            borderLeft: '4px solid #27ae60'
          }}>
            <h4 style={{ marginTop: '0' }}>🕐 Business Hours</h4>
            <p className="muted">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 5:00 PM<br />
              Sunday: Closed
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: '25px',
            borderRadius: '12px',
            marginTop: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            borderLeft: '4px solid #25d366'
          }}>
            <h4 style={{ marginTop: '0' }}>💬 WhatsApp</h4>
            <p className="muted">
              Chat with us on WhatsApp for quick responses:<br />
              <a href="https://wa.me/917772092192" target="_blank" rel="noopener noreferrer" style={{ color: '#25d366', textDecoration: 'none', fontWeight: '600', fontSize: '16px' }}>
                💬 +91 7772092192
              </a>
            </p>
          </div>
        </div>
      </div>

      <section style={{
        background: '#fff',
        padding: '40px',
        borderRadius: '12px',
        marginBottom: '40px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <h3 style={{ marginBottom: '30px', textAlign: 'center' }}>🗺️ Find Us</h3>
        <div style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.524576130178!2d82.65646107513827!3d24.083041178444876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398f319c087c3f19%3A0x5d414df504c9d829!2sNamrit%20Consultancy%20Services!5e0!3m2!1sen!2sin!4v1772388001052!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Namrit Nursery Location"
          ></iframe>
        </div>
        <p style={{ textAlign: 'center', marginTop: '15px', color: '#666' }}>
          📍 Sec No 1, Navjeevan Vihar, Vindhyanagar, Madhya Pradesh 486886<br/>
          <a href="https://maps.google.com/?q=24.083041,82.656461" target="_blank" rel="noopener noreferrer" style={{ color: '#27ae60', textDecoration: 'none' }}>
            Open in Google Maps →
          </a>
        </p>
      </section>

      <section style={{
        background: '#f8f9fa',
        padding: '40px',
        borderRadius: '12px',
        marginBottom: '40px'
      }}>
        <h3 style={{ marginBottom: '30px', textAlign: 'center' }}>Frequently Asked Questions</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div>
            <h4 style={{ color: '#27ae60' }}>How long does shipping take?</h4>
            <p className="muted">Most orders ship within 2-3 business days and arrive within 5-7 business days.</p>
          </div>
          <div>
            <h4 style={{ color: '#27ae60' }}>Do you offer plant care consultation?</h4>
            <p className="muted">Yes! Contact our support team for personalized plant care advice and recommendations.</p>
          </div>
          <div>
            <h4 style={{ color: '#27ae60' }}>What if my plant arrives damaged?</h4>
            <p className="muted">We guarantee plant quality. Contact us immediately and we'll replace it at no cost.</p>
          </div>
          <div>
            <h4 style={{ color: '#27ae60' }}>Do you offer bulk orders?</h4>
            <p className="muted">Yes! Email us at info@greennursery.com for bulk pricing and custom orders.</p>
          </div>
          <div>
            <h4 style={{ color: '#27ae60' }}>Are your plants organic?</h4>
            <p className="muted">We use eco-friendly practices and our plants are grown without harmful chemicals.</p>
          </div>
          <div>
            <h4 style={{ color: '#27ae60' }}>Do you have a loyalty program?</h4>
            <p className="muted">Coming soon! Sign up for our newsletter to be notified about our rewards program.</p>
          </div>
        </div>
      </section>

      <section style={{
        background: 'linear-gradient(135deg, #27ae60, #52be80)',
        color: '#fff',
        padding: '50px 40px',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <h3 style={{ marginBottom: '15px' }}>Follow Us on Social Media</h3>
        <p style={{ marginBottom: '25px' }}>Stay updated with plant tips, new arrivals, and special offers</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="#" style={{
            display: 'inline-block',
            width: '50px',
            height: '50px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            lineHeight: '50px',
            textAlign: 'center',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '24px',
            transition: 'all 0.3s'
          }}>📘</a>
          <a href="#" style={{
            display: 'inline-block',
            width: '50px',
            height: '50px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            lineHeight: '50px',
            textAlign: 'center',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '24px',
            transition: 'all 0.3s'
          }}>📷</a>
          <a href="#" style={{
            display: 'inline-block',
            width: '50px',
            height: '50px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            lineHeight: '50px',
            textAlign: 'center',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '24px',
            transition: 'all 0.3s'
          }}>🐦</a>
          <a href="#" style={{
            display: 'inline-block',
            width: '50px',
            height: '50px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            lineHeight: '50px',
            textAlign: 'center',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '24px',
            transition: 'all 0.3s'
          }}>🎥</a>
        </div>
      </section>
    </div>
  );
}
