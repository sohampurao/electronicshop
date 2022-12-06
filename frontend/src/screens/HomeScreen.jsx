import React, { useEffect } from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useReducer } from 'react';
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function Homescreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <main>
        <h1 className="fs-3 py-2">Featured Products</h1>
        <div className="products">
          {loading ? (
            <div>Loading..</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            products.map((product) => (
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
            ))
          )}
        </div>
      </main>
    </>
  );
}
