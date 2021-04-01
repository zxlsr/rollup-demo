import React from 'react';
import { Alert as AntAlert, AlertProps as AntAlertProps } from 'antd';

export interface AlertProps extends AntAlertProps {}

const Alert = (props: AlertProps) => {
  const { ...restProps } = props;
  return <AntAlert {...restProps} />;
};

export { Alert as default };
