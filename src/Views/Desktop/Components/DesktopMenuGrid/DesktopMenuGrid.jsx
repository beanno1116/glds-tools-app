import DesktopMenuGridItem from './Components/DesktopMenuGridItem';
import styles from './desktopMenuGrid.module.css';

const DesktopMenuGrid = ({ children }) => {
  return (
    <section className={styles.desktop_menu_grid}>
      {children}
    </section>
  );
}

DesktopMenuGrid.GridItem = DesktopMenuGridItem;

export default DesktopMenuGrid;