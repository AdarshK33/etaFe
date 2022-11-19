import React from 'react'
import { Input } from 'antd';

function InputText(props) {
  return (
    <div>
        <Input placeholder={props.placeholder} className={props.className} onChange={props.onChange} value={props.value} disabled={props.disabled} />
    </div>
  )
}

export default InputText