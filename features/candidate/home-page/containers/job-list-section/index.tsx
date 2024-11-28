import React from 'react';
import styles from './_styles.module.scss';
import { FakeJob } from '@/types/fake';
import JobCard from '@/features/candidate/home-page/components/JobCard';
import Button from '@/components/Button';

const fakeJobs: FakeJob[] = [
  {
    id: 0,
    type: 'part',
    name: 'Administrative Coordinator',
    location: 'North West East',
    schedule: 'Wed - Friday (2-6pm)',
    payment: '$10.5-21 / hour',
    isNew: true,
  },
  {
    id: 1,
    type: 'full',
    name: 'Retail Supervisor',
    location: '110 Robinsons road S068901',
    schedule: 'Wed - Friday (2-6pm)',
    payment: '$2650-3445 / month',
    isNew: true,
  },
  {
    id: 2,
    type: 'part',
    name: 'Sports Instructor (Swimming / Football / Basketball)',
    location:
      'Multiple locations in Singapore. Able to work around preferred areas.',
    schedule: 'Wed - Friday (2-6pm)',
    payment: '$12 / hour',
    isNew: false,
  },
  {
    id: 3,
    type: 'full',
    name: 'Retail Supervisor',
    location: '110 Robinsons road S068901',
    schedule: 'Wed - Friday (2-6pm)',
    payment: '$2650-3445 / month',
    isNew: true,
  },
  {
    id: 4,
    type: 'full',
    name: 'Retail Supervisor',
    location: '110 Robinsons road S068901',
    schedule: 'Wed - Friday (2-6pm)',
    payment: '$2650-3445 / month',
    isNew: false,
  },
];

const JobListSection: React.FC = () => {
  return (
    <section className={styles.job_list}>
      <div className="container">
        <div className={styles.list_container}>
          {fakeJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
      <Button className={styles.more_btn}>Show More</Button>
    </section>
  );
};

export default JobListSection;
