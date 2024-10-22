import { useAuth } from '../../hooks/useAuth';
import Greeting from './Components/Greeting/Greeting';
import Toolbar from './Components/Toolbar/Toolbar';
import styles from './desktop.module.css';

const Desktop = ({ ...props }) => {
  const auth = useAuth();
  return (
    <div className={styles.desktop_container}>

      
      <section className={styles.desktop_grid}>

        <section className={styles.desktop_content_griditem}>

          <Toolbar location={"Dashboard"} />
        
          <Greeting name={"Ben"} />


          <section className={styles.desktop_menu_grid}></section>

        </section>


        <section className={styles.desktop_sidemenu_griditem}>

          <section className={styles.desktop_sidemenu}>
            <section>Active view</section>
            <section>Body</section>
            <section>Bottom nav</section>
          </section>

        </section>

      </section>

      <section className={styles.desktop_statusbar}></section>
       
    </div>
  );
}

export default Desktop;