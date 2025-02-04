import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import 'antd/es/input/style/css';

export interface InputProps extends AntInputProps {}

const Input = (props: InputProps) => {
  const { children, ...restProps } = props;
  return <AntInput {...restProps}>{children}</AntInput>;
};

export { Input as default };
