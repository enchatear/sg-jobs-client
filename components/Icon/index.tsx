import React from 'react';
import clock from '@/assets/icons/clock.svg';
import location from '@/assets/icons/location.svg';
import logo from '@/assets/icons/logo.svg';
import phoneOutgoing from '@/assets/icons/phone-outgoing.svg';
import save from '@/assets/icons/save.svg';
import search from '@/assets/icons/search.svg';
import telegram from '@/assets/icons/telegram.svg';
import whatsapp from '@/assets/icons/whatsapp.svg';
import burger from '@/assets/icons/burger.svg';
import clsx from 'clsx';
import styles from './_styles.module.scss';

export type IconName =
  | 'clock'
  | 'location'
  | 'logo'
  | 'phoneOutgoing'
  | 'save'
  | 'search'
  | 'telegram'
  | 'whatsapp'
  | 'burger';

const icons: {
  [Key in IconName]: React.FC<React.SVGProps<SVGSVGElement>>;
} = {
  clock,
  location,
  logo,
  phoneOutgoing,
  save,
  search,
  telegram,
  whatsapp,
  burger,
};

type IconProps = React.SVGProps<SVGSVGElement> & { name: IconName };

const Icon: React.FC<IconProps> = ({ name, className, ...rest }) => {
  const IconComponent = icons[name];

  return IconComponent ? (
    <IconComponent
      className={clsx(styles.icon, styles[name], className)}
      {...rest}
    />
  ) : null;
};

export default Icon;
