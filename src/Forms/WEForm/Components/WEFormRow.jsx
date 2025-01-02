import styles from '../weForm.module.css';

const WEFormRow = ({ children,flex=0,...props }) => {
  return (
    <div className={`${styles.we_form_row} ${flex === 1 ? styles.flex_1_row : ""}`} {...props}>
       {children}
    </div>
  );
}



export default WEFormRow;