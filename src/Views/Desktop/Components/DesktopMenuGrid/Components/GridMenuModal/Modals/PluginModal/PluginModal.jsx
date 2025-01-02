import { useState } from 'react';
import ModalTemplate from '../ModalTemplate/ModalTemplate';
import InstallModalView from './Views/InstallModalView/InstallModalView';
import ManageModalView from './Views/ManageModalView/ManageModalView';


const PluginModal = ({ toggle,...props }) => {  
  const [currentView,setCurrentView] = useState("install");


  const renderView = (view) => {
    try {
      switch (view) {
        case "dashboard":
          return (<div>Dashboard view</div>)
        case "install":
          return (<InstallModalView />)
        case "plugins":
          return (<div>Plugins view</div>)
        case "add":
          return (<ManageModalView />)
        default:
          return (<div>Dashboard view</div>)
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

        <ModalTemplate.NavBar.Title text={"Plugins"} />

        <ModalTemplate.NavBar.Menu>
          <ModalTemplate.NavBar.Menu.Button action={"dashboard"} onClick={onNavButtonClick}>Dashboard</ModalTemplate.NavBar.Menu.Button>
          <ModalTemplate.NavBar.Menu.Button action={"install"} active={true} onClick={onNavButtonClick}>Install</ModalTemplate.NavBar.Menu.Button>
          <ModalTemplate.NavBar.Menu.Button action={"plugins"} onClick={onNavButtonClick}>Plugins</ModalTemplate.NavBar.Menu.Button>
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

export default PluginModal;