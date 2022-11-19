import React from 'react'
import SingleSelect from '../../CommonComponents/DropDown/SingleSelect'
import { Input } from 'antd';
const { TextArea } = Input;
import Button from '../../CommonComponents/CommonButton/CommonButton';
import {DownloadOutlined} from "@ant-design/icons";
import { DatePicker, Modal } from 'antd';
import moment from 'moment';
import { useState } from 'react';
const { RangePicker } = DatePicker;

function ClientForm() {
    const [printDownload,setPrintDownload] = useState(false)

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
    <div className='client-container'>
      <div>
      <div><h3>CLIENT FORM</h3></div>
      <div className='task-section-1'>
      <div className='client-label-field'><span>Project Name</span>:</div>
      <div className='task-input-field'><SingleSelect /></div>
            {/* <DownloadOutlined onClick={onPrintHandle} className='download-icon'/> */}
        </div>
        <div className='task-section-1'>
        <div className='client-label-field'><span>Client Email ID</span>:</div>
        <div className='task-input-field'><SingleSelect /></div>
        </div>
        <div className='task-section-2'>
        <div className='client-label-field'><span>Status</span>:</div>
        <div className='task-input-field'><TextArea rows={2} /></div>
        </div>
        <div className='send-clear-button'>
            <Button name={'Send'}/>
          <button className="close-btn" >Clear</button>
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
         <span>Client Name :</span>
        <SingleSelect />
    </div>
            <div>
         <span>Project Name :</span>
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
      <Button name={"PRINT/DOWNLOAD"} className={"modal-print-downlaod-button"} />
      <Button name={"CLOSE"} className={"modal-close-button"}/>
    </div>
        </div>
      </Modal>
      </div>
    </div>
  )
}

export default ClientForm