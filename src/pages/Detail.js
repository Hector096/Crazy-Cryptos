import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { fetchCryptoData } from '../redux/crypto/crypto';
import CryptoDetail from '../components/CryptoDetail';
import '../App.css';

export default function Detail({ match }) {
  const { crypto } = match.params;
  const state = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchCryptoData(crypto)), [dispatch]);

  return (
    <div>
      {state.loading ? (<Spinner animation="grow" className="spinner" size="lg" />)
        : (
          <>
            {state.data != null ? (state.data.map((item) => <CryptoDetail item={item} key={item.id} />)) : (<Spinner animation="grow" className="spinner" size="lg" />)}
          </>
        )}

    </div>
  );
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      crypto: PropTypes.string,
    }),
  }).isRequired,
};
