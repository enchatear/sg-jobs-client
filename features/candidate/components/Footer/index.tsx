import React from 'react';
import styles from './_styles.module.scss';
import { IconName } from '@/components/Icon';
import clsx from 'clsx';
import Button from '@/components/Button';
import LogoBox from '@/components/LogoBox';

type FooterLink = {
  id: number;
  type: 'email' | 'phone' | 'telegram' | 'whatsapp';
  label: string;
  icon: IconName;
  url: string;
};

const footerLinks: FooterLink[] = [
  {
    id: 0,
    type: 'telegram',
    label: 'All jobs channel',
    icon: 'telegram',
    url: 'https://web.telegram.org/',
  },
  {
    id: 1,
    type: 'telegram',
    label: 'Part time jobs channel',
    icon: 'telegram',
    url: 'https://web.telegram.org/',
  },
  {
    id: 2,
    type: 'telegram',
    label: 'Full time jobs channel',
    icon: 'telegram',
    url: 'https://web.telegram.org/',
  },
  {
    id: 3,
    type: 'email',
    label: 'contact@singaporejobs.com',
    icon: 'atSign',
    url: 'contact@singaporejobs.com',
  },
  {
    id: 4,
    type: 'phone',
    label: '88752200',
    icon: 'phoneOutgoing',
    url: 'tel:88752200',
  },
  {
    id: 5,
    type: 'whatsapp',
    label: 'WhatsApp Us',
    icon: 'whatsapp',
    url: 'https://web.whatsapp.com/',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.links_list}>
          {footerLinks.map(link => (
            <Button
              key={link.id}
              icon={link.icon}
              to={link.url}
              className={clsx(styles.footer_btn, styles[link.type])}
            >
              {link.label}
            </Button>
          ))}
        </div>
        <div className={styles.footer_low}>
          <span>Copyright @ {new Date().getFullYear()}</span>
          <LogoBox className={styles.footer_logo} size="mini" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
