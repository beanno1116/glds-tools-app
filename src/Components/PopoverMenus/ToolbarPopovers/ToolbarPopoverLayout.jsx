import IconListItem from './components/IconListItem';
import Loading from './components/Loading';
import MenuList from './components/MenuList';
import Title from './components/Title';
import styles from './toolbarPopoverLayout.module.css';

const ToolbarPopoverLayout = ({ children }) => {
  return (
    <div className={styles.toolbar_po_menu}>
      {children}
    </div>
  );
}

ToolbarPopoverLayout.Title = Title;
ToolbarPopoverLayout.MenuList = MenuList;
ToolbarPopoverLayout.IconListItem = IconListItem;
ToolbarPopoverLayout.Loading = Loading;

export default ToolbarPopoverLayout;