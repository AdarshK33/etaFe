import React from 'react'
import { Table } from 'antd';
import SingleSelect from '../DropDown/SingleSelect';
import { useState } from 'react';
// import TimePicker from '../TimePicker/SelectTime';
import { Input } from 'antd';
import { useSelector } from 'react-redux';
const { TextArea } = Input;
import { TimePicker } from 'antd';
import moment from 'moment';


const columns = [
  {
    title: 'Date',
    dataIndex: 'Date',
    width: 150,
  },
  {
    title: 'Project',
    dataIndex: 'Project',
    width: 150,
  },
  {
    title: 'Task',
    dataIndex: 'Task',
    width: 150,
  },
  {
    title: 'Select Time',
    dataIndex: 'SelectTime',
    width: 300,
  },
  {
    title: 'No. of Hours',
    dataIndex: 'NoofHours',
    width: 150,
  },
  {
    title: 'Comments',
    dataIndex: 'Comments',
  },
];

function CommonTable() {
  const dates = useSelector(state => state?.createEmployee?.datesTimeSheet)
  console.log("datresijsk",dates);
  const [type, setType] = useState('time');
  const [startTime,setStartTime] = useState("")
  
  const onStartTimeChange = (time,timeString) => {
    var duration = moment.duration(time[1].diff(time[0]));
    setStartTime(duration?._data?.hours + 'hour' + duration?._data?.minutes + 'minutes')
    console.log("start Time",duration);
  };

  const data = []

  for (let i = 0; i < dates.length; i++) {
    data.push({
      key: i,
      Date: dates[i],
      Project: <SingleSelect />,
      Task: <SingleSelect />,
      SelectTime: <TimePicker.RangePiv cker showTime={{format: 'h:mm a',}} onChange={onStartTimeChange} />,
      NoofHours: startTime,
      Comments:  <TextArea rows={1} />,
    });
  }
  return (
    <div>
  <Table className='common-table'
    columns={columns}
    dataSource={data}
    scroll={{
      y: 340,
    }}
  />
    </div>
  )
}

export default CommonTable