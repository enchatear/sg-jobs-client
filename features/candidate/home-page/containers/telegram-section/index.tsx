import React from 'react';
import styles from './_styles.module.scss';
import Link from 'next/link';
import Icon from '@/components/Icon';

const fakeTelegramList = [
  {
    id: 0,
    url: '#',
    label: 'All jobs channel',
  },
  {
    id: 1,
    url: '#',
    label: 'Part time jobs channel',
  },
  {
    id: 2,
    url: '#',
    label: 'Full time jobs channel',
  },
];

const TelegramSection: React.FC = () => {
  return (
    <section className={styles.telegram}>
      <div className="container">
        <div className={styles.telegram_block}>
          <h3 className={styles.title}>
            Find <strong className={styles.title_strong}>your job</strong> on
            telegram
          </h3>
          <div className={styles.telegram_list}>
            {fakeTelegramList.map(channel => (
              <Link
                key={channel.id}
                href={channel.url}
                className={styles.telegram_item}
              >
                <Icon name="telegram" />
                {channel.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramSection;
