import styles from '../dashboardModalView.module.css';

const DashboardRow = ({ children,...props }) => {
  return (
    <div className={styles.row}>
      {children}
    </div>
  );
}

export default DashboardRow;