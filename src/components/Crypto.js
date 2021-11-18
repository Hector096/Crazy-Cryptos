import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCryptoData } from '../redux/crypto/crypto';

export default function Crypto({ match }) {
  const { crypto } = match.params;
  const state = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  useEffect(() => state.data === null && dispatch(fetchCryptoData(crypto)), [dispatch]);

  return (
    <div>
      {state.data != null ? (state.data.map((item) => <p className="text-light" key={item.id}>{item.name}</p>)) : <p>Hello</p>}
    </div>
  );
}

Crypto.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      crypto: PropTypes.string,
    }),
  }).isRequired,
};
