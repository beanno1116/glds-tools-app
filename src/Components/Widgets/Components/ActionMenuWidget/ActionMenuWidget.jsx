import styles from './actionMenuWidget.module.css';
import GridButton from './Components/GridButton';
import SearchField from './Components/SearchField';


const MenuGrid = ({children}) => {
  return (
    <div className={styles.menu_button_grid}>
      {children}
    </div>
  )
}

const ActionMenuWidget = ({ heading,children,...props }) => {
  return (
    <div className={styles.action_menu_widget} style={props.style}>
      <div className={styles.header}>
        <h6>{heading}</h6>
      </div>
      <div className={styles.menu}>
        {children}
      </div>
    </div>
  );
}

ActionMenuWidget.MenuGrid = MenuGrid;
ActionMenuWidget.GridButton = GridButton;
ActionMenuWidget.SearchField = SearchField;

export default ActionMenuWidget;