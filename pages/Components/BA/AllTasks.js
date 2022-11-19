import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import Header from '../../CommonComponents/Header/Header';
import { Modal } from 'antd';
import SingleSelect from '../../CommonComponents/DropDown/SingleSelect'
import Button from '../../CommonComponents/CommonButton/CommonButton';
import { useDispatch, useSelector } from 'react-redux';
const { TextArea } = Input;
import { notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification';



function AllTasks() {
  const userDetails = useSelector(state => state?.userDetails?.userDetails?.data?.emp_list_result)
  console.log("userDetails", userDetails);
  const allTask = useSelector(state => state?.project?.getTask?.data?.task_list_result)
  console.log("roijriojiroj", allTask);

  // const userIds = allTask.map(item => item.user_Id)
  // console.log("fsdfsdf",userIds)

  // const newName = userDetails.map(item => {
  //   userIds.map(item1 => item._id === item1 ? item?.name : '')
  // })
  // console.log("newName",newName)
// useEffect(()=>{
//   const newName = userDetails.map(item => {
//     userIds.map(item1 => item._id === item1 ? item?.name : '')
//   })
// },[userDetails]);
// useEffect(()=>{
//   const userIds = allTask.map(item => item.user_Id)
//   console.log("fsdfsdf",userIds)
// },[allTask])


  const roleNames = []
  const columns = [
    {
      title: 'Employee ID',
      dataIndex: 'EmployeeID',
      width: 150,
    },
    {
      title: 'Employee Name',
      dataIndex: 'EmployeeName',
      width: 150,
    },
    {
      title: 'Tasks Assigned',
      dataIndex: 'TasksAssigned',
      width: 150,
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      width: 150,
    },
    {
      title: 'Actions',
      dataIndex: 'Actions',
      width: 150,
      render: (id) => (
          <Space size="middle">
            <EditOutlined onClick={onEditHandle}/>
            <DeleteOutlined onClick={() => onDeleteHandle(id)}/>
            </Space>
      )
    }
  ];
  const data = [];
  
  for (let i = 0; i < 100; i++) {
    data.push({
      EmployeeID: i,
      EmployeeName: `Edward King ${i}`,
      TasksAssigned: 'Module Creation',
      Status: "Open",
    });
  }
  
    const [type, setType] = useState('time');
    const [editTaskModal,setEditTaskModal] = useState(false)
    const [deleteModal,setDeleteModal] = useState(false)
    const [empId,setEmpId] = useState('')

    
    const onEditHandle = () =>{
      setEditTaskModal(true)
    }
    const handleCancel = ()=> {
      setEditTaskModal(false)
      setDeleteModal(false)
    }
    const onDeleteHandle = (id) => {
      // setEmpId(id)
      setDeleteModal(true)
    }
    const deleteData = {
      "data": {
          "emp_id": empId
      }
  }
    const onConfirmHandle = (placement,NotificationPlacement) => {
      dispatch(deleteUser(deleteData))
      notification.success({
        description:
          'Task Deleted Successfully',
        placement,
      });
    }
  return (
    <div className='all-task-container'>
      <h1>ALL TASKS</h1>
      <Table className='common-table'
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 50,
        }}
        scroll={{
          y: 240,
        }}
      />
      <Modal
        title="Edit Task"
        visible={editTaskModal}
        onCancel={handleCancel}
        width={400}
      >
        <div>
          <div className="create-employee-main">
            <div className="label-field-project">
              <span className="label-names-project">Employee Name</span>:
            </div>
            <div className="input-field">
              <Input className={"id-input"} />
            </div>
          </div>
          <div className="create-employee-main">
            <div className="label-field-project">
              <span className="label-names-project">Task</span>:
            </div>
            <div className="input-field">
              <Input className={"id-input"} />
            </div>
          </div>
          <div className="create-employee-main">
            <div className="label-field-project">
              <span className="label-names-project">Status</span>:
            </div>
            <div className="task-input-select">
              {/* <SingleSelect data={roleNames} onChange={onRoleNameChange} value={roleName}  /> */}
            </div>
          </div >
          <div className='save-clear-buttons'>
            <Button name={"ADD"} />
            <button className="close-btn" onClick={handleCancel}>CLOSE</button>
          </div>
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

export default AllTasks