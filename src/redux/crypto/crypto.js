import { getCryptoFromApi } from '../api';

const FETCH_CRYPTO_REQUEST = 'crazy_cryptos/crypto/fetch_request';
const FETCH_CRYPTO_SUCCESS = 'crazy_cryptos/crypto/fetch_success';
const FETCH_CRYPTO_FAILURE = 'crazy_cryptos/crypto/fetch_failure';

const initialState = {
  loading: false,
  data: null,
  error: '',
};

export const fetchRequest = () => ({
  type: FETCH_CRYPTO_REQUEST,
});
export const fetchSuccess = (payload) => ({
  type: FETCH_CRYPTO_SUCCESS,
  payload,
});
export const fetchFailure = (payload) => ({
  type: FETCH_CRYPTO_FAILURE,
  payload,
});

export const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CRYPTO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_CRYPTO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const fetchCryptoData = () => async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const data = await getCryptoFromApi();
    dispatch(fetchSuccess(data));
  } catch (error) {
    fetchFailure(error);
  }
};
