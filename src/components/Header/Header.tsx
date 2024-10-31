import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.link}>ToDo</a>
      </div>
    </header>
  );
};
