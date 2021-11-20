import { getCryptosFromApi } from '../api';

const FETCH_CRYPTOS_REQUEST = 'crazy_cryptos/cryptos/fetch_request';
const FETCH_CRYPTOS_SUCCESS = 'crazy_cryptos/cryptos/fetch_success';
const FETCH_CRYPTOS_FAILURE = 'crazy_cryptos/cryptos/fetch_failure';
const FILTER_CRYPTOS = 'crazy_cryptos/cryptos/filter_cryptos';

const initialState = {
  loading: false,
  data: null,
  error: '',
};

export const fetchRequest = () => ({
  type: FETCH_CRYPTOS_REQUEST,
});
export const fetchSuccess = (payload) => ({
  type: FETCH_CRYPTOS_SUCCESS,
  payload,
});
export const fetchFailure = (payload) => ({
  type: FETCH_CRYPTOS_FAILURE,
  payload,
});

export const filterCRYPTOS = (payload) => ({
  type: FILTER_CRYPTOS,
  payload,
});

export const cryptosReducer = (state = initialState, action) => {
  let search = '';
  switch (action.type) {
    case FETCH_CRYPTOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CRYPTOS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_CRYPTOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FILTER_CRYPTOS:
      search = action.payload.toLowerCase();
      return {
        loading: false,
        data: {
          data: state.data.data.filter((Crypto) => Crypto.name.toLowerCase().includes(search)),
        },
        error: '',
      };
    default:
      return state;
  }
};

export const fetchCryptosData = () => async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const data = await getCryptosFromApi();
    dispatch(fetchSuccess(data));
  } catch (error) {
    fetchFailure(error);
  }
};
