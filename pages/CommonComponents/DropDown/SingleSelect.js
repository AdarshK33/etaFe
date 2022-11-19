import React from 'react'
import { Select } from 'antd';

const { Option } = Select;
function SingleSelect(props) {
  console.log("dsfgsdf",props)
  let options = props?.data?.map((item, index) => (
    // console.log("data",data)
    <Option key={index} value={item?._id || item?.project_Name || item?.name || item}>
      {item?.project_Name|| item?.name || item}
    </Option>
  ));
  return (
    <div>
    <Select  onChange={props.onChange} value={props.value}
 filterOption={(input, option) =>
  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
 
}>
      {options}
    </Select>
    </div>
  )
}

export default SingleSelect