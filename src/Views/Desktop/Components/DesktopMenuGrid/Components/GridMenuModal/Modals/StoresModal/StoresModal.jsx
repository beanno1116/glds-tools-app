import { useState } from "react";
import ModalTemplate from "../ModalTemplate/ModalTemplate";


const StoresModal = ({ toggle,...props }) => {
    const [currentView,setCurrentView] = useState("dashboard");

    const renderView = (view) => {
      try {
        switch (view) {
          case "dashboard":
            return (<div>Dashboard view</div>)
          case "stores":
            return (<div>Stores view</div>)
          case "manage":
            return (<div>Manage view</div>)
          case "add":
            return (<div>Add store view</div>)
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

        <ModalTemplate.NavBar.Title text={"Stores"} />

        <ModalTemplate.NavBar.Menu>
          <ModalTemplate.NavBar.Menu.Button action={"dashboard"} active={true} onClick={onNavButtonClick}>Dashboard</ModalTemplate.NavBar.Menu.Button>
          <ModalTemplate.NavBar.Menu.Button action={"stores"} onClick={onNavButtonClick}>Stores</ModalTemplate.NavBar.Menu.Button>
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

export default StoresModal;