'use client';
import React, { useEffect, useState } from 'react';
import { FakeJob } from '@/types/fake';
import styles from './_styles.module.scss';
import clsx from 'clsx';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

const jobTypeMap: Record<string, string> = {
  full: 'Full Time',
  part: 'Part Time',
  remote: 'Remote',
};

const JobCard: React.FC<{ job: FakeJob }> = ({ job }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <div className={styles.card}>
      <div className={styles.card_row}>
        <div className={styles.card_row_container}>
          <div className={styles.type_container}>
            {job.isNew ? <div className={styles.new}>NEW</div> : null}
            <div className={clsx(styles.type, styles[job.type])}>
              {jobTypeMap[job.type]}
            </div>
          </div>
          <h5 className={styles.job_name}>{job.name}</h5>
          <div className={styles.description}>
            <div className={styles.detail_row}>
              <Icon name="location" />
              <span>{job.location}</span>
            </div>
            <div className={styles.detail_row}>
              <Icon name="clock" />
              <span>{job.schedule}</span>
            </div>
          </div>
        </div>
        {window.innerWidth > 768 ? (
          <Button icon="save" iconPosition="right" className={styles.save_btn}>
            Save
          </Button>
        ) : (
          <Icon name="save" className={styles.save_icon} />
        )}
      </div>
      <div className={styles.card_row}>
        <span className={styles.job_payment}>{job.payment}</span>
        <Button className={styles.details_btn}>Details</Button>
      </div>
    </div>
  ) : null;
};

export default JobCard;
