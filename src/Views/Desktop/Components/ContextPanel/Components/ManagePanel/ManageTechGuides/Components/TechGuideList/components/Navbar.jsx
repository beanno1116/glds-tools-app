import styles from '../../../manageTechGuides.module.css';

const ButtonSection = ({children}) => {
  return (
    <div className={styles.list_nav_buttons}>
      {children}
    </div>
  )
}

const NavButton = ({children}) => {
  return ( 
    <>
    {children}
    </>    
  )
}

const Navbar = ({ children,...props }) => {
  return (
    <nav className={styles.list_nav}>
      {children}
    </nav>
  );
}

const NavbarSearchField = ({ children,...props }) => {
  return (
    <div className={styles.list_nav_search}>
      {children}
    </div>
  );
}

Navbar.Buttons = ButtonSection;
Navbar.NavButton = NavButton;
Navbar.SearchField = NavbarSearchField;

export default Navbar;