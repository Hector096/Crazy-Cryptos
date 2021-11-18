import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCryptosData } from '../redux/cryptos/cryptos';

export default function Home() {
  const state = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();
  useEffect(() => state.data === null && dispatch(fetchCryptosData()), []);
  return (
    <div>
      {state.data != null ? (state.data.data.map((item) => <Link to={`detail/${item.id}`} className="text-light" key={item.id}>{item.name}</Link>)) : <p>Hello</p>}
    </div>
  );
}
