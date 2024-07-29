'use client';
import React, {
  FocusEventHandler,
  FormEventHandler,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from 'react';
import clsx from 'clsx';
import PasswordField from './PasswordField';
import SearchField from './SearchField';
import styles from './_styles.module.scss';

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string | number;
  direction?: 'horizontal' | 'vertical';
  title?: string;
  hint?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  storeInvalidValuesFor?: string | number;
  className?: string;
  titleClassName?: string;
  fieldClassName?: string;
  hintClassName?: string;
  hideRequired?: boolean;
  ['data-qa']?: string;
  onSearch?: (searchValue: string) => void;
}

const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  (
    {
      direction = 'vertical',
      title,
      hint,
      className,
      titleClassName,
      fieldClassName,
      hintClassName,
      id,
      type,
      required,
      minLength,
      maxLength,
      min,
      max,
      step,
      value,
      onCopy,
      onPaste,
      onReset,
      onInvalid,
      onBlur,
      isInvalid,
      errorMessage,
      hideRequired = false,
      onSearch,
      ...rest
    },
    ref
  ) => {
    const uniqueId = useId();

    const isPasswordField = useMemo(() => type === 'password', [type]);
    const [isVisible, setIsVisible] = useState(!isPasswordField);
    const [isInputFocused, setIsInputFocused] = useState(false);

    const toggleVisibility = useCallback<React.MouseEventHandler<SVGElement>>(
      event => {
        event.preventDefault();
        event.stopPropagation();

        setIsVisible(prev => !prev);
      },
      []
    );

    const onInputCopy: React.ClipboardEventHandler<
      HTMLInputElement
    > = event => {
      if (isPasswordField && !isVisible) {
        event.preventDefault();
      }

      if (typeof onCopy === 'function') {
        onCopy(event);
      }
    };

    const onInputPaste: React.ClipboardEventHandler<
      HTMLInputElement
    > = event => {
      if (typeof onPaste === 'function') {
        onPaste(event);
      }
    };

    const onInputInvalid: React.FormEventHandler<HTMLInputElement> = event => {
      if (typeof onInvalid === 'function') {
        onInvalid(event);
      }
    };

    const onInputReset: React.FormEventHandler<HTMLInputElement> = event => {
      if (typeof onReset === 'function') {
        onReset(event);
      }
    };

    const onInputFocus: FocusEventHandler<HTMLInputElement> = () =>
      setIsInputFocused(true);

    const onInputBlur: FocusEventHandler<HTMLInputElement> = event => {
      setIsInputFocused(false);
      if (typeof onBlur === 'function') {
        onBlur(event);
      }
    };

    const fieldHint = errorMessage ?? hint;

    return (
      <div
        className={clsx(styles.container, styles[direction], className, {
          [styles.required]: !hideRequired && required,
          [styles.disabled]: rest.disabled,
          [styles.invalid]: isInvalid,
        })}
      >
        {title ? (
          <label
            className={clsx(styles.title, titleClassName, {
              [styles.active_title]: isInputFocused,
            })}
            htmlFor={id ?? `${uniqueId}_Input`}
          >
            {title}
            {/* {required ? ' *' : ''} */}
          </label>
        ) : null}
        <label
          className={clsx(styles.field, fieldClassName)}
          htmlFor={id ?? `${uniqueId}_Input`}
        >
          {isPasswordField ? (
            <PasswordField
              {...rest}
              ref={ref}
              id={id ?? `${uniqueId}_Input`}
              value={value}
              hint={hint}
              type={isVisible ? 'text' : 'password'}
              isFieldInvalid={isInvalid}
              // required={required}
              minLength={minLength}
              maxLength={maxLength}
              onInputCopy={onInputCopy}
              onInputPaste={onInputPaste}
              onInputInvalid={onInputInvalid}
              onInputReset={onInputReset}
              onInputFocus={onInputFocus}
              onInputBlur={onInputBlur}
              isVisible={isVisible}
              toggleVisibility={toggleVisibility}
            />
          ) : type === 'search' ? (
            <SearchField
              {...rest}
              ref={ref}
              id={id ?? `${uniqueId}_Input`}
              value={value}
              hint={hint}
              type={isVisible ? 'text' : 'password'}
              isFieldInvalid={isInvalid}
              onInputCopy={onInputCopy}
              onInputPaste={onInputPaste}
              onInputInvalid={onInputInvalid}
              onInputReset={onInputReset}
              onInputFocus={onInputFocus}
              onInputBlur={onInputBlur}
            />
          ) : (
            <input
              {...rest}
              ref={ref}
              className={clsx(styles.input, {
                [styles.invalid]: isInvalid,
              })}
              id={id ?? `${uniqueId}_Input`}
              aria-details={hint ? `${uniqueId}_Hint` : undefined}
              autoComplete={rest.autoComplete}
              type={type}
              // required={required}
              minLength={minLength}
              maxLength={maxLength}
              min={min}
              max={max}
              step={step}
              value={value}
              onCopy={onInputCopy}
              onPaste={onInputPaste}
              onInvalid={onInputInvalid}
              onReset={onInputReset}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
            />
          )}
        </label>
        {fieldHint ? (
          <span
            id={`${uniqueId}_Hint`}
            className={`${styles.hint}${
              hintClassName ? ` ${hintClassName}` : ''
            }`}
          >
            {fieldHint}
          </span>
        ) : null}
      </div>
    );
  }
);

export default Field;
