import * as types from '../../actionTypes';

const initialState = {
    adminLoginInfo: {},
    loginToggle: ""
    
}

export  const adminLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADMIN_LOGIN_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                adminLoginInfo: action.payload,
                loading: false,
                error: {}
            }
        case types.ADMIN_LOGIN_FAIL:
            return{
                ...state,
                error: action.payload,
                loading: false,
                adminLoginInfo: []
            }
        case types.LOGIN_TOGGLE:
            return{
                ...state,
                loginToggle: action.payload,
                loading: false
            }
        case types.RESET_LOGIN:
            return{
                ...state,
                adminLoginInfo: action.payload,
                loading: false
            }
        default:
            return state;
    }
}