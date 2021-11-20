import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import CryptoCard from '../container/CryptoCard';
import CryptoDetail from '../container/CryptoDetail';
import Header from '../components/Header';

const data = {
  id: '90', symbol: 'BTC', name: 'Bitcoin', nameid: 'bitcoin', rank: 1, price_usd: '57887.75', percent_change_24h: '-0.02', percent_change_1h: '-0.99', percent_change_7d: '-9.14', price_btc: '1.00', market_cap_usd: '1091273206487.30', volume24: 23852710202.372818, volume24a: 32461320993.317352, csupply: '18851540.00', tsupply: '18851540', msupply: '21000000',
};
describe(' Component test', () => {
  test('matches header snapshot', () => {
    const tree = TestRenderer.create(
      <Router>
        <Header />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches cryptoCard snapshot', () => {
    const tree = TestRenderer.create(
      <Router>
        <CryptoCard item={data} />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches cryptoDetail snapshot', () => {
    const tree = TestRenderer.create(
      <Router>
        <CryptoDetail item={data} />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
