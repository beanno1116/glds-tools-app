import { useState } from "react";
import ModalTemplate from "../ModalTemplate/ModalTemplate";
import AddGuideModalView from "./Views/AddGuideModalView/AddGuideModalView";
import GuidesModalView from "./Views/GuidesModalView/GuidesModalView";
import DashboardModalView from "./Views/DashboardModalView/DashboardModalView";


const GuidesModal = ({ toggle,...props }) => {
    const [currentView,setCurrentView] = useState("dashboard");

    const renderView = (view) => {
      try {
        switch (view) {
          case "dashboard":
            return (<DashboardModalView />)
          case "guides":
            return (<GuidesModalView />)
          case "manage":
            return (<div>Manage view</div>)
          case "add":
            return (<AddGuideModalView />)
          default:
            break;
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  
    const onNavButtonClick = (action) => {
      try {
        setCurrentView(action)
      } catch (error) {
        console.error(error.message);
      }
    }
  
  return (
    <ModalTemplate>
      <ModalTemplate.NavBar>

        <ModalTemplate.NavBar.Title text={"Guides"} />

        <ModalTemplate.NavBar.Menu>
          <ModalTemplate.NavBar.Menu.Button action={"dashboard"} active={true} onClick={onNavButtonClick}>Dashboard</ModalTemplate.NavBar.Menu.Button>
          <ModalTemplate.NavBar.Menu.Button action={"guides"} onClick={onNavButtonClick}>Guides</ModalTemplate.NavBar.Menu.Button>
          <ModalTemplate.NavBar.Menu.Button action={"manage"} onClick={onNavButtonClick}>Manage</ModalTemplate.NavBar.Menu.Button>          
          <ModalTemplate.NavBar.Menu.Button action={"add"} onClick={onNavButtonClick}>Add</ModalTemplate.NavBar.Menu.Button>
        </ModalTemplate.NavBar.Menu>

        <ModalTemplate.NavBar.Toggle onClick={toggle}/>

      </ModalTemplate.NavBar>

      <ModalTemplate.Content>
        {renderView(currentView)}
      </ModalTemplate.Content>
    </ModalTemplate>
  );
}

export default GuidesModal;