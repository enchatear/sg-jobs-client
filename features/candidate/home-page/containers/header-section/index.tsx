import React from 'react';
import styles from './_styles.module.scss';
import LogoBox from '@/components/LogoBox';
import HeaderMenu from '@/features/candidate/home-page/components/HeaderMenu';

const HeaderSection: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_content}>
          <div className={styles.header_title}>
            <LogoBox />
            <HeaderMenu />
          </div>
          <div className={styles.header_subtitle}>
            <h2>
              Find <strong className={styles.subtitle_strong}>cool job</strong>{' '}
              for you
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
