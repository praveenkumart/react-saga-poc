import { LOAD_COUNTRY_ERROR, LOAD_COUNTRY_LOADING, LOAD_COUNTRY_SUCCESS } from "./actions";

const initialState = {
    data: [],
    loading: false,
    error: ''
};

export default function reduxSagaReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_COUNTRY_LOADING: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case LOAD_COUNTRY_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_COUNTRY_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}
