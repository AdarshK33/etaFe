import React from "react";
import Input from "../../CommonComponents/Input/InputText";
import Button from "../../CommonComponents/CommonButton/CommonButton";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { createEmployee } from "../../../Redux/Actions/Admin/admin";
import { updateUser } from "../../../Redux/Actions/Admin/admin";
import SingleSelect from "../../CommonComponents/DropDown/SingleSelect"
import { AdminPanelSettings } from "@mui/icons-material";
import { adminLogin } from "../../../Redux/Actions/Login/login";
import { notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification';

function CreateEmployee() {
  const roleNames =[
    {
      id:"admin",
      name:"Admin",
    },
    {
      id:"ba",
      name:"BA",
    },
    {
      id:"emp",
      name:"Employee",
    }
  ]
  const CreateEmpInfo = useSelector(state => state?.createEmployee?.createEmployee)
  const editUser = useSelector(state => state?.searchUser?.searchUser)
  console.log("duijijdijd",editUser);
  const editUserToggle = useSelector(state => state?.updateUser?.editUserToggle)

  const [employeeId,setEmployeeId] = useState("");
  const [employeeName,setEmployeeName] = useState("");
  const [emailId,setEmailId] = useState("");
  const [designation,setDesignation] = useState("");
  const [roleName,setRoleName] = useState("");
  const [roleId,setRoleId] = useState("");
  const [password,setPassword] = useState("");

  const dispatch = useDispatch();
  const apiData = {
    "data": {
      "emp_id":employeeId,
        "email": emailId,
        "password": password,
        "role_name": roleName,
        "role_id": roleId,
        "name": employeeName,
        "designation": designation
    }
}
  useEffect(() => {
    if(editUser && editUserToggle === true){
      setEmployeeId(editUser?.emp_id)
    setEmployeeName(editUser?.name)
    setEmailId(editUser?.email)
    setDesignation(editUser?.designation)
    setRoleName(editUser?.role_name)
    setRoleId(editUser?.role_id)
    }
    else{
      setEmployeeId("")
      setEmployeeName("")
      setEmailId("")
      setDesignation("")
      setRoleName("")
      setRoleId("")
      setPassword("")
    }
  },[editUser,editUserToggle])

  const onUpdateHandle = (placement,NotificationPlacement) => {
    notification.success({
      description:
        'Employee Updated Successfully',
      placement,
    });
    dispatch(updateUser(apiData))
  };
  const onIdChange = (e) => {
    setEmployeeId(e.target.value)
  }
  const onEmpNameChange = (e) => {
    setEmployeeName(e.target.value)
  }
  const onEmailChange = (e) => {
    setEmailId(e.target.value)
  }
  const onDesignationChange = (e) => {
    setDesignation(e.target.value)
  }
  const onRoleNameChange = (e) => {
    setRoleName(e.target.value)
  }
  const onRoleIdChange = (e) => {
    setRoleId(e.target.value)
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const onSaveHandle = (placement,NotificationPlacement) => {
    dispatch(createEmployee(apiData))
    notification.success({
      description:
        'Employee Created Successfully',
      placement,
    });
    setEmployeeId("")
    setEmployeeName("")
    setEmailId("")
    setDesignation("")
    setRoleName("")
    setRoleId("")
    setPassword("")
  }
  const onClearHandle = () => {
    setEmployeeId("")
    setEmployeeName("")
    setEmailId("")
    setDesignation("")
    setRoleName("")
    setRoleId("")
    setPassword("")
  }

  return (
    <div className="create-employee-container">
      <div className="create-container">
        {editUserToggle ? "" : <h1 className="create-employee-title">CREATE EMPLOYEE</h1>}
        <div className="create-employee-main">
          <div className="label-field-create">
            <span className="label-names">Employee ID</span>:
          </div>
          <div className="input-field">
            <Input onChange={onIdChange} value={employeeId} className={"id-input"} />
          </div>
        </div>
        
        <div className="create-employee-main">
          <div className="label-field-create">
            <span className="label-names">Employee Name</span>:
          </div>
          <div className="input-field">
            <Input onChange={onEmpNameChange} value={employeeName} className={"id-input"} />
          </div>
        </div>
        <div className="create-employee-main">
          <div className="label-field-create">
            <span>Email Id</span>:
          </div>
          <div className="input-field">
            <Input onChange={onEmailChange} value={emailId} className={"id-input"} />
          </div>
        </div>
        <div className="create-employee-main">
          <div className="label-field-create">
            <span>Designation</span>:
          </div>
          <div className="input-field">
            <Input onChange={onDesignationChange} value={designation} className={"id-input"} />
          </div>
        </div>
        <div className="create-employee-main">
          <div className="label-field-create">
            <span>Role Name</span>:
          </div>
          <div className="task-input-select">
            <SingleSelect data={roleNames} onChange={onRoleNameChange} value={roleName}  />
          </div>
        </div>
        <div className="create-employee-main">
          <div className="label-field-create">
            <span>Role ID</span>:
          </div>
          <div className="task-input-select">
            <Input onChange={onRoleIdChange} value={roleId} className={"id-input"} />
          </div>
        </div>
        <div className="create-employee-main">
          <div className="label-field-create">
            <span>Create Password</span>:
          </div>
          <div className="input-field">
            <Input onChange={onPasswordChange} value={password} className={"id-input"} />
          </div>
        </div>
        <div className="save-clear-buttons">
          {editUserToggle ? (
            <Button name={"UPDATE"} onClick={() => onUpdateHandle('top')} />
          ) : (
            <Button name={"SAVE"} onClick={() => onSaveHandle('top')} />
          )}
          <button className="close-btn" onClick={onClearHandle}>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployee;
