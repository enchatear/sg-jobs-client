import React from 'react';
import JobSearchForm from '@/features/candidate/home-page/components/JobSearchForm';
import styles from './_styles.module.scss';
import JobCategories from '@/features/candidate/home-page/components/JobCategories';

const fakeJobCategories = [
  {
    id: 0,
    name: 'F&B',
  },
  {
    id: 1,
    name: 'Sales / Retail',
  },
  {
    id: 2,
    name: 'Promoter',
  },
  {
    id: 3,
    name: 'Cleaning',
  },
  {
    id: 4,
    name: 'Packer / Logistic',
  },
  {
    id: 5,
    name: 'Education / Training',
  },
  {
    id: 6,
    name: 'Customer Service',
  },
  {
    id: 7,
    name: 'Tuition',
  },
  {
    id: 8,
    name: 'Driver / Delivery',
  },
  {
    id: 9,
    name: 'Telemarketing',
  },
  {
    id: 10,
    name: 'Admin / Secretary',
  },
  {
    id: 11,
    name: 'Healthcare',
  },
];

const JobFormSection: React.FC = () => {
  return (
    <section className={styles.job_section}>
      <div className="container">
        <JobSearchForm />
        <JobCategories categories={fakeJobCategories} />
      </div>
    </section>
  );
};

export default JobFormSection;
