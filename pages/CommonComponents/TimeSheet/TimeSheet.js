import React from 'react'
import Header from '../Header/Header'
import { DatePicker, Modal } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
import CommonTable from '../CommonTable/CommonTable';
import Button from '../CommonButton/CommonButton';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux';
import { timeSheetDates } from '../../../Redux/Actions/Admin/admin';

function EmployeeTimeSheet(props) {
  const [printDownload,setPrintDownload] = useState(false)
  const [datesData,setdatesData] = useState([])
  const [datesToggle,setDatesToggle] = useState(false)

  const dispatch = useDispatch();
  const handleCancel = () => {
      setPrintDownload(false)
  }
  const onPrintHandle = () => {
    setPrintDownload(true)
  }
 
  function getDatesInRange(startDate, endDate) {
    const date = new Date(startDate);
    const dates = [];
    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }
  
  const onDateChange = (dates, dateStrings) => {
    if (dates) {
      const allDates = getDatesInRange(dates[0], dates[1])
      const formatted = allDates.map((date) => moment(date).format('DD-MM-YYYY'));
      setdatesData(formatted)
      dispatch(timeSheetDates(formatted))
    } else {
      console.log('Clear');
    }
  };

  return (
    <div>
        <div className='time-sheet'>
      <h3>WEEKLY/MONTHLY REPORTS</h3>
      <div>
          <span className='select-date'>Select Date :</span>
        <RangePicker 
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
      onChange={onDateChange}
    />
    </div>
    </div>
    <div>
    {datesData.length>0 ? 
    <>
    <CommonTable />
    <div className='print-close-button'>
    <button className="print-download-button">Save</button>
    <button  onClick={onPrintHandle}  className={"save-button"}>Print/Download</button>
    </div>
    </>
     : <></>}
    </div>
    <Modal
        title="Download Weekly/Monthly Reports"
        visible={printDownload}
        onCancel={handleCancel}
        width={500}
        className="weekly-montly-reports"
      >
        <div className=''>
         <span className='modal-select-date'>Select Dates :</span>
         <RangePicker 
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
      // onChange={onChange}
    />
    <div className='modal-print-close-button'>
    <button  className="print-download-button">PRINT/DOWNLOAD</button>
    <button className={"save-button"} onClick={handleCancel}>CLOSE</button>
    </div>
        </div>
      </Modal>
    </div>
  )
}

export default EmployeeTimeSheet