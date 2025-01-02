import styles from '../guidesModalView.module.css';

const Content = ({ children,...props }) => {
  return (
    <div className={styles.content}>
      <div className={styles.grid_view}>
        {children}
      </div>
    </div>
  );
}

export default Content;