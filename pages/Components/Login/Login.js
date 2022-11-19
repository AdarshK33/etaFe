import React from 'react'
import InputField from '../../CommonComponents/InputField/InputField';
import InputPassword from '../../CommonComponents/InputField/InputPassword';
import CommonButton from '../../CommonComponents/CommonButton/CommonButton';
import Link from 'next/link'
import { useDispatch,useSelector } from 'react-redux';
import { adminLogin } from '../../../Redux/Actions/Login/login';
import { useState,useEffect } from 'react';
import { useRouter } from "next/router";
import { userDetails } from '../../../Redux/Actions/Admin/admin';
import { getProject } from '../../../Redux/Actions/Admin/admin';
import { notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification';

function Login() {
  const loginInfo = useSelector(state => state?.AdminloginInfo?.adminLoginInfo);
  console.log("loginInfo",loginInfo);


  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const loginData = {
    "data": {
        "email": email,
        "password": password
    }
}
  const onEmailChange = (e) => {
    setEmail(e.target.value)
    console.log("email",email);
  }
  const onPasswordChange =(e) => {
    setPassword(e.target.value)
    console.log("password",password);
  }
  
  useEffect(() => {
    console.log("all loginData",email,password,loginData);
  },[email,password,loginData])
  
  useEffect(() => {
    if(loginInfo?.role_name === 'admin'){
      router.push({ pathname: '/Components/Admin/AdminTabs' })
    }
    else if(loginInfo?.role_name === 'ba'){
      router.push({ pathname: '/Components/BA/BaTabs' })
      dispatch(getProject())
      dispatch(userDetails())
    }
    else if(loginInfo?.role_name === 'emp'){
      router.push({ pathname: '/Components/EmployeeTimeSheet/EmployeeTimeSheet' })
    }
  },[loginInfo])

  
  const onSubmitHandle = (placement,NotificationPlacement) => {
    dispatch(adminLogin(loginData))
    notification.success({
      description:
        'Employee Created Successfully',
      placement,
    });
  }

  return (
    <div className='login-main'>
        <div className='login-container'>
            <h2 className='login-header'>Login</h2>
            <InputField className='login-email' name={"Email ID"} onChange={onEmailChange} />
            <InputPassword className='login-password' onChange={onPasswordChange}/> 
            <button onClick={() => onSubmitHandle('top')} className="close-btn-login" >Submit</button>
        </div>
    </div>
  )
}

export default Login