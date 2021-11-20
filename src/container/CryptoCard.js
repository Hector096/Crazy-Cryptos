import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function CryptoCard({ item }) {
  return (
    <Link
      to={`detail/${item.id}`}
      className="col-6 text-decoration-none"
    >
      <Card className="border-0 m-0">
        <div className="img-txt p-5">
          <BsArrowRightCircle className="bg-transparent txt-icon text-light fs-5" />
          <p className="fs-1 text-center bg-transparent text-light fw-bold">
            {item.symbol}
          </p>
        </div>
        <Card.Body className="border-0">
          <Card.Title className="text-end text-light fw-bold">
            {item.name}
          </Card.Title>
          <Card.Text className="text-end text-light">{`$${item.price_usd}`}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

CryptoCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price_usd: PropTypes.string.isRequired,
  }).isRequired,
};
