import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default function CryptoDetail({ item }) {
  return (
    <>
      <div className="img-banner p-5">
        <>
          <p className="fs-1 text-center bg-transparent text-light fw-bold">{item.symbol}</p>
          <h2 className="text-center bg-transparent text-light">{item.name}</h2>
          <h5 className="text-center bg-transparent text-light">{`Price : $${item.price_usd}`}</h5>
        </>
      </div>
      <div className="bg-color"><p className="bg-color text-light pt-1 pb-1 ps-3 fs-5">Details</p></div>

      <div className="p-0 m-0">
        <div className="li-color d-flex justify-content-between align-items-center p-3">
          <p className="li-color text-light">Rank</p>
          <p className="li-color text-light">{item.rank}</p>
        </div>
        <div className="li-odd d-flex justify-content-between align-items-center p-3">
          <p className="li-odd text-light">Change in 24h</p>
          <p className="li-odd text-light">{`${item.percent_change_24h}%`}</p>
        </div>
        <div className="li-color d-flex justify-content-between align-items-center p-3">
          <p className="li-color text-light">Market Cap</p>
          <p className="li-color text-light">
            {`$${item.market_cap_usd}`}
          </p>
        </div>
        <div className="li-odd d-flex justify-content-between align-items-center p-3">
          <p className="li-odd text-light">Volume 24h</p>
          <p className="li-odd text-light">{`${item.volume24}`}</p>
        </div>
        <div className="li-color d-flex justify-content-between align-items-center p-3">
          <p className="li-color text-light">Current Supply</p>
          <p className="li-color text-light">{item.csupply}</p>
        </div>
        <div className="li-odd d-flex justify-content-between align-items-center p-3">
          <p className="li-odd text-light">Total Supply</p>
          <p className="li-odd text-light">{item.tsupply}</p>
        </div>
      </div>
    </>
  );
}

CryptoDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price_usd: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    percent_change_24h: PropTypes.string.isRequired,
    market_cap_usd: PropTypes.string.isRequired,
    volume24: PropTypes.string.isRequired,
    csupply: PropTypes.string.isRequired,
    tsupply: PropTypes.string.isRequired,
  }).isRequired,
};
