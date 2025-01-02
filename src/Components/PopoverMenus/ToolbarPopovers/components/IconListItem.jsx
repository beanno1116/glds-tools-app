import styles from '../toolbarPopoverLayout.module.css'

const Icon = ({icon}) => {
  return (
    <span className={styles.toolbar_po_menu_list_item_icon}>{icon}</span>
  )
}

const Text = ({text}) => {
  return (
    <span className={styles.toolbar_po_menu_list_item_text}>{text}</span>
  )
}

const IconListItem = ({ onClick,children,...props }) => {
  return (
    <li className={styles.toolbar_po_menu_list_item} onClick={onClick}>
      {children}         
    </li>
  );
}

IconListItem.Icon = Icon;
IconListItem.Text = Text;

export default IconListItem;