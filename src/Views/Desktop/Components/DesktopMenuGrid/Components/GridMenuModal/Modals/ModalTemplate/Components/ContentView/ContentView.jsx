import styles from '../../modalTemplate.module.css';

const ContentView = ({ children,...props }) => {
  return (
    <div className={styles.modal_body}>
      {children}
    </div>
  );
}

export default ContentView;