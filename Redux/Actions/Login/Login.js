import * as types from '../../actionTypes';
import axios from 'axios';

export const loginToggle = (payload) => ({
    type: types.LOGIN_TOGGLE,
    payload
})
const adminLoginLoading = () => ({
    type: types.ADMIN_LOGIN_LOADING
})
const adminLoginSuccess = (payload) => ({
    type: types.ADMIN_LOGIN_SUCCESS,
    payload
})
const adminLoginFail = (error) => ({
    type: types.ADMIN_LOGIN_FAIL,
    payload: error
})
export const resetLogin = (payload) => ({
    type: types.RESET_LOGIN,
    payload
})


export const adminLogin = (data) => {
   return function (dispatch){
       dispatch(adminLoginLoading());
       axios.post("http://localhost:5000/login",data)
       .then((resp) => {
               dispatch(adminLoginSuccess(resp.data))
           })
           .catch((error) =>{
               dispatch(adminLoginFail(error))
           })
    }
}