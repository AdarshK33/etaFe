import * as types from '../../actionTypes';

const initialState = {
    createEmployee: {},
    datesTimeSheet: [],
    userDetails: {},
    searchUser: {},
    updateUser: {},
    deleteUser: {},
    createProject:{},
    getProject: {},
    updateProject:{},
    deleteProject:{},
    searchProject: {},
    createTask: {},
    getTask: {},
    deleteTask: {},
    editUserToggle: false,
    allBa:{}
}

export  const createEmployeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_EMPLOYEE_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.CREATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                createEmployee: action.payload,
                loading: false,
                error: {}
            }
        case types.CREATE_EMPLOYEE_FAIL:
            return{
                ...state,
                error: action.payload,
                loading: false,
                createEmployee: []
            }
        case types.TIME_SHEET_DATES:
            return{
                ...state,
                datesTimeSheet: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export  const userDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_DETAILS_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.USER_DETAILS_SUCCESS:
            return {
                ...state,
                userDetails: action.payload,
                loading: false,
                error: {}
            }
        case types.USER_DETAILS_FAIL:
            return{
                ...state,
                error: action.payload,
                loading: false,
                userDetails: []
            }
        default:
            return state;
    }
}

export const searchUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_USER_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.SEARCH_USER_SUCCESS:
            return {
                ...state,
                searchUser: action.payload,
                loading: false,
                error: {}
            }
        case types.SEARCH_USER_FAIL:
            return{
                ...state,
                error: action.payload,
                loading: false,
                searchUser: []
            }
        default:
            return state;
    }
}

export  const UpdateUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_USER_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.UPDATE_USER_SUCCESS:
            return {
                ...state,
                updateUser: action.payload,
                loading: false,
                error: {}
            }
        case types.UPDATE_USER_FAIL:
            return{
                ...state,
                error: action.payload,
                loading: false,
                updateUser: []
            }
        case types.EDIT_USER_TOGGLE:
            return{
                ...state,
                editUserToggle:action.payload,
                loading: false
            }
        default:
            return state;
    }
}
export  const deleteUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE_USER_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.DELETE_USER_SUCCESS:
            return {
                ...state,
                deleteUser: action.payload,
                loading: false,
                error: {}
            }
        case types.DELETE_USER_FAIL:
            return{
                ...state,
                error: action.payload,
                loading: false,
                deleteUser: []
            }
        default:
            return state;
    }
}


export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_PROJECT_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                createProject: action.payload,
                loading: false,
                error: {}
            }
        case types.CREATE_PROJECT_FAIL:
            return {
                ...state,
                getProject: action.payload,
                loading: false,
                error: {}
            }
        case types.ALL_BA:
            return{
                ...state,
                allBa:action.payload,
                loading:false
            }
        case types.GET_PROJECT_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.GET_PROJECT_SUCCESS:
            return {
                ...state,
                getProject: action.payload,
                loading: false,
                error: {}
            }
        case types.GET_PROJECT_FAIL:
            return{
                ...state,
                error: action.payload,
                loading: false,
                getProject: {}
            }
        case types.UPDATE_PROJECT_LOADING:
                return {
                    ...state,
                    loading: true
            }
        case types.UPDATE_PROJECT_SUCCESS:
            return {
                    ...state,
                    updateProject: action.payload,
                    loading: false,
                    error: {}
            }
        case types.UPDATE_PROJECT_FAIL:
                return{
                    ...state,
                    error: action.payload,
                    loading: false,
                    updateProject: {}
            }
        case types.DELETE_PROJECT_LOADING:
                    return {
                        ...state,
                        loading: true
            }
       case types.DELETE_PROJECT_SUCCESS:
                    return {
                        ...state,
                        deleteProject: action.payload,
                        loading: false,
                        error: {}
            }
        case types.DELETE_PROJECT_FAIL:
                    return{
                        ...state,
                        error: action.payload,
                        loading: false,
                        deleteProject: {}
            }       
        case types.SEARCH_PROJECT_LOADING:
                    return {
                        ...state,
                        loading: true
            }
       case types.SEARCH_PROJECT_SUCCESS:
                    return {
                        ...state,
                        searchProject: action.payload,
                        loading: false,
                        error: {}
            }
        case types.SEARCH_PROJECT_FAIL:
                    return{
                        ...state,
                        error: action.payload,
                        loading: false,
                        searchProject: {}
            }       
        case types.CREATE_TASK_LOADING:
                    return {
                        ...state,
                        loading: true
            }
       case types.CREATE_TASK_SUCCESS:
                    return {
                        ...state,
                        createTask: action.payload,
                        loading: false,
                        error: {}
            }
        case types.CREATE_TASK_FAIL:
                    return{
                        ...state,
                        error: action.payload,
                        loading: false,
                        createTask: {}
            }       
        case types.GET_TASK_LOADING:
                    return {
                        ...state,
                        loading: true
            }
       case types.GET_TASK_SUCCESS:
                    return {
                        ...state,
                        getTask: action.payload,
                        loading: false,
                        error: {}
            }
        case types.GET_TASK_FAIL:
                    return{
                        ...state,
                        error: action.payload,
                        loading: false,
                        getTask: {}
            }       
        case types.DELETE_TASK_LOADING:
                    return {
                        ...state,
                        loading: true
            }
       case types.DELETE_TASK_SUCCESS:
                    return {
                        ...state,
                        deleteTask: action.payload,
                        loading: false,
                        error: {}
            }
        case types.DELETE_TASK_FAIL:
                    return{
                        ...state,
                        error: action.payload,
                        loading: false,
                        deleteTask: {}
            }       
        default:
            return state;
    }
}