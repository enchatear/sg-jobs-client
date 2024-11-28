'use client';
import React, { useEffect, useState } from 'react';
import styles from './_styles.module.scss';
import Button from '@/components/Button';
import clsx from 'clsx';
import Icon from '@/components/Icon';

const HeaderMenu = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <div className={styles.header_menu}>
      {window.innerWidth > 768 ? (
        <>
          <Button className={clsx(styles.header_btn, styles.login_btn)}>
            Login / Register
          </Button>
          <Button className={clsx(styles.header_btn, styles.employee_btn)}>
            I&apos;m Employer
          </Button>
        </>
      ) : (
        <Icon name="burger" />
      )}
    </div>
  ) : null;
};

export default HeaderMenu;
