import styles from '../../../modalTemplate.module.css';

const Title = ({ text }) => {
  return (
    <div className={styles.modal_nav_title}>
      <h4>{text}</h4>
    </div>
  );
}

export default Title;