import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get('category');

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(r => r.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading products:', err);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || (p.category && p.category.toLowerCase() === categoryFilter.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const getCategoryLabel = () => {
    if (!categoryFilter) return 'Our Plant Collection';
    const labels = {
      indoor: '🏠 Indoor Plants',
      outdoor: '🌞 Outdoor Plants',
      succulents: '🌱 Succulents',
      flowering: '🌸 Flowering Plants'
    };
    return labels[categoryFilter] || 'Our Plant Collection';
  };

  return (
    <div>
      <h2>{getCategoryLabel()}</h2>
      <p className="muted" style={{ marginBottom: '30px', fontSize: '16px' }}>
        {categoryFilter ? 'Browse our ' + categoryFilter + ' plants' : 'Browse our selection of beautiful plants for every space and skill level'}
      </p>

      <div style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="🔍 Search plants..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ maxWidth: '400px' }}
        />
      </div>

      {loading ? (
        <p style={{ textAlign: 'center', padding: '60px 0', color: '#7f8c8d', fontSize: '18px' }}>
          Loading our plant collection...
        </p>
      ) : filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', background: '#f8f9fa', borderRadius: '12px' }}>
          <p style={{ color: '#7f8c8d', fontSize: '18px' }}>
            {searchTerm ? 'No plants match your search.' : 'No plants available yet.'}
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {filteredProducts.map(p => (
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

      <p style={{ textAlign: 'center', marginTop: '60px', color: '#7f8c8d' }}>
        {filteredProducts.length} plant{filteredProducts.length !== 1 ? 's' : ''} found
      </p>
    </div>
  );
}
