import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useId,
  useCallback,
} from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import Button from '../Button';
import Icon from '../Icon';
import styles from './_styles.module.scss';
import clsx from 'clsx';

export type ListItem<K = number | string> = {
  key: K;
  value: string;
  label?: string;
  className?: string;
};

type SelectBoxProps<K = number | string> = {
  list: ListItem<K>[];
  selected: ListItem<K> | null;
  handleSelect: (item: ListItem<K>) => void;
  emptyListPlaceholder?: string;
  value?: string | number;
  // defaultValue?: string | number | null;
  loading?: boolean;
  disabled?: boolean;
  title?: string;
  hint?: string;
  spacer?: number;
  isInvalid?: boolean;
  comboboxClassName?: string;
  titleClassName?: string;
  dropdownClassName?: string;
  updateButtonClassName?: string;
  hintClassName?: string;
  onSearch?: (value: string) => void;
  direction?: 'horizontal' | 'vertical';
};

const SelectBox = <K extends string | number = string | number>({
  className = '',
  titleClassName = '',
  comboboxClassName = '',
  dropdownClassName,
  hintClassName = '',
  list,
  selected,
  handleSelect,
  title = '',
  placeholder = 'Select an item from the list',
  emptyListPlaceholder = 'No items found',
  hint = '',
  disabled = false,
  loading = false, // ? Update button
  spacer = 0, // ? offset for internal window e.g. Modal
  value,
  // defaultValue,
  isInvalid,
  onSearch,
  direction = 'vertical',
  ...rest
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'list'> &
  SelectBoxProps<K>) => {
  const uniqueId = useId();

  const fieldRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const comboboxRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownListRef = useRef<HTMLUListElement>(null);

  const [dropdownActive, setDropdownActive] = useState(false);
  const dropdownAbove = useMemo(() => {
    if (dropdownActive && dropdownRef?.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const isEnoughSpace = dropdownRect.bottom + spacer > window.innerHeight;

      return isEnoughSpace;
    }

    return false;
  }, [dropdownActive, spacer]);

  // const [selected, setSelected] = useState<ListItem | null>(null);

  const onSelectKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!dropdownActive) {
      switch (event.key) {
        case 'Up':
        case 'ArrowUp':
        case 'Down':
        case 'ArrowDown':
        case ' ': // Space
        case 'Enter':
          event.preventDefault();
          setDropdownActive(true);
          break;
        default: {
          break;
        }
      }
    } else {
      switch (event.key) {
        case 'Tab': {
          setDropdownActive(false);
          break;
        }
        case 'Esc':
        case 'Escape': {
          event.preventDefault();
          setDropdownActive(false);

          const combobox = comboboxRef.current;
          const { activeElement } = document;

          if (combobox && (!activeElement || combobox !== activeElement)) {
            combobox.focus();
          }
          break;
        }

        case 'Up':
        case 'Down':
        case 'ArrowUp':
        case 'ArrowDown': {
          event.preventDefault();

          if (dropdownListRef?.current) {
            const { activeElement } = document;
            const focusDirection = event.key.includes('Down') ? 1 : -1;
            const defaultOptionPosition =
              focusDirection < 0 ? focusDirection : 0;

            if (
              activeElement &&
              dropdownListRef.current.contains(activeElement)
            ) {
              const options = Array.from(
                dropdownListRef.current.children
              ) as HTMLLIElement[];

              const activeOptionIdx = options.findIndex(
                child => child === activeElement
              );

              if (activeOptionIdx >= 0) {
                const optionIdx = activeOptionIdx + focusDirection;

                const option = options.at(
                  optionIdx >= 0 && optionIdx < options.length
                    ? optionIdx
                    : defaultOptionPosition
                );

                option?.focus();

                break;
              }
            }

            const defaultOption = dropdownListRef.current[
              `${defaultOptionPosition ? 'last' : 'first'}Child`
            ] as HTMLLIElement | null;

            defaultOption?.focus();
          }
          break;
        }

        default: {
          break;
        }
      }
    }
  };

  const onOptionClick = (item: ListItem<K>): void => {
    setDropdownActive(false);

    const combobox = comboboxRef.current;
    const { activeElement } = document;

    if (combobox && (!activeElement || combobox !== activeElement)) {
      combobox.focus();
    }

    if (item.key !== selected?.key) {
      handleSelect(item);

      if (inputRef?.current) {
        setTimeout(() => {
          inputRef.current?.dispatchEvent(
            new Event('change', {
              bubbles: true,
            })
          );
        }, 0);
      }
    }
  };

  const onOptionKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    item: ListItem<K>
  ): void => {
    switch (event.key) {
      case ' ': // Space
      case 'Enter': {
        event.preventDefault();
        onOptionClick(item);

        break;
      }
      default: {
        break;
      }
    }
  };

  useEffect(() => {
    if (disabled && !onSearch) {
      setDropdownActive(false);
    }
  }, [disabled, onSearch]);

  const closeDropDown = useCallback(() => setDropdownActive(false), []);

  useOnClickOutside(closeDropDown, dropdownActive, fieldRef);

  return (
    <div
      ref={fieldRef}
      className={clsx(styles.container, styles[direction], className)}
    >
      {title ? (
        <label
          className={clsx(styles.title, titleClassName, {
            [styles.title_required]: rest.required,
            [styles.title_invalid]: isInvalid,
            [styles.title_disabled]: disabled,
            [styles.title_active]: dropdownActive,
          })}
          htmlFor={`${uniqueId}_Input`}
          id={`${uniqueId}_Label`}
          onClick={() => {
            if (!disabled) {
              setDropdownActive(prev => !prev);
            }
          }}
        >
          {title}
        </label>
      ) : null}
      <div className={styles.select_container}>
        <div
          className={styles.select}
          role="presentation"
          onKeyDown={onSelectKeyDown}
        >
          <input
            {...rest}
            id={`${uniqueId}_Input`}
            type="text"
            className={styles.input}
            ref={inputRef}
            autoComplete="off"
            defaultValue={selected?.key}
          />
          <Button
            ref={comboboxRef}
            className={clsx(
              styles.combobox,
              {
                [styles.dropdownAbove]: dropdownAbove,
                [styles.invalid]: isInvalid,
              },
              comboboxClassName
            )}
            disabled={disabled || (!onSearch && !list.length)}
            onClick={() => setDropdownActive(prev => !prev)}
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={dropdownActive}
            aria-controls={`${uniqueId}_Dropdown`}
            aria-labelledby={`${uniqueId}_Label`}
          >
            <span className={styles.name}>
              {list.length
                ? selected?.label ?? selected?.value ?? placeholder
                : emptyListPlaceholder}
            </span>
            <Icon name="chevronDown" className={styles.icon} />
          </Button>
          <div
            ref={dropdownRef}
            id={`${uniqueId}_Dropdown`}
            className={clsx(styles.dropdown, dropdownClassName)}
          >
            {list.length ? (
              <ul
                ref={dropdownListRef}
                className={styles.list}
                role="listbox"
                tabIndex={-1}
                aria-multiselectable="false"
              >
                {list.map(option => (
                  <div
                    key={`${uniqueId}_${option.key}_Option`}
                    className={clsx(styles.option, option.className)}
                    role="option"
                    onClick={() => onOptionClick(option)}
                    onKeyDown={event => onOptionKeyDown(event, option)}
                    tabIndex={-1}
                    aria-selected={option.key === selected?.key}
                  >
                    <span className={styles.name}>
                      {option.label ?? option.value}
                    </span>
                    {option.key === selected?.key ? (
                      <Icon name="check" className={styles.check_icon} />
                    ) : null}
                  </div>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
      {hint && (
        <span
          className={clsx(
            styles.hint,
            { [styles.invalid]: isInvalid },
            hintClassName
          )}
        >
          {hint}
        </span>
      )}
    </div>
  );
};

export default SelectBox;
