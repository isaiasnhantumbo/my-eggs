import React from 'react';

import {LabelText} from './styles';

interface LabelProps {
  children: String;
}

export function Label({children}: LabelProps) {
  return <LabelText>{children}</LabelText>;
}
