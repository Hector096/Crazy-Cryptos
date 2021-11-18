import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { AiFillSetting, AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './App.css';

export default function Header() {
  return (
    <Navbar expand="lg">
      <Container fluid className=" pb-2">
        <Link to="/"><AiOutlineArrowLeft className="fs-3 text-light" /></Link>
        <h5 className="text-light"> Crazy Cryptos</h5>
        <AiFillSetting className="fs-3 text-light" />
      </Container>
    </Navbar>
  );
}
