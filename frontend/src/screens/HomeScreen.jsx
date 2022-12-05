import React from 'react';
import data from '../data';
import '../css/home.css';
import { Link } from 'react-router-dom';

export default function Homescreen() {
  return (
    <>
      <main>
        <h1 className="home-title">Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
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
