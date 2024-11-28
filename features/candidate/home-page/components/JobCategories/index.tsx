'use client';

import React, { useEffect, useState } from 'react';
import styles from './_styles.module.scss';
import Link from 'next/link';

const JobCategories: React.FC<{
  categories: { id: number; name: string }[];
}> = ({ categories }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <div className={styles.job_categories}>
      <div className={styles.job_categories_head}>
        <h4>Category Jobs</h4>
        {window.innerWidth <= 768 ? (
          <Link href="/" className={styles.see_all}>
            See all
          </Link>
        ) : null}
      </div>
      <div className={styles.job_categories_list}>
        {(window.innerWidth <= 768 ? categories.slice(0, 5) : categories).map(
          category => (
            <div key={category.id} className={styles.category}>
              {category.name}
            </div>
          )
        )}
      </div>
    </div>
  ) : null;
};

export default JobCategories;
