import styles from '../../modalTemplate.module.css';
import Nav from './Components/Nav';
import Title from './Components/Title';
import ToggleButton from './Components/ToggleButton';

const NavigationView = ({ children }) => {
  return (
    <nav className={styles.modal_nav}>
      {children}
    </nav>
  );
}

NavigationView.Title = Title;
NavigationView.Menu = Nav;
NavigationView.Toggle = ToggleButton;

export default NavigationView;