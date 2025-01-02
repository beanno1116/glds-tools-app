import styles from '../../modalTemplate.module.css';

const SalesmanTotal = ({label,value}) => {
  return (
    <span className={styles.sales_total_row}>
      <label>{label}:</label>
      <span>${value}</span>
    </span>)
}

const WidgetHeading = ({heading}) => {
  return (
    <div className={styles.sales_total_widget_heading}>
      <h4>{heading}</h4>
    </div>
  )
}

const TopSalesmanWidget = ({ children,...props }) => {
  return (
    <div className={`${styles.widget} ${styles.top_salesmand_widget}`}>
      <WidgetHeading heading={"Sales Leaders"} />      
      {children}            
    </div>
  );
}

TopSalesmanWidget.SalesmanTotal = SalesmanTotal;

export default TopSalesmanWidget;