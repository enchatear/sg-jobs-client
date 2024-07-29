import styles from './page.module.scss';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Field from '@/components/Field';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.test_ui}>
        <Icon name="clock" />
        <Button icon="search">SEARCH</Button>
        <Field title="Field test" />
      </div>
    </main>
  );
}
