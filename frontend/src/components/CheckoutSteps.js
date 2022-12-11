import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>
        <NavLink to="#" className="text-decoration-none">
          Sign-In
        </NavLink>
      </Col>
      <Col className={props.step2 ? 'active' : ''}>
        <NavLink to="/shipping" className="text-decoration-none">
          Shipping
        </NavLink>
      </Col>
      <Col className={props.step3 ? 'active' : ''}>
        <NavLink to="/payment" className="text-decoration-none">
          Payment
        </NavLink>
      </Col>
      <Col className={props.step4 ? 'active' : ''}>
        <NavLink to="/placeorder" className="text-decoration-none">
          Place Order
        </NavLink>
      </Col>
    </Row>
  );
}
