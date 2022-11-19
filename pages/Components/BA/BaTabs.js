import React from 'react'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import Header from '../../CommonComponents/Header/Header';
import BaTimeSheet from './BaTimeSheet';
import TaskAssign from './TaskAssign';
import ClientForm from './ClientForm';
import AllTasks from './AllTasks';
import { getTask } from '../../../Redux/Actions/Admin/admin';
import { useDispatch,useSelector } from 'react-redux';

function BaTabs() {
  const dispatch = useDispatch();

    const onChange = (key) => {
      dispatch(getTask());
        console.log(key);
      };
  return (
    <div>
        <Header name={"BA"}/>
       <Tabs className='ba-tabs' onChange={onChange} type='card' >
          <TabPane defaultActiveKey="1" tab='Activities' key='1'>
            <TaskAssign />
            </TabPane>
            <TabPane tab='TimeSheet' key='2'>
            <BaTimeSheet />
            </TabPane>
            <TabPane tab='Client Form' key='3'>
            <ClientForm />
            </TabPane>
            <TabPane tab='All Tasks' key='4'>
              <AllTasks />
            </TabPane>
            </Tabs>
    </div>
  )
}

export default BaTabs