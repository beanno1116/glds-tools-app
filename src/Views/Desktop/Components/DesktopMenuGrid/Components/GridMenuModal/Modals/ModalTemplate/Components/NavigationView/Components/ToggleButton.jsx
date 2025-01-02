import CloseIcon from '../../../../../../../../../../../assets/Icons/CloseIcon';
import styles from '../../../modalTemplate.module.css';

const CLOSE_ICON_SIZE = 20;

const ToggleButton = ({ onClick }) => {

  const onClickEvent = (e) => {
    try {
      if (onClick){
        console.log(`Modal Template Navigation bar toggle button clicked`);
        onClick();
        return;
      }
      throw new Error("onClick prop is undefined or null");
    } catch (error) {
      console.error(`[ERROR] [COMP:ToggleButton] [EVT:onClick] - ${error.message}`);
    }
  }

  return (
    <div className={styles.modal_nav_button}>
      <div className={styles.modal_close_btn_wrapper}>
        <button className={styles.modal_close_btn} type='button' onClick={onClickEvent}><CloseIcon width={CLOSE_ICON_SIZE} height={CLOSE_ICON_SIZE} /></button>
      </div>
    </div>
  );
}

export default ToggleButton;