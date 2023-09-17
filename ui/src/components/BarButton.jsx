import React from 'react';
import {Button} from 'react-bootstrap';

export default function BarButton({
  children,
  className,
  disabled = false,
  onClick,
  variant = 'primary',
}) {
  return (
    <Button
      className={className}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </Button>
  );
}
