
import Api from "../api"


export const LOAD_COUNTRY_LOADING = 'REDUX_THUNK_LOAD_COUNTRY_LOADING';
export const LOAD_COUNTRY_SUCCESS = 'REDUX_THUNK_LOAD_COUNTRY_SUCCESS';
export const LOAD_COUNTRY_ERROR = 'REDUX_THUNK_LOAD_COUNTRY_ERROR';

export const loadCountryList = () => dispatch => {
    dispatch({ type: LOAD_COUNTRY_LOADING });

    Api.getCountryLists()
        .then(response => response.json())
        .then(
            data => dispatch({ type: LOAD_COUNTRY_SUCCESS, data }),
            error => dispatch({ type: LOAD_COUNTRY_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};