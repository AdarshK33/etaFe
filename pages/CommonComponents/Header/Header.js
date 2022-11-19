import React from 'react';
import Image from "next/image";
import Userlogo from '../../../assets/Images/user-logo.png'
import logoutImage from '../../../assets/Images/logout-image.png';
import 'antd/dist/antd.css';
import { adminLogin } from '../../../Redux/Actions/Login/login';
import { useDispatch,useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { resetLogin } from '../../../Redux/Actions/Login/login';
function Header(props) {
  const loginInfo = useSelector(state => state?.AdminloginInfo?.adminLoginInfo);
  console.log("loginInfo",loginInfo);
  const dispatch = useDispatch();
  const router = useRouter();

  const onLogoutHandle = () => {
    router.push({ pathname: '/Components/Login/Login' });
    dispatch(resetLogin())
  }
  return (
    <div className='header-main'>
      <div>
      <h1 className='employee-name'>{props.name}</h1>
      </div>
      <div className='user-details'>
      <div>
        <ul>
        <li>{loginInfo?.name}</li>
        <li>{loginInfo?.emp_id}</li>
        <li>{loginInfo?.role_name}</li>
        </ul>
      </div>
      <div className='header-icons'>
      <Image className='user-logo' src={Userlogo} alt="user" width={40} height={40} />
      <Image className='logout-logo' src={logoutImage} onClick={onLogoutHandle} alt="logout" width={40} height={40} />
      </div>
      </div>
    </div>
  )
}

export default Header