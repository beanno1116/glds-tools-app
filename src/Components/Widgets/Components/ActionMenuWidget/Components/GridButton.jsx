import styles from '../actionMenuWidget.module.css';

const GridButton = ({ children,...props }) => {
  return (
    <button className={styles.grid_button} type='button'>
      {children}
    </button>
  );
}

export default GridButton;