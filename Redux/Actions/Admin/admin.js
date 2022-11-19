import * as types from '../../actionTypes';
import axios from 'axios';

// CreateEmployee
export const timeSheetDates = (payload) => ({
    type: types.TIME_SHEET_DATES,
    payload
})
const createEmployeeLoading = () => ({
    type: types.CREATE_EMPLOYEE_LOADING
})
const createEmployeeSuccess = (payload) => ({
    type: types.CREATE_EMPLOYEE_SUCCESS,
    payload
})
const createEmployeeFail = (error) => ({
    type: types.CREATE_EMPLOYEE_FAIL,
    payload: error
})

// UserDetails

export const allBa = (payload) => ({
    type: types.ALL_BA,
    payload
})
const userDetailsLoading = () => ({
    type: types.USER_DETAILS_LOADING
})
const userDetailsSuccess = (payload) => ({
    type: types.USER_DETAILS_SUCCESS,
    payload
})
const userDetailsFail = (error) => ({
    type: types.USER_DETAILS_FAIL,
    payload: error
})

// SearchUser
const searchUserLoading = () => ({
    type: types.SEARCH_USER_LOADING
})
const searchUserSuccess = (payload) => ({
    type: types.SEARCH_USER_SUCCESS,
    payload
})
const searchUserFail = (error) => ({
    type: types.SEARCH_USER_FAIL,
    payload: error
})

// UpdateUser

export const editUser = (payload) => ({
    type: types.EDIT_USER_TOGGLE,
    payload
})
const updateUserLoading = () => ({
    type: types.UPDATE_USER_LOADING
})
const updateUserSuccess = (payload) => ({
    type: types.UPDATE_USER_SUCCESS,
    payload
})
const updateUserFail = (error) => ({
    type: types.UPDATE_USER_FAIL,
    payload: error
})
// deleteUser

const deleteUserLoading = () => ({
    type: types.DELETE_USER_LOADING
})
const deleteUserSuccess = (payload) => ({
    type: types.DELETE_USER_SUCCESS,
    payload
})
const deleteUserFail = (error) => ({
    type: types.DELETE_USER_FAIL,
    payload: error
})
// getproject
const getProjectLoading = () => ({
    type: types.GET_PROJECT_LOADING
})
const getProjectSuccess = (payload) => ({
    type: types.GET_PROJECT_SUCCESS,
    payload
})
const getProjectFail  = (error) => ({
    type: types.GET_PROJECT_FAIL,
    payload: error
})
//updateproject
const updateProejctLoading = () => ({
    type: types.UPDATE_PROJECT_LOADING
})
const updateProejctSuccess = (payload) => ({
    type: types.UPDATE_PROJECT_SUCCESS,
    payload
})
const updateProejctFail  = (error) => ({
    type: types.UPDATE_PROJECT_FAIL,
    payload: error
})
//deleteproject
const deleteProejctLoading = () => ({
    type: types.DELETE_PROJECT_LOADING
})
const deleteProejctSuccess = (payload) => ({
    type: types.DELETE_PROJECT_SUCCESS,
    payload
})
const deleteProejctFail  = (error) => ({
    type: types.DELETE_PROJECT_FAIL,
    payload: error
})
// createProject

const createProjectLoading = () => ({
    type: types.CREATE_PROJECT_LOADING
})
const createProjectSuccess = (payload) => ({
    type: types.CREATE_PROJECT_SUCCESS,
    payload
})
const createProjectFail = (error) => ({
    type: types.CREATE_PROJECT_FAIL,
    payload: error
})

// searchProject

const searchProjectLoading = () => ({
    type: types.SEARCH_PROJECT_LOADING
})
const searchProjectSuccess = (payload) => ({
    type: types.SEARCH_PROJECT_SUCCESS,
    payload
})
const searchProjectFail = (error) => ({
    type: types.SEARCH_PROJECT_FAIL,
    payload: error
})

// createTask

const createTaskLoading = () => ({
    type: types.CREATE_TASK_LOADING
})
const createTaskSuccess = (payload) => ({
    type: types.CREATE_TASK_SUCCESS,
    payload
})
const createTaskFail = (error) => ({
    type: types.CREATE_TASK_FAIL,
    payload: error
})
// getTask

const getTaskLoading = () => ({
    type: types.GET_TASK_LOADING
})
const getTaskSuccess = (payload) => ({
    type: types.GET_TASK_SUCCESS,
    payload
})
const getTaskFail = (error) => ({
    type: types.GET_TASK_FAIL,
    payload: error
})
// deleteTask

const deleteTaskLoading = () => ({
    type: types.DELETE_TASK_LOADING
})
const deleteTaskSuccess = (payload) => ({
    type: types.DELETE_TASK_SUCCESS,
    payload
})
const deleteTaskFail = (error) => ({
    type: types.DELETE_TASK_FAIL,
    payload: error
})

export const createEmployee = (data) => {
   return function (dispatch){
       dispatch(createEmployeeLoading());
       axios.post("http://localhost:5000/createUser",data)
       .then((resp) => {
               dispatch(createEmployeeSuccess(resp.data))
           })
           .catch((error) =>{
               dispatch(createEmployeeFail(error))
           })
    }
}

export const userDetails = (data) => {
    return function (dispatch){
        dispatch(userDetailsLoading());
        axios.get("http://localhost:5000/userDetails",data)
        .then((resp) => {
                dispatch(userDetailsSuccess(resp.data))
            })
            .catch((error) =>{
                dispatch(userDetailsFail(error))
            })
     }
 }


export const searchUser = (data) => {
    return function (dispatch){
        dispatch(searchUserLoading());
        axios.post("http://localhost:5000/serachUser",data)
        .then((resp) => {
                dispatch(searchUserSuccess(resp.data))
            })
            .catch((error) =>{
                dispatch(searchUserFail(error))
            })
     }
 }
 
export const updateUser = (data) => {
    return function (dispatch){
        dispatch(updateUserLoading());
        axios.put("http://localhost:5000/updateUser",data)
        .then((resp) => {
                dispatch(updateUserSuccess(resp.data))
            })
            .catch((error) =>{
                dispatch(updateUserFail(error))
            })
     }
 }
export const deleteUser = (data) => {
    return function (dispatch){
        dispatch(deleteUserLoading());
        axios.delete("http://localhost:5000/deleteUser",{data})
        .then((resp) => {
                dispatch(deleteUserSuccess(resp.data))
                dispatch(userDetails())
            })
            .catch((error) =>{
                dispatch(deleteUserFail(error))
            })
     }
 }
export const createProject = (data) => {
    return function (dispatch){
        dispatch(createProjectLoading());
        axios.post("http://localhost:5000/createProject",data)
        .then((resp) => {
                dispatch(createProjectSuccess(resp.data))
                dispatch(getProject())

            })
            .catch((error) =>{
                dispatch(createProjectFail(error))
            })
     }
 }
export const getProject = (data) => {
    return function (dispatch){
        dispatch(getProjectLoading());
        axios.get("http://localhost:5000/getProject",data)
        .then((resp) => {
                dispatch(getProjectSuccess(resp.data))
            })
            .catch((error) =>{
                dispatch(getProjectFail(error))
            })
     }
}
export const updateProject = (data) => {
    return function (dispatch){
        dispatch(updateProejctLoading());
        axios.put("http://localhost:5000/updateProject",data)
        .then((resp) => {
                dispatch(updateProejctSuccess(resp.data))
  dispatch(getProject())

            })
            .catch((error) =>{
                dispatch(updateProejctFail(error))
            })
     }
}
export const deleteProject = (data) => {
    return function (dispatch){
        dispatch(deleteProejctLoading());
        axios.delete("http://localhost:5000/deleteProject",{data})
        .then((resp) => {
                dispatch(deleteProejctSuccess(resp.data))
  dispatch(getProject())

            })
            .catch((error) =>{
                dispatch(deleteProejctFail(error))
            })
     }
}
export const searchProject = (data) => {
    return function (dispatch){
        dispatch(searchProjectLoading());
        axios.post("http://localhost:5000/searchProject",data)
        .then((resp) => {
                dispatch(searchProjectSuccess(resp.data))
            })
            .catch((error) =>{
                dispatch(searchProjectFail(error))
            })
     }
}
export const createTask = (data) => {
    return function (dispatch){
        dispatch(createTaskLoading());
        axios.post("http://localhost:5000/createTask",data)
        .then((resp) => {
                dispatch(createTaskSuccess(resp.data))
            })
            .catch((error) =>{
                dispatch(createTaskFail(error))
            })
     }
}
export const getTask = (data) => {
    return function (dispatch){
        dispatch(getTaskLoading());
        axios.get("http://localhost:5000/getTask",data)
        .then((resp) => {
                dispatch(getTaskSuccess(resp.data))
            })
            .catch((error) =>{
                dispatch(getTaskFail(error))
            })
     }
}
export const deleteTask = (data) => {
    return function (dispatch){
        dispatch(deleteTaskLoading());
        axios.post("http://localhost:5000/deleteTask",data)
        .then((resp) => {
                dispatch(deleteTaskSuccess(resp.data))
            })
            .catch((error) =>{
                dispatch(deleteTaskFail(error))
            })
     }
}
