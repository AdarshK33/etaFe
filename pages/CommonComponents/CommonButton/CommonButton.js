import * as React from 'react';
import { Button } from 'antd';

export default function CommonButton(props) {
  return (
    <div spacing={2} direction="row">
      <Button onClick={props.onClick} className={props.className}  type="primary">{props.name}</Button>
    </div>
  );
}
