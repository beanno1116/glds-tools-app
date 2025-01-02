import { useState } from 'react';
import DashboardModal from './Components/DashboardModal';
import ModalTemplate from '../ModalTemplate/ModalTemplate';


const InventoryModal = ({ toggle,...props }) => {
  const [currentView,setCurrentView] = useState("dashboard");

  const renderView = (view) => {
    try {
      switch (view) {
        case "dashboard":
          return (<DashboardModal />)
        case "manage":
          return (<div>Manage inventory view</div>)
        case "assign":
          return (<div>Assign inventory view</div>)
        case "receive":
          return (<div>Receive inventory view</div>)
        case "reports":
          return (<div>Inventory reports view</div>)
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

        <ModalTemplate.NavBar.Title text={"Inventory Management"} />

        <ModalTemplate.NavBar.Menu>
          <ModalTemplate.NavBar.Menu.Button action={"dashboard"} active={true} onClick={onNavButtonClick}>Dashboard</ModalTemplate.NavBar.Menu.Button>
          <ModalTemplate.NavBar.Menu.Button action={"receive"} onClick={onNavButtonClick}>Receive</ModalTemplate.NavBar.Menu.Button>
          <ModalTemplate.NavBar.Menu.Button action={"assign"} onClick={onNavButtonClick}>Assign</ModalTemplate.NavBar.Menu.Button>
          <ModalTemplate.NavBar.Menu.Button action={"manage"} onClick={onNavButtonClick}>Manage</ModalTemplate.NavBar.Menu.Button>          
          <ModalTemplate.NavBar.Menu.Button action={"reports"} onClick={onNavButtonClick}>Reports</ModalTemplate.NavBar.Menu.Button>
        </ModalTemplate.NavBar.Menu>

        <ModalTemplate.NavBar.Toggle onClick={toggle}/>

      </ModalTemplate.NavBar>

      <ModalTemplate.Content>
        {renderView(currentView)}
      </ModalTemplate.Content>

    </ModalTemplate>
  );
}

export default InventoryModal;