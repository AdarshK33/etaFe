import React from 'react'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import Header from '../../CommonComponents/Header/Header';
import AdminTimeSheet from '../Admin/AdminTimeSheet'
import CreateEmployee from './CreateEmployee';
import Employee from './Employee'
import Project from './Project'
import { useDispatch,useSelector } from 'react-redux';
import { userDetails } from '../../../Redux/Actions/Admin/admin';
import { editUser } from '../../../Redux/Actions/Admin/admin';
import { allBa } from '../../../Redux/Actions/Admin/admin';
import { getProject } from '../../../Redux/Actions/Admin/admin';
function AdminTabs() {
  const userDetail = useSelector(state => state?.userDetails?.userDetails?.data?.emp_list_result)
  console.log("userDetails",userDetail);

  const dispatch = useDispatch();
  
    const onChange = (key) => {
      dispatch(getProject())
      dispatch(userDetails())
      const filteredBa = userDetail?.filter(item => item.role_name === 'ba')
      dispatch(allBa(filteredBa))
      };
  return (
    <div>
        <Header name={"Admin"}/>
        <Tabs onChange={onChange} type='card' >
          <TabPane defaultActiveKey="1" tab='Activities' key='1'>
            <CreateEmployee />
            </TabPane>
            <TabPane tab='TimeSheet' key='2'>
            <AdminTimeSheet />
            </TabPane>
            <TabPane tab='Employees' key='3'>
            <Employee />
            </TabPane>
            <TabPane tab='Projects' key='4'>
            <Project />
            </TabPane>
            </Tabs>
    </div>
  )
}

export default AdminTabs