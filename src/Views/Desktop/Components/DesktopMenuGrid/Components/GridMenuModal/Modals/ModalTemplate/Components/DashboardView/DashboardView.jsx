import styles from '../../modalTemplate.module.css';

const Row = ({children,flex=0}) => {
  return (
    <div className={`${styles.dash_view_row} ${flex === 1 ? styles.flex_1 : ""}`}>
      {children}
    </div>
  )
}

const DashboardView = ({ children,...props }) => {
  return (
    <div className={styles.dash_view}>
      {children}
    </div>
  );
}

DashboardView.Row = Row;

export default DashboardView;