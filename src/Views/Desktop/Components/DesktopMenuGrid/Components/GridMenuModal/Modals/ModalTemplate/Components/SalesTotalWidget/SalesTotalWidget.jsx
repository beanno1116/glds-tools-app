import styles from '../../modalTemplate.module.css';

const SalesTotal = ({color="blue",label,value}) => {
  return (
    <span className={styles.sales_total_row}>
      <label className={styles[color]}>{label}:</label>
      <span>${value}</span>
    </span>)
}

const WidgetHeading = ({heading}) => {
  return (
    <div className={`${styles.sales_total_widget_heading}`}>
      <h4>{heading}</h4>
    </div>
  )
}


const SalesTotalWidget = ({ children,...props }) => {
  return (
    <div className={`${styles.widget} ${styles.sales_total_widget}`}>
      <WidgetHeading heading={"Total Sales"} />      
      {children}            
    </div>
  );
}

SalesTotalWidget.SalesTotal = SalesTotal;

export default SalesTotalWidget;