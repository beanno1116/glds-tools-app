import { useState } from 'react';
import styles from './managePluginPanel.module.css';



import LargePlusIcon from '../../../../../../../assets/Icons/LargePlusIcon';
import PencilIcon from '../../../../../../../assets/Icons/PencilIcon';
import TrashIcon from '../../../../../../../assets/Icons/TrashIcon';
import AddPluginForm from './Components/AddPluginForm';
import { useGetPlatformOptions } from '../../../../../../../Api/api';


const userLevels = [
  {
    id: 1,
    value: "administrator",
    label: "Administrator"
  },
  {
    id: 2,
    value: "service",
    label: "Service"
  },
  {
    id: 3,
    value: "manager",
    label: "Manager"
  },
  {
    id: 4,
    value: "developer",
    label: "Developer"
  },
]


const ManagePluginPanel = ({ ...props }) => {
  const [currentView,setCurrentView] = useState("add");
  const {status,data} = useGetPlatformOptions();
  // const {status:fetchUserLevelStatus,data:userLevels} = useGetUserLevels();
  

  const navOnButtonClickEvent = (e,action) => {
    // let buttons = document.querySelectorAll(`.${styles.adduser_panel_nav} button`);
    // for (let i = 0; i < buttons.length; i++) {
    //   const button = buttons[i];
    //   button.classList.remove(styles.active);
    // }
    // e.currentTarget.classList.add(styles.active);    
    // try {
    //   switch (action) {
    //     case "add":
    //       setCurrentView("add");
    //       break;
    //     case "edit":
    //       setCurrentView("edit");
    //       break;
    //     case "delete":
    //       setCurrentView("delete");
    //       break;
    //     default:
    //       setCurrentView("add");
    //       break;
    //   }
    // } catch (error) {
    //   console.error(error.message)
    // }
  }

  const renderCurrentView = (currentView) => {
    try {
      switch (currentView) {
        case "add":
          return <AddPluginForm platforms={data?.data}/>
        case "edit":
          return <div></div>
        case "delete":
          return <div></div>
        default:
          return <div>Manage plugin panel</div>
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className={styles.adduser_panel}>

      <nav className={styles.adduser_panel_nav}>        
        <button type='button' className={`${styles.app_icon_button} ${styles.active}`}  onClick={e => navOnButtonClickEvent(e,"add")}>          
          <LargePlusIcon width={20} height={20}/>
          Add
        </button>
        <button type='button' className={styles.app_icon_button} onClick={e => navOnButtonClickEvent(e,"edit")}>          
          <PencilIcon width={20} height={20}/>
          Edit
        </button>
        <button type='button' className={styles.app_icon_button} onClick={e => navOnButtonClickEvent(e,"delete")}>          
          <TrashIcon width={20} height={20}/>
          Delete
        </button>
      </nav>


       <div className={styles.adduser_panel_body}>          
          {renderCurrentView(currentView)}
       </div>
    </div>
  );
}

export default ManagePluginPanel;