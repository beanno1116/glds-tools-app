import GridIcon from '../../../../../../../../../../../../../assets/Icons/GridIcon';
import ListViewIcon from '../../../../../../../../../../../../../assets/Icons/ListViewIcon';
import styles from '../toolbar.module.css';

const ViewTypeSelector = ({ ...props }) => {
  return (
    <div className={styles.tool_bar_view}>
      <button className={styles.tool_bar_view_toggle_btn}><GridIcon width={20} height={20} /></button>
      <button className={styles.tool_bar_view_toggle_btn}><ListViewIcon width={20} height={20} /></button>
    </div>
  );
}

export default ViewTypeSelector;