import { combineReducers } from "redux";
import { adminLoginReducer } from "./reducers/Login/login";
import { createEmployeeReducer } from "./reducers/Admin/admin";
import { userDetailsReducer } from "./reducers/Admin/admin";
import { searchUserReducer } from "./reducers/Admin/admin";
import { UpdateUserReducer } from "./reducers/Admin/admin";
import { deleteUserReducer } from "./reducers/Admin/admin";
import { projectReducer } from "./reducers/Admin/admin";

const rootReducer=combineReducers(
    {
        AdminloginInfo:adminLoginReducer,
        createEmployee:createEmployeeReducer,
        userDetails:userDetailsReducer,
        searchUser:searchUserReducer,
        updateUser:UpdateUserReducer,
        deleteUser:deleteUserReducer,
        project: projectReducer,
    })

export default rootReducer
