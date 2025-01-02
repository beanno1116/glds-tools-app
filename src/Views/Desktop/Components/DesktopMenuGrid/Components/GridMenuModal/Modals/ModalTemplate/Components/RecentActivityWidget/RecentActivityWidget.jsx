import styles from '../../modalTemplate.module.css';

const Activity = ({label,value}) => {
  return (
    <span className={styles.sales_total_row}>
      <label>{label}</label>
      <span>{value}</span>
    </span>)
}

const WidgetHeading = ({heading}) => {
  return (
    <div className={styles.sales_total_widget_heading}>
      <h4>{heading}</h4>
    </div>
  )
}

const RecentActivityWidget = ({ children,...props }) => {
  return (
    <div className={`${styles.widget} ${styles.recent_activity_widget}`}>
      <WidgetHeading heading={"Recent Activity"} />      
      {children}            
    </div>
  );
}

RecentActivityWidget.Activity = Activity;

export default RecentActivityWidget;