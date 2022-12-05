import React, { useEffect } from 'react';
// import data from '../data';
import '../css/home.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Homescreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <main>
        <h1 className="home-title">Featured Products</h1>
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.slug}>
              <Link to={`product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-details">
                <Link to={`product/${product.slug}`}>
                  <div className="product-name">{product.name}</div>
                </Link>
                <div className="product-price">
                  <strong>Price: </strong>&#8377;{product.price}
                </div>
                <div className="product-brand">
                  <strong>Brand:</strong> {product.brand}
                </div>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
