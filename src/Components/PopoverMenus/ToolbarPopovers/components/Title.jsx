import styles from '../toolbarPopoverLayout.module.css'

const Title = ({ title }) => {
  return (
    <div className={styles.toolbar_po_menu_title}>
      <h5>{title}</h5>
    </div>
  );
}

export default Title;