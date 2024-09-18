import React from 'react';
import styles from './_styles.module.scss';
import Icon from '@/components/Icon';

const LogoBox: React.FC = () => {
  return (
    <div className={styles.logo_box}>
      <Icon name="logo" />
      <h4>SG JOBS</h4>
    </div>
  );
};

export default LogoBox;
