import { cryptoReducer } from '../redux/crypto/crypto';

describe('test the reducer function for the store', () => {
  const compareState = {
    loading: false,
    data: null,
    error: '',
  };

  test(' reducer returns new state ', () => {
    const newState = [1, 2, 3];
    const result = cryptoReducer(null, { type: 'crazy_cryptos/crypto/fetch_success', payload: newState });
    expect(result.data[0]).toBe(1);
    expect(result.data[1]).toBe(2);
    expect(result.data[2]).toBe(3);
  });

  test(' reducer returns empty array ', () => {
    const result = cryptoReducer(undefined, { type: undefined, payload: undefined });
    expect(result).toEqual(compareState);
  });
});
