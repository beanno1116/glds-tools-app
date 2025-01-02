import styles from './listViewWidget.module.css';
import ListViewWidgetItem from './Components/ListViewWidgetItem';
import FilterSquareIcon from '../../../../../../../../../../assets/Icons/FilterSquareIcon';
import WEButton from '../../../../../../../../../../Components/WEButton/WEButton';

const ListViewWidget = ({ closeModal,children,heading,showButton=true,...props }) => {


  const onClick = (e) => {
    e.stopPropagation();    
    closeModal();
  }

  return (
    <div className={styles.list_view_widget}>

      <div className={styles.list_view_widget_heading}>
        <h2>{heading}</h2>
      </div>

      <div className={styles.list_view_widget_toolbar}>
        <div className={styles.toolbar_buttons}>
          <FilterSquareIcon width={30} height={30} />
        </div>
        <div className={styles.toolbar_search}>
          <input type='search' placeholder='Search' style={{width:"100%"}}/>
        </div>
      </div>

      <div className={styles.plugin_modal_list_wrapper}>

            <ul className={styles.plugin_modal_list}>
              {children}      
            </ul>
      </div>

      <div>
        {showButton && (
          <WEButton onClick={onClick} data-action={""} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem"}} type='solid'>
            Done
          </WEButton>
        )}
      </div>

    </div>
  );
}

ListViewWidget.ListItem = ListViewWidgetItem;

export default ListViewWidget;