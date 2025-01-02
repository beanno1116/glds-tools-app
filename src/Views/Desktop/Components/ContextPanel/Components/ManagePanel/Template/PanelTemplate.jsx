import styles from './panelTemplate.module.css';
import Body from './Components/Body';
import Nav from './Components/Nav';


const PanelTemplate = ({ children }) => {

  

  return (
    <div className={styles.panel}>
      {children}
    </div>
  );
}

PanelTemplate.Nav = Nav;
PanelTemplate.Body = Body;

export default PanelTemplate;