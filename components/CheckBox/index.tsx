'use client';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './_styles.module.scss';

const Mark = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 13.6L9.4 16L17.4 8"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckBox: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    title?: string;
    className?: string;
    checkedClassName?: string;
    count?: number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    secondary?: boolean;
  }
> = ({
  title = '',
  className = '',
  checkedClassName = '',
  count = null,
  onChange,
  disabled = false,
  style,
  secondary,
  ...props
}) => {
  const [checked, setChecked] = useState(
    props.checked || props.defaultChecked || false
  );

  useEffect(() => {
    setChecked(!!(props.checked || props.defaultChecked));
  }, [props.checked, props.defaultChecked]);

  const onChangeAction: React.ChangeEventHandler<HTMLInputElement> = e => {
    setChecked(e.target.checked);
    if (typeof onChange === 'function') {
      onChange(e);
    }
  };

  return (
    <label
      className={clsx(styles['checkbox-wrapper'], className, {
        [styles.disabled]: disabled,
        [checkedClassName]: checked,
        [styles.secondary]: secondary,
        [styles.secondary_checked]: secondary && checked,
      })}
      style={style}
    >
      <label
        className={clsx(styles.checkbox, { [styles.checked]: checked })}
        onClick={() => {
          setChecked(prev => !prev);
        }}
      >
        {count ? (
          <span className={styles.count}>
            {count > 0 ? (count < 100 ? count : '+') : ''}
          </span>
        ) : (
          <Mark />
        )}
        <input
          type="checkbox"
          disabled={disabled}
          onChange={onChangeAction}
          {...props}
        />
      </label>
      {title ? <span className={styles.title}>{title}</span> : null}
    </label>
  );
};

export default CheckBox;
