import React, { PropsWithChildren } from 'react';

export interface ButtonProps {
  color: string;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ color }) => (
  <button type="button" className={color}>
    Click
  </button>
);

export default Button;
