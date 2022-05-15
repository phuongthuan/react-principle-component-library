import { ReactElement, ChangeEvent, FocusEvent } from 'react';
import { CommonProps } from '../types';

type TextFieldStatus = 'success' | 'error' | 'warning';

export interface TextFieldProps extends CommonProps {
  name?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  label?: string;
  value?: string;
  placeholder?: string;
  status?: TextFieldStatus;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

function TextField({
  id,
  label,
  style,
  value,
  placeholder,
  type = 'text',
  status,
  disabled,
  name,
  onChange,
  onBlur,
  onFocus,
  error,
  required = false
}: TextFieldProps): ReactElement {
  const input = (
    <input
      id={id}
      name={name}
      disabled={disabled}
      className={`input ${renderStyles(status, disabled)}`}
      type={type}
      value={value}
      placeholder={placeholder}
      style={style}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );

  if (!label) {
    return input;
  }

  return (
    <div className="flex flex-col items-start gap-y-1 mb-2">
      <label htmlFor={label}>
        <span
          className={`block text-xs font-semibold text-slate-700 ${
            required
              ? `after:content-['*'] after:ml-0.5 after:text-red-500`
              : ``
          }`}
        >
          {label}
        </span>
      </label>
      {input}
      {error ? (
        <p className="text-red-500 text-xs">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default TextField;

function renderStyles(status?: TextFieldStatus, disalbed?: boolean) {
  if (disalbed) {
    return 'disalbed:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none';
  }
  switch (status) {
    case 'error':
      return 'border-red-500 hover:border-red-500 text-red-500 focus:border-red-500 invalid:border-red-500 invalid:text-red-500 focus:ring-red-400';
    case 'warning':
      return 'border-orange-500 hover:border-orange-500 focus:border-orange-600 focus:ring-orange-400';
    default:
      return '';
  }
}
