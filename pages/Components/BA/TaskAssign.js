import React from 'react'
import {DownloadOutlined} from "@ant-design/icons";
import { DatePicker, Modal } from 'antd';
import moment from 'moment';
import SingleSelect from '../../CommonComponents/DropDown/SingleSelect'
import { Input } from 'antd';
const { TextArea } = Input;
import Button from '../../CommonComponents/CommonButton/CommonButton';
import { useState } from 'react';
const { RangePicker } = DatePicker;
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import { createTask } from '../../../Redux/Actions/Admin/admin';
function TaskAssign() {
  const userDetail = useSelector(state => state?.userDetails?.userDetails?.data?.emp_list_result)
  console.log("userDetails",userDetail);
  const allProjects = useSelector(state => state?.project?.getProject?.data?.project_list_result)
  console.log("eijiejjie",allProjects);

  // const name = userDetail.map(item => item.name)
  // console.log("fsdaasfds",name)
  const dispatch = useDispatch();
  const [printDownload,setPrintDownload] = useState(false)
  const [projectName,setProjectName] = useState("")
  const [userName,setUserName] = useState("")
  const [userId,setUserId] = useState("")
  const [task,setTask] = useState("")

  const taskSaveApiData = {
    "data": {
        "project_Id": projectName,
        "user_Id": userName,
        "user_Email": userId,
        "task_comment": task
    }
}

  const onProjectChange = (value) => {
    setProjectName(value)
  }
  const onUserNameChange = (value) => {
    console.log("doijodjojd",value);
    setUserName(value)
  }
  const onEmailChange = (value) => {
    setUserId(value)
  }
  const onTaskChange = (e) => {
    setTask(e.target.value)
  }
  const onSaveHandle = () => {
    dispatch(createTask(taskSaveApiData))
    setProjectName("")
    setUserName("")
    setUserId("")
    setTask("")
  }
  const onClearHandle = () => {
    setProjectName("")
    setUserName("")
    setUserId("")
    setTask("")
  }

  const handleCancel = () => {
      setPrintDownload(false)
  }
  const onPrintHandle = () => {
    setPrintDownload(true)
  }
  const onChange = (dates, dateStrings) => {
    if (dates) {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    } else {
      console.log('Clear');
    }
  };
  return (
    <div className='task-assign-container'>
      <div>
        <h1>ASSIGN TASKS</h1>
        <div className='task-section-1'>
        <div className='label-field'><span>Project</span>:</div>
          <div className='task-input-field'>
            <SingleSelect data={allProjects} value={projectName} className="task-select" onChange={onProjectChange}/>
          </div>
          
        </div>
        
        <div className='task-section-1'>
          <div className='label-field'><span>User Name</span>:</div>
          <div className='task-input-field'>
            <SingleSelect data={userDetail} value={userName} className="task-select" onChange={onUserNameChange} />
            </div>
        </div>
        <div className='task-section-1'>
        <div className='label-field'><span>User Email ID</span>:</div>
          <div className='task-input-field'>
            <SingleSelect data={userDetail?.map(item => item.email)} value={userId} className="task-select" onChange={onEmailChange} />
            </div>
        </div>
        <div className='task-section-2'>
        <div className='label-field'><span>Task</span>:</div>
        <div className='task-input-field'>
          <TextArea onChange={onTaskChange} value={task} />
          </div>
        <br></br>
        </div>
        <div className='save-clear-button'>
          <Button className="save-btn" name={'SAVE'} onClick={onSaveHandle} />
          <button className="close-btn" onClick={onClearHandle}>CLEAR</button>
        </div>
        <Modal
        title="Download Weekly/Monthly Reports"
        visible={printDownload}
        onCancel={handleCancel}
        width={500}
        className=""
      >
        <div className=''>
            <div>
         <span>Employee ID :</span>
        <SingleSelect />
    </div>
            <div>
         <span>Employee Name :</span>
         <SingleSelect />
    </div>
            <div>
         <span>Select Dates :</span>
         <RangePicker 
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
      onChange={onChange}
    />
    </div>
    <div className='modal-print-close-button'>
      <Button name={"Print/Download"} className={"modal-print-downlaod-button"} />
      <Button name={"Close"} className={"modal-close-button"}/>
    </div>
        </div>
      </Modal>
      </div>
    </div>
  )
}

export default TaskAssign