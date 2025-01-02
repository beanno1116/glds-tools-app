import AlertIcon from '../../../../assets/Icons/AlertIcon';
import MessageIcon from '../../../../assets/Icons/MessageIcon';
import NotesIcon from '../../../../assets/Icons/NotesIcon';
import UserIcon from '../../../../assets/Icons/UserIcon';
import AlertMenuPopover from '../../../../Components/PopoverMenus/AlertMenuPopover/AlertMenuPopover';
import ToolbarUserPopover from '../../../../Components/PopoverMenus/ToolbarUserPopover/ToolbarUserPopover';
import useModal from '../../../../Components/WEModal/hooks/useModal';
import WEModal from '../../../../Components/WEModal/WEModal';
import SettingsModal from '../../../../Modals/SettingsModal/SettingsModal';
import ToolbarButton from './Components/ToolbarButton';
import styles from './toolbar.module.css';

const TB_ICON_SIZE = 20;

const Toolbar = ({ location }) => {
  const {modalState,toggleModal} = useModal();

  const menuItemClickEvent = (e,action) => {
    let tmp = action;
    toggleModal();    
    console.log();
  }
  
  return (
    <nav className={styles.desktop_toolbar}>

      <div className={styles.logo_section}>
        <span className={styles.desktop_tb_logo_section}>
          <h1 className={styles.desktop_tb_logo_text}>GLDS</h1>
          <h3 className={styles.desktop_tb_subtext}>Tools</h3>        
        </span>
      </div>

      <div className={styles.nav_section}>

        <ToolbarButton icon={<NotesIcon width={TB_ICON_SIZE} height={TB_ICON_SIZE} />} popover={<div>Notes Popover</div>}></ToolbarButton>
        <ToolbarButton icon={<MessageIcon width={TB_ICON_SIZE} height={TB_ICON_SIZE} />} popover={<div>Messages Popover</div>}></ToolbarButton>
        <ToolbarButton icon={<AlertIcon width={TB_ICON_SIZE} height={TB_ICON_SIZE} />} popover={<AlertMenuPopover />}></ToolbarButton>
        <ToolbarButton icon={<UserIcon width={TB_ICON_SIZE} height={TB_ICON_SIZE} />} popover={<ToolbarUserPopover menuAction={menuItemClickEvent}/>}></ToolbarButton>
      
      </div>

      <WEModal config={{showCloseButton:false}}  isOpen={modalState} toggle={toggleModal}>

        <SettingsModal toggle={toggleModal}/>
        {/* <GridMenuModal action={currentModal} toggleModal={toggleModal}/> */}
        

      </WEModal>
    
    </nav>
  );
}

export default Toolbar;