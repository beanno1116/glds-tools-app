import NTTPopover, { usePopover,positions } from '../../../../../Components/NTTPopover/NTTPopover';
import styles from '../toolbar.module.css';

const ToolbarButton = ({ icon,popover,...props }) => {
  const {isShowing,close,open} = usePopover();

  return (
    <NTTPopover close={close} open={open} show={isShowing} config={{position:positions.BOTTOM_RIGHT}} popover={popover}> 
    <button className={styles.toolbar_button} type='button' onClick={()=>{}} title='View Alerts'>  
      {icon}      
    </button>
  </NTTPopover>
  );
}

export default ToolbarButton;