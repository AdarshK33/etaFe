import React from 'react'
import CommonTable from '../../CommonComponents/CommonTable/CommonTable'
import SingleSelect from '../../CommonComponents/DropDown/SingleSelect'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space,Table} from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { searchUser } from '../../../Redux/Actions/Admin/admin';
import { useState } from 'react';
import {Modal} from 'antd';
import CreateEmployee from './CreateEmployee';
import Button from "../../CommonComponents/CommonButton/CommonButton";
import { editUser } from '../../../Redux/Actions/Admin/admin';
import { deleteUser } from '../../../Redux/Actions/Admin/admin';

const Employee = () => {
  const userDetails = useSelector(state => state?.userDetails?.userDetails?.data?.emp_list_result)
  console.log("userDetails",userDetails);
  const editUserToggle = useSelector(state => state?.updateUser?.editUserToggle)
  console.log("dokodkokd",editUserToggle);
  
  const [empId,setEmpId] = useState('')
  const [editModal,setEditModal] = useState(false)
  const [deleteModal,setDeleteModal] = useState(false)

  const dispatch = useDispatch();
    const columns=[
        {
            title: 'Employee Name',
            dataIndex: 'EmployeeName',
            width: 150,
          },
          {
            title: 'Employee ID',
            dataIndex: 'EmployeeID',
            width: 150,
          },
          {
            title: 'Designation',
            dataIndex: 'Designation',
            width: 150,
          },
          {
            title: 'Role',
            dataIndex: 'Role',
            width: 150,
          },
          {
            title: 'Email',
            dataIndex: 'Email',
            width: 150,
          },

          {
            title: 'Actions',
            dataIndex: 'Actions',
            width: 150,
            render: (id) => (
                <Space size="middle">
                  <EditOutlined onClick={() => onEditHandle(id)}/>
                  <DeleteOutlined onClick={() => onDeleteHandle(id)}/>
                  </Space>
            )
          }
    ]
  const data = [];

  userDetails?.map((item) => (
    data.push({
      EmployeeName: item?.name,
      EmployeeID: item?.emp_id,
      Designation: item?.designation,
      Role: item?.role_name,
      Email: item?.email,
      Actions: item?.emp_id
  })
    ))

    const handleCancel = () => {
      setEditModal(false)
      dispatch(editUser(false))
      setDeleteModal(false)
    }
    const onEditHandle = (id) => {
      console.log("eiuhjieie",id);
      setEditModal(true)
      dispatch(editUser(true))
      dispatch(searchUser(
        {
          "data": {
            "emp_id": id
          }
      }
      ))
    }
    const onDeleteHandle = (id) => {
      setEmpId(id)
      setDeleteModal(true)
    }
    const deleteData = {
      "data": {
          "emp_id": empId
      }
  }

    const onConfirmHandle = () => {
      dispatch(deleteUser(deleteData))
    }
    
  return (
    <div>
        <h3 className='create-employee-title'>EMPLOYEES</h3>
        <Table className='common-table'
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 50,
    }}
    scroll={{
      y: 360,
    }}
  />
   <Modal
        title="Edit Employee"
        visible={editModal}
        onCancel={handleCancel}
        width={500}
        className=""
      >
        <div className='employee-moodal'>
        <CreateEmployee />
        </div>
      </Modal>
   <Modal
        title="Alert"
        visible={deleteModal}
        onCancel={handleCancel}
        width={500}
        className=""
      >
        <div>
          <h5>Confirm Delete?</h5>
        <div className='save-clear-buttons'>
        <Button name={"CONFIRM"}  onClick={onConfirmHandle}/>
        <button onClick={handleCancel} className="close-btn">CANCEL</button>
        </div>
        </div>
      </Modal>
    </div>
  )
}

export default Employee