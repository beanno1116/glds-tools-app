import styles from './toolbar.module.css';

const Toolbar = ({ location }) => {
  return (
    <nav className={styles.desktop_toolbar}>

      <span className={styles.desktop_tb_logo_section}>
        <h1 className={styles.desktop_tb_logo_text}>GLDS</h1>
        <h3 className={styles.desktop_tb_subtext}>Tools</h3>
        <h6 className={styles.desktop_tb_subtext}>- {location}</h6>
      </span>

      <span className={styles.desktop_tb_searchfield_section}>
        <input type='search' placeholder='Search' />
      </span>
      
    </nav>
  );
}

export default Toolbar;