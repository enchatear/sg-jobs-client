import React from 'react';
import styles from './_styles.module.scss';

const FindJobBanner: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.banner}>{children}</div>;
};

export default FindJobBanner;
