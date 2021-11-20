import React, { useEffect, useState } from 'react';
import {
  Row, Col, Image, Card, Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCryptosData, filterCRYPTOS } from '../redux/cryptos/cryptos';
import './App.css';

export default function Home() {
  const state = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();
  const [character, setCharacter] = useState('');
  useEffect(() => {
    if (state.data == null) {
      dispatch(fetchCryptosData());
    }
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
              {state.data.map((item) => (
                <Link to={`detail/${item.id}`} className="col-6 text-decoration-none" key={item.id}>
                  <Card key={item.id} className="border-0 m-0">
                    <div className="img-txt p-5">
                      <BsArrowRightCircle className="bg-transparent txt-icon text-light fs-5" />
                      <p className="fs-1 text-center bg-transparent text-light fw-bold">{item.symbol}</p>
                    </div>
                    <Card.Body className="border-0">
                      <Card.Title className="text-end text-light fw-bold">{item.name}</Card.Title>
                      <Card.Text className="text-end text-light">{`$${item.price_usd}`}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              ))}
            </div>
          )
            : (<Spinner animation="grow" className="spinner" size="lg" />)}
        </>
      )}
    </div>
  );
}
