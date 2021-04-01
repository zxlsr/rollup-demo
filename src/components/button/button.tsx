import React from 'react';
import { Button as AntBtn, ButtonProps as AntButtonProps } from 'antd';

export interface ButtonProps extends AntButtonProps {}

const Button = (props: ButtonProps) => {
  const { children, ...restProps } = props;
  return <AntBtn {...restProps}>{children}</AntBtn>;
};

export { Button as default };
