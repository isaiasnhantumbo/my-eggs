import React, {ReactNode} from 'react';

import {InputText} from './styles';
interface InputProps {
  icon?: ReactNode;
}
export function Input({icon}: InputProps) {
  return <InputText children={icon} />;
}
