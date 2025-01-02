import FilterSearch from './Components/FilterSearch';
import ViewTypeSelector from './Components/ViewTypeSelector';
import styles from './toolbar.module.css';

const Toolbar = ({ children,...props }) => {
  return (
    <div className={styles.tool_bar}>
      {children}
    </div>
  );
}

Toolbar.FilterSearch = FilterSearch;
Toolbar.ViewTypeSelector = ViewTypeSelector;

export default Toolbar;