import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div>
      <Card>
        <Link to={`product/${product.slug}`}>
          <Card.Img variant="top" src={product.image} alt={product.name} />
        </Link>

        <Card.Body>
          <Link to={`product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
          <Card.Text className="fw-semibold">&#8377;{product.price}</Card.Text>
          <Button
            variant="warning"
            className="text-white font-weight-bold mt-1"
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
