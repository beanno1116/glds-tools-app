import styles from '../panelTemplate.module.css';

const Body = ({ style,children }) => {
  return (
    <div className={styles.body} style={style}>
      {children}
    </div>
  );
}

export default Body;