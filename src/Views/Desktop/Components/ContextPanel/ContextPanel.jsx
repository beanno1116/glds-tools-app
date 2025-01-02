import { useCallback, useState } from 'react';
import CircleAddIcon from '../../../../assets/Icons/CircleAddIcon';
import GearOutlineIcon from '../../../../assets/Icons/GearOutlineIcon';
import UserIcon from '../../../../assets/Icons/UserIcon';
import NTTPopover, { usePopover,positions } from '../../../../Components/NTTPopover/NTTPopover';
import styles from './contextPanel.module.css';
import ManageUserPanel from './Components/ManagePanel/ManageUser/ManageUserPanel';
import AlertIcon from '../../../../assets/Icons/AlertIcon';
import NotesIcon from '../../../../assets/Icons/NotesIcon';
import MessageIcon from '../../../../assets/Icons/MessageIcon';
import ToolbarAddPopover from '../../../../Components/PopoverMenus/ToolbarAddPopover/ToolbarAddPopover';
import ToolbarUserPopover from '../../../../Components/PopoverMenus/ToolbarUserPopover/ToolbarUserPopover';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import ManagePluginPanel from './Components/ManagePanel/ManagePlugin/ManagePluginPanel';
import ManageSalesPanel from './Components/ManagePanel/ManageSales/ManageSalesPanel';
import ManageTechGuides from './Components/ManagePanel/ManageTechGuides/ManageTechGuides';
import AlertMenuPopover from '../../../../Components/PopoverMenus/AlertMenuPopover/AlertMenuPopover';
import { useGetAlerts } from '../../../../Api/api';
import HomeIcon from '../../../../assets/Icons/HomeIcon';

const ContextPanel = ({ ...props }) => {    
  const auth = useAuth();
  const {isShowing,close,open} = usePopover();
  const {isShowing:addIsShowing,close:addClose,open:addOpen} = usePopover();
  const {isShowing:settingIsShowing,close:settingClose,open:settingOpen} = usePopover();
  const {isShowing:alertIsShowing,close:alertClose,open:alertOpen} = usePopover();
  const {isShowing:notesIsShowing,close:notesClose,open:notesgOpen} = usePopover();
  const {isShowing:messageIsShowing,close:messageClose,open:messageOpen} = usePopover();

  const {status,data} = useGetAlerts("7FE42116A7E1BF33D580E5976B626588");

  const [currentView,setCurrentView] = useState("genInfo");
  const [contextPanelTitle,setContextPanelTitle] = useState("General");
  const navigate = useNavigate();

  const navigateToView = (view) => {
    switch (view) {      
      case "login":
        navigate("/login");
        break;      
    }
  }

  const manageMenuActionEvent = useCallback((e,menuAction) => {
    try {
      switch (menuAction) {
        case "gen":
          setContextPanelTitle("General");
          setCurrentView("genInfo"); 
          addClose();         
          break;          
        case "user":
          setContextPanelTitle("Employees");
          setCurrentView("addUser"); 
          addClose();         
          break;
        case "sale":
          setContextPanelTitle("Manage Sales");
          setCurrentView("sale");
          addClose();
          break;
        case "plugin":
          setContextPanelTitle("Manage Plugins");
          setCurrentView("plugin"); 
          addClose();
          break;
        case "guide":
          setContextPanelTitle("Manage Guides");
          setCurrentView("techGuide");
          addClose();
          break;
        case "tool":
          break;
        case "contact":
          break;      
        default:
          break;
      }
    } catch (error) {
      console.error(error.message);
    }
  },[setCurrentView])

  const userMenuActionEvent = useCallback((e,menuAction) => {
    try {
      switch (menuAction) {
        case "profile":
          setContextPanelTitle("Profile");
          setCurrentView("profile"); 
          close();         
          break;
        case "plugin":
          break;
        case "guide":
          break;
        case "tool":
          break;
        case "logout":
          auth.logoutAction("7FE42116A7E1BF33D580E5976B626588",navigateToView);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error.message);
    }
  },[setCurrentView])

  const currentBodyView = (currentBodyView) => {
    try {
      switch (currentBodyView) {
        case "genInfo":
          return (
            <div style={{textAlign:"center",padding:".5rem 0"}}><h5>General Information</h5><div>Users: 400</div><div>Last Login: 04/20/2024</div><div>Plugins: 47</div><div>Tools: 32</div><div>Notes: 12</div><div>Contacts: 45</div></div>
          )
        case "addUser":          
          return (          
            <ManageUserPanel navigate={(e) => manageMenuActionEvent(e,"gen")}/>
          )
        case "plugin":
          return (
            <ManagePluginPanel />
          )
        case "profile":
          return (
            <div>Profile Panel</div>
          )
        case "sale":
          return (
            <ManageSalesPanel />
          )
        case "techGuide":
          return (
            <ManageTechGuides />
          )
        default:          
          return (
            <div><h5>General Information</h5></div>
          )       
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <section className={styles.context_panel}>

      <nav className={styles.context_panel_toolbar}>

        <div className={styles.context_panel_toolbar_detail}>
          {/* <span><h1>{contextPanelTitle}</h1></span>           */}
        </div>

        <div className={styles.context_panel_toolbar_buttons}>
          <button title="General" className={styles.toolbar_button} type='button' onClick={()=>{}}>                                
            <HomeIcon width={26} height={26} />
          </button>
                
          <NTTPopover close={settingClose} open={settingOpen} show={settingIsShowing} config={{position:positions.BOTTOM_RIGHT}} popover={<div><h1>Settings popover</h1></div>}>
            <button title="App Settings" className={styles.toolbar_button} type='button' onClick={()=>{}}>                    
              <GearOutlineIcon width={26} height={26} />
            </button>
          </NTTPopover>

          <NTTPopover close={addClose} open={addOpen} show={addIsShowing} config={{position:positions.BOTTOM_RIGHT}} popover={<ToolbarAddPopover menuAction={manageMenuActionEvent}/>}>
            <button title='App Management' className={styles.toolbar_button} type='button' onClick={()=>{}}>                    
              <CircleAddIcon width={26} height={26} />
            </button>
          </NTTPopover>

          <NTTPopover close={close} open={open} show={isShowing} config={{position:positions.BOTTOM_RIGHT}} popover={<ToolbarUserPopover menuAction={userMenuActionEvent}/>}> 
            <button title='Profile Management' className={styles.toolbar_button} type='button' onClick={()=>{}}>                    
              <UserIcon width={26} height={26} />
            </button>
          </NTTPopover>

        </div>

      </nav>

      <section className={styles.context_panel_body} >
        {/* <div>Users</div> */}
        {currentBodyView(currentView)}
      </section>


      <section className={styles.context_panel_footer} >

        <NTTPopover close={alertClose} open={alertOpen} show={alertIsShowing} config={{position:positions.TOP_RIGHT}} popover={<AlertMenuPopover alerts={data?.data}/>}> 
          <button className={styles.toolbar_button} type='button' onClick={()=>{}} title='View Alerts'>                
            <AlertIcon width={26} height={26} />
          </button>
        </NTTPopover>

        <NTTPopover close={notesClose} open={notesgOpen} show={notesIsShowing} config={{position:positions.TOP_CENTER}} popover={<div><h1>Notes popover</h1></div>}> 
          <button className={styles.toolbar_button} type='button' onClick={()=>{}} title='Open Notes'>                                
            <NotesIcon width={26} height={26} />
          </button>
        </NTTPopover>

        <NTTPopover close={messageClose} open={messageOpen} show={messageIsShowing} config={{position:positions.TOP_RIGHT}} popover={<div><h1>Messages popover</h1></div>}> 
          <button className={styles.toolbar_button} type='button' onClick={()=>{}} title='View Messages'>                                
            <MessageIcon width={26} height={26} />
          </button>
        </NTTPopover>

      </section>
        
    </section>
  );
}

export default ContextPanel;