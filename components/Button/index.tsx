import React from 'react';
import Icon, { IconName } from '@/components/Icon';
import clsx from 'clsx';
import styles from './_styles.module.scss';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  iconClassName?: string;
  tooltip?: string;
};

const Button: React.FC<ButtonProps> = ({
  className,
  icon = null,
  iconPosition = 'left',
  iconClassName,
  type,
  children = null,
  ...rest
}) => {
  return (
    <button {...rest} type={type} className={clsx(styles.button, className)}>
      {' '}
      {icon && iconPosition === 'left' ? (
        <Icon name={icon} className={clsx(styles.icon, iconClassName)} />
      ) : null}
      {children}
      {icon && iconPosition === 'right' ? (
        <Icon name={icon} className={clsx(styles.icon, iconClassName)} />
      ) : null}
    </button>
  );
};

export default Button;
