import React from 'react';
import styles from './_styles.module.scss';
import Icon from '@/components/Icon';
import clsx from 'clsx';

const LogoBox: React.FC<{ className?: string; size?: 'normal' | 'mini' }> = ({
  className,
  size = 'normal',
}) => {
  return (
    <div className={clsx(styles.logo_box, className)}>
      <Icon name={size === 'normal' ? 'logo' : 'miniLogo'} />
      <h4>SG JOBS</h4>
    </div>
  );
};

export default LogoBox;
