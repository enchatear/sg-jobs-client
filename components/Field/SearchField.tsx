import React, {
  FocusEventHandler,
  FormEventHandler,
  useCallback,
  useId,
  useMemo,
} from 'react';
import clsx from 'clsx';
import styles from './_styles.module.scss';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

const SearchField = React.forwardRef<
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
    onSearch?: (searchValue: string) => void;
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
      onKeyDown,
      onInputCopy,
      onInputPaste,
      onInputBlur,
      onInputFocus,
      onInputInvalid,
      onInputReset,
      onSearch,
      ...rest
    },
    ref
  ) => {
    const uniqueId = useId();

    const inputId = useMemo(() => id ?? `${uniqueId}_Input`, [uniqueId, id]);

    const onSearchButtonClick: React.MouseEventHandler<
      HTMLButtonElement
    > = event => {
      if (typeof value === 'string') {
        event.preventDefault();
        event.stopPropagation();
        onSearch?.(value);
      }
    };

    const onInputKeyDown: React.KeyboardEventHandler<
      HTMLInputElement
    > = event => {
      if (event.key === 'Enter' && typeof value === 'string') {
        onSearch?.(value);
      }
      onKeyDown?.(event);
    };

    return (
      <div className={styles.search_container}>
        <Button onClick={onSearchButtonClick} icon="search" />
        <input
          {...rest}
          ref={ref}
          id={inputId}
          className={clsx(styles.input, {
            [styles.invalid]: isFieldInvalid,
          })}
          type={type}
          // required={required}
          minLength={minLength}
          maxLength={maxLength}
          value={value}
          onKeyDown={onInputKeyDown}
          onCopy={onInputCopy}
          onPaste={onInputPaste}
          onInvalid={onInputInvalid}
          onFocus={onInputFocus}
          onReset={onInputReset}
          onBlur={onInputBlur}
          autoComplete={rest.autoComplete}
          aria-details={hint ? `${uniqueId}_Hint` : undefined}
        />
      </div>
    );
  }
);

export default SearchField;
