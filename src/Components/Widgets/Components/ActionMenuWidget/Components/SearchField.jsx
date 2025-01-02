import styles from '../actionMenuWidget.module.css';

const SearchField = ({ ...props }) => {
  return (
    <div className={styles.search_field_wrapper}>
       <input type='search' placeholder='Search' />
    </div>
  );
}

export default SearchField;