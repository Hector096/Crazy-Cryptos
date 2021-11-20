import React, { useEffect, useState } from 'react';
import {
  Row, Col, Image, Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptosData, filterCRYPTOS } from '../redux/cryptos/cryptos';
import '../App.css';
import CryptoCard from '../container/CryptoCard';

export default function Home() {
  const state = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();
  const [character, setCharacter] = useState('');
  useEffect(() => {
    dispatch(fetchCryptosData());
  }, []);

  const filterData = (character) => {
    if (character) {
      dispatch(filterCRYPTOS(character));
    } else {
      dispatch(fetchCryptosData());
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setCharacter((prev) => (prev === value ? prev : value));
    filterData(value);
  };

  return (
    <div>
      {state.loading ? (<Spinner animation="grow" className="spinner" size="lg" />) : (
        <>
          <Image
            src="https://image.freepik.com/free-vector/gradient-crypto-logo-collection_23-2148979930.jpg"
            width="100%"
            alt="dfgz"
          />
          <div className="container">
            <Row className="bg-color">
              <Col className="m-3 bg-color">
                <input
                  type="text"
                  className="form-control bg-transparent text-light"
                  placeholder="Seacrh"
                  width="w-50"
                  onChange={handleChange}
                  value={character}
                />
              </Col>
            </Row>
          </div>
          {state.data != null ? (
            <div className="d-flex flex-wrap border-0">
              {state.data.data.map((item) => <CryptoCard item={item} key={item.id} />)}
            </div>
          )
            : (<Spinner animation="grow" className="spinner" size="lg" />)}
        </>
      )}
    </div>
  );
}
