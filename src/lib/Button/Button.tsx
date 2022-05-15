import React, { ReactElement, MouseEventHandler } from 'react';
import { CommonProps } from '../../types';
import LoadingIcon from './LoadingIcon';

type ButtonVariant = 'primary' | 'success' | 'danger' | 'warning';

export interface ButtonProps extends CommonProps {
  type?: 'submit' | 'reset' | 'button';
  loading?: boolean;
  variant?: ButtonVariant;
  text?: string | ReactElement;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const renderButtonStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'success':
      return 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700 focus:ring-green-300 ';
    case 'danger':
      return 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-300 ';
    case 'warning':
      return 'bg-orange-400 text-white hover:bg-orange-500 active:bg-orage-600 focus:ring-orange-200';
    default:
      return 'bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700 focus:ring-indigo-300 ';
  }
};

const renderButtonDisabledStyles = (disabled?: boolean) =>
  disabled ? 'disabled:bg-gray-700' : '';

function Button({
  id,
  text,
  className,
  variant = 'primary',
  disabled = false,
  style,
  onClick,
  loading = false,
  type = 'button'
}: ButtonProps): ReactElement {
  return (
    <button
      id={id}
      type={type}
      disabled={disabled || loading}
      className={`btn ${className} ${renderButtonStyles(
        variant
      )} ${renderButtonDisabledStyles(disabled)}`}
      style={style}
      onClick={onClick}
    >
      {loading ? (
        <span className="flex items-center">
          <LoadingIcon /> {text}
        </span>
      ) : (
        text
      )}
    </button>
  );
}

export default Button;
