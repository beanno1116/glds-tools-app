import styles from '../toolbarPopoverLayout.module.css'

const MenuList = ({ children }) => {
  return (
    <div className={styles.toolbar_po_menu_list}>
        <ul className={styles.toolbar_po_menu_ul} role='list'>
          {children}
        </ul>
    </div>
  );
}

export default MenuList;