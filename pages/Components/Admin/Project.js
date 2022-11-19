import React, { useEffect } from 'react'
import CommonTable from '../../CommonComponents/CommonTable/CommonTable'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space,Table,Modal} from 'antd';
import { useState } from 'react';
import Button from "../../CommonComponents/CommonButton/CommonButton";
import Input from "../../CommonComponents/Input/InputText";
import { useDispatch,useSelector } from 'react-redux';
import { createProject } from '../../../Redux/Actions/Admin/admin';
import SingleSelect from '../../CommonComponents/DropDown/SingleSelect';
import { deleteProject } from '../../../Redux/Actions/Admin/admin';
import { searchProject } from '../../../Redux/Actions/Admin/admin';

const Project = () => {
  const userDetails = useSelector(state => state?.userDetails?.userDetails?.data?.emp_list_result)
  console.log("userDetails",userDetails);
  const Ba = useSelector(state => state?.project?.allBa)
  const searchProj = useSelector(state => state?.project?.searchProject)
  console.log("sijsijsijsij",searchProj);
  // const baNamess = Ba.filter(item => (item._id === userDetails._id))
  // console.log("ueheuiuhueh",baNamess);
  const allProjects = useSelector(state => state?.project?.getProject?.data?.project_list_result)
  console.log("eijiejjie",allProjects);
  const [projectName,setProjectName] = useState("")
  const [clientName,setClientName] = useState("")
  const [clientEmail,setClientEmail] = useState("")
  const [baName,setBaName] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    if(searchProj){
      setProjectName(searchProj?.project_Name)
      setClientName(searchProj?.project_Client_Name)
      setClientEmail(searchProj?.project_Client_Email)
      // setBaName(searchProj)
    }
  },[searchProj])

    const columns=[
        {
            title: 'Project Name',
            dataIndex: 'ProjectName',
            width: 150,
          },
          {
            title: 'Client Name',
            dataIndex: 'ClientName',
            width: 150,
          },
          {
            title: 'Client Email',
            dataIndex: 'ClientEmail',
            width: 150,
          },
          {
            title: 'BA in Charge',
            dataIndex: 'BA',
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

    
    const [editModal,setEditModal] = useState(false)
    const [addModal,setAddModal] = useState(false)
  const [deleteModal,setDeleteModal] = useState(false)
  const [nameOfProject,setNameOfProject] = useState('')
const data = [];

  allProjects?.map(item => (
    data.push({
      key: 'i',
      ProjectName: item.project_Name,
      ClientName: item.project_Client_Name,
      ClientEmail: item.project_Client_Email,
      BA: item.project_Ba_Id,
      Actions: item.project_Name
    })
  ))

const addProjectApiData = {
    "data": {
        "project_Name": projectName,
        "project_Client_Email": clientEmail,
        "project_Client_Name": clientName,
        "project_Client_Location": "Banglore",
        "project_Ba_Id": baName
    }
}
const updateProjectApiData = {
  "data": {
    "project_Name": projectName,
    "project_Client_Email": clientEmail,
    "project_Client_Name": clientName,
    "project_Client_Location": "Banglore",
    "project_Ba_Id": baName
}
}
const handleCancel = () => {
  setEditModal(false)
  setDeleteModal(false)
  setAddModal(false)
}
const onEditHandle = (id) => {
  setEditModal(true) 
  dispatch(searchProject({
    "data": {
        "project_Name": id
    }
}))
}
const onDeleteHandle = (id) => {
  setNameOfProject(id)
  console.log("sijisjijs",id);
  setDeleteModal(true)
}
const onAddHandle = () => {
  setAddModal(true)
}
const onProjectNameChange =  (e) =>{
  setProjectName(e.target.value)
}
const onClientNameChange =  (e) =>{
  setClientName(e.target.value)
}
const onBaChange = (value) => {
  setBaName(value)
}
const onClientEmailChange = (e) => {
  setClientEmail(e.target.value)
}
const onAddButtonHandle = () => {
  dispatch(createProject(addProjectApiData))
  setProjectName("")
  setClientName("")
  setClientEmail("")
  setAddModal(false)
}
const onUpdateHanle = () => {
  dispatch(updateProject(updateProjectApiData))
setProjectName("")
setClientName("")
setClientEmail("")
setEditModal(false)

}
const onDeleteConfirmHandle = () => {
  dispatch(deleteProject({
    "data": {
        "project_Name": nameOfProject
    }
}))
setDeleteModal(false)
}
  return (
    <div>
      <div className='project-title-container'>
      <h3 className='project-title'>PROJECTS</h3>
      <button className='project-add' onClick={onAddHandle}>Add Project</button>
      </div>
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
        title="Edit Project"
        visible={editModal}
        onCancel={handleCancel}
        width={500}
        className=""
      >
        <div>
        <div className="create-employee-main">
          <div className="label-field-project">
            <span className="label-names-project">Project Name</span>:
          </div>
          <div className="input-field">
            <Input onChange={onProjectNameChange} value={projectName}  className={"id-input"} />
          </div>
        </div>
        <div className="create-employee-main">
          <div className="label-field-project">
            <span className="label-names-project">Client Name</span>:
          </div>
          <div className="input-field">
            <Input onChange={onClientNameChange} value={clientName}  className={"id-input"} />
          </div>
        </div>
        <div className="create-employee-main">
          <div className="label-field-project">
            <span className="label-names-project">Client Email</span>:
          </div>
          <div className="input-field">
            <Input onChange={onClientEmailChange} value={clientEmail}  className={"id-input"} />
          </div>
        </div>
        <div className="create-employee-main">
          <div className="label-field-project">
            <span className="label-names-project">BA in charge</span>:
          </div>
          <div className="task-input-select">
            <SingleSelect data={Ba} onChange={onBaChange} value={baName} />
          </div>
        </div >
        <div className='save-clear-buttons'>
        <Button name={"UPDATE"} onClick={onUpdateHanle} />
        <button className="close-btn" onClick={handleCancel}>CLOSE</button>
        </div>
        </div>
      </Modal>
   <Modal
        title="Alert"
        visible={deleteModal}
        onCancel={handleCancel}
        width={400}
        // className="project-modal"
      >
        <div>
          <h5>Confirm Delete?</h5>
        <div className='save-clear-buttons'>
        <Button name={"CONFIRM"} onClick={onDeleteConfirmHandle} />
        <button onClick={handleCancel} className="close-btn">CANCEL</button>
        </div>
        </div>
      </Modal>
      <Modal
        title="Add New Project"
        visible={addModal}
        onCancel={handleCancel}
        width={500}
        className=""
      >
        <div>
        <div className="create-employee-main">
          <div className="label-field-project">
            <span className="label-names-project">Project Name</span>:
          </div>
          <div className="input-field">
          <Input onChange={onProjectNameChange} value={projectName}  className={"id-input"} />
          </div>
        </div>
        <div className="create-employee-main">
          <div className="label-field-project">
            <span className="label-names-project">Client Name</span>:
          </div>
          <div className="input-field">
          <Input onChange={onClientNameChange} value={clientName}  className={"id-input"} />
          </div>
        </div>
        <div className="create-employee-main">
          <div className="label-field-project">
            <span className="label-names-project">Client Email</span>:
          </div>
          <div className="input-field">
          <Input onChange={onClientEmailChange} value={clientEmail}  className={"id-input"} />
          </div>
        </div>
        <div className="create-employee-main">
          <div className="label-field-project">
            <span className="label-names-project">BA in charge</span>:
          </div>
          <div className="input-field">
          <SingleSelect data={Ba} onChange={onBaChange} value={baName} />
          </div>
        </div >
        <div className='save-clear-buttons'>
        <Button name={"ADD"} onClick={onAddButtonHandle} />
        <button className="close-btn" onClick={handleCancel}>CLOSE</button>
        </div>
        </div>
      </Modal>
    </div>
  )
}

export default Project