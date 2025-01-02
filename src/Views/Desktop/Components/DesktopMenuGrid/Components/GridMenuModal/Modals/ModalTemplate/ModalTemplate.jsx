import ContentView from './Components/ContentView/ContentView';
import NavigationView from './Components/NavigationView/NavigationView';
import styles from './modalTemplate.module.css';

const ModalTemplate = ({ children,...props }) => {
  return (
    <div className={styles.modal_template}>
      {children}
    </div>
  );
}

ModalTemplate.NavBar = NavigationView;
ModalTemplate.Content = ContentView;

export default ModalTemplate;