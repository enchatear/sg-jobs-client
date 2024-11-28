'use client';
import React, { useEffect, useState } from 'react';
import styles from './_styles.module.scss';
import Button from '@/components/Button';
import FindJobBanner from '@/features/candidate/home-page/components/FindJobBanner';

const fakeTrends = [
  {
    id: 0,
    label: 'Manager',
    url: '/',
  },
  {
    id: 1,
    label: 'Engineer',
    url: '/',
  },
  {
    id: 2,
    label: 'Project Engineer',
    url: '/',
  },
  {
    id: 3,
    label: 'Promoter',
    url: '/',
  },
  {
    id: 4,
    label: 'Assistant',
    url: '/',
  },
  {
    id: 5,
    label: 'Assistant Manager',
    url: '/',
  },
  {
    id: 6,
    label: 'Project Manager',
    url: '/',
  },
  {
    id: 7,
    label: 'Software Engineer',
    url: '/',
  },
  {
    id: 8,
    label: 'Packing',
    url: '/',
  },
  {
    id: 9,
    label: 'Part time',
    url: '/',
  },
  {
    id: 10,
    label: 'Admin Assistant',
    url: '/',
  },
  {
    id: 11,
    label: 'Full time',
    url: '/',
  },
];

const fakeLocations = [
  {
    id: 0,
    label: 'Central',
    url: '/',
  },
  {
    id: 1,
    label: 'East',
    url: '/',
  },
  {
    id: 2,
    label: 'West',
    url: '/',
  },
  {
    id: 3,
    label: 'North',
    url: '/',
  },
  {
    id: 4,
    label: 'North-East',
    url: '/',
  },
  {
    id: 5,
    label: 'All regions',
    url: '/',
  },
];

const fakeIndustries = [
  {
    id: 0,
    label: 'F&B',
    url: '/',
  },
  {
    id: 1,
    label: 'Engineer',
    url: '/',
  },
  {
    id: 2,
    label: 'Project Engineer',
    url: '/',
  },
  {
    id: 3,
    label: 'Promoter',
    url: '/',
  },
  {
    id: 4,
    label: 'Assistant',
    url: '/',
  },
  {
    id: 5,
    label: 'Tuition',
    url: '/',
  },
  {
    id: 6,
    label: 'Project Manager',
    url: '/',
  },
  {
    id: 7,
    label: 'Packing',
    url: '/',
  },
  {
    id: 8,
    label: 'Software Engineer',
    url: '/',
  },
  {
    id: 10,
    label: 'Admin',
    url: '/',
  },
];

const JobTrendsSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <section className={styles.trends_section}>
      <div className="container">
        {window.innerWidth > 768 ? (
          <div className={styles.trends_container}>
            <h5 className={styles.trends_title}>Try Trending Searches</h5>
            <div className={styles.trends_list}>
              {fakeTrends.map(trend => (
                <Button
                  key={trend.id}
                  to={trend.url}
                  icon="search"
                  className={styles.trend_btn}
                >
                  {trend.label}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.trends_container_wrapper}>
            <div className={styles.trends_container_mobile}>
              <FindJobBanner>
                Find <strong className={styles.trend_strong}>job</strong> <br />{' '}
                by location
              </FindJobBanner>
              <div className={styles.trends_list}>
                {fakeLocations.map(location => (
                  <Button
                    key={location.id}
                    to={location.url}
                    className={styles.trend_btn}
                  >
                    {location.label}
                  </Button>
                ))}
              </div>
            </div>
            <div className={styles.trends_container_mobile}>
              <FindJobBanner>
                Find <strong className={styles.trend_strong}>job</strong> <br />{' '}
                by industries
              </FindJobBanner>
              <div className={styles.trends_list}>
                {fakeIndustries.map(location => (
                  <Button
                    key={location.id}
                    to={location.url}
                    className={styles.trend_btn}
                  >
                    {location.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  ) : null;
};

export default JobTrendsSection;
