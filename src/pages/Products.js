// components/Products.js
import React, { useEffect, useState } from 'react';
import '../App.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // جلب البيانات من API الوهمي
    fetch('https://mocki.io/v1/1a1b17e7-5855-48e9-af3b-923a70c0ffa4') // استبدل 'your-api-endpoint' بالرابط الفعلي للـ API الوهمي
      .then(response => response.json())
      .then(data => {
        setProducts(data.products); // تأكد من أن البيانات تتطابق مع الهيكل المحدد
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="products">
      <div className="container">
        <h2>منتجاتنا</h2>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
