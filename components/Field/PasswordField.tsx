import React, { FocusEventHandler, useId } from 'react';
import clsx from 'clsx';
import styles from './_styles.module.scss';
import Icon from '@/components/Icon';

const PasswordField = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    hint?: string;
    isFieldInvalid?: boolean;
    onInputCopy?: React.ClipboardEventHandler<HTMLInputElement>;
    onInputPaste?: React.ClipboardEventHandler<HTMLInputElement>;
    onInputInvalid?: React.FormEventHandler<HTMLInputElement>;
    onInputReset?: React.FormEventHandler<HTMLInputElement>;
    onInputFocus?: FocusEventHandler<HTMLInputElement>;
    onInputBlur?: FocusEventHandler<HTMLInputElement>;
    isVisible: boolean;
    toggleVisibility: React.MouseEventHandler<SVGElement>;
  }
>(
  (
    {
      id,
      type,
      hint,
      isFieldInvalid,
      minLength,
      maxLength,
      required,
      value,
      onInputCopy,
      onInputPaste,
      onInputBlur,
      onInputFocus,
      onInputInvalid,
      onInputReset,
      isVisible,
      toggleVisibility,
      ...rest
    },
    ref
  ) => {
    return (
      <>
        <input
          {...rest}
          ref={ref}
          className={clsx(styles.input, {
            [styles.invalid]: isFieldInvalid,
          })}
          id={id}
          // aria-details={hint ? `${uniqueId}_Hint` : undefined}
          autoComplete={rest.autoComplete ?? 'off'}
          type={type}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          value={value}
          onCopy={onInputCopy}
          onPaste={onInputPaste}
          onInvalid={onInputInvalid}
          onReset={onInputReset}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />
        {/*<Icon*/}
        {/*  name={isVisible ? 'eye' : 'hidden'}*/}
        {/*  className={styles.visibility_toggle}*/}
        {/*  onClick={rest.disabled ? undefined : toggleVisibility}*/}
        {/*  onMouseDown={event => event.preventDefault()}*/}
        {/*  data-qa={dataQA ? `${dataQA}_Visibility_Toggle` : undefined}*/}
        {/*/>*/}
      </>
    );
  }
);

export default PasswordField;
