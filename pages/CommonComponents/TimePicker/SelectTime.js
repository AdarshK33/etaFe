import { DatePicker, Select, Space, TimePicker } from 'antd';
import React, { useState } from 'react';

function SelectTime() {
    const [type, setType] = useState('time');
  return (
    <div>
      <TimePicker showTime={{format: 'h:mm a',}}/>
    </div>
  )
}

export default SelectTime