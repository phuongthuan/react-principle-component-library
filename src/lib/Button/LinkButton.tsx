import React, { ReactElement, MouseEvent } from 'react';
import { CommonProps } from '../../types';

export interface LinkButtonProps extends CommonProps {
  disabled?: boolean;
  href: string;
  onClick?: (e: MouseEvent) => void;
  target?: '_blank' | '_parent' | '_self' | '_top';
  text: string | ReactElement;
}

const renderButtonStyles = (disabled: boolean) => {
  if (disabled) {
    return 'pointer-events-none text-gray-600';
  }
  return 'text-indigo-500';
};

const LinkButton = ({
  text,
  href,
  onClick,
  id,
  target,
  disabled = false,
  className,
  style,
}: LinkButtonProps): ReactElement => {
  return (
    <a
      id={id}
      href={href}
      target={target}
      onClick={onClick}
      className={`btn-link ${renderButtonStyles(disabled)} ${className}`}
      style={style}
    >
      {text}
    </a>
  );
};

export default LinkButton;
