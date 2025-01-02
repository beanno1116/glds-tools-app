import styles from '../toolbarPopoverLayout.module.css'

const Loading = () => {
  return (
    <div className={styles.toolbar_po_menu_loading}>
       <div className={styles.toolbar_po_menu_loader}></div>
    </div>
  );
}

export default Loading;