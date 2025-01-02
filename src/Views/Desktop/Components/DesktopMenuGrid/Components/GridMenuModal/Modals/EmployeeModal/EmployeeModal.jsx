import { useState } from 'react';
import CloseIcon from '../../../../../../../../assets/Icons/CloseIcon';
import styles from './employeeModal.module.css';
import ModalDashboard from './Components/ModalDashboard';
import WEButton from '../../../../../../../../Components/WEButton/WEButton';
import ManageUserModal from './Components/ManageUserModal';
import ModalTemplate from '../ModalTemplate/ModalTemplate';
import AddEmployeeModalView from './Views/AddEmployeeModalView/AddEmployeeModalView';

const CLOSE_ICON_SIZE = 20;

const EmployeeModal = ({ toggle,...props }) => {
  const [currentView,setCurrentView] = useState("dashboard");

  const onCloseButtonClick = (e) => {
    toggle();
  }

  const onNavButtonClick = (action) => {
    try {
      setCurrentView(action)
    } catch (error) {
      console.error(error.message);
    }
  }

  const renderView = (view) => {
    try {
      switch (view) {
        case "dashboard":
          return (<div>Employees dashboard view</div>)
        case "employees":
          return (<div>Employees view</div>)
        case "manage":
          return (<div>Manage employee view</div>)
        case "add":
          return (<AddEmployeeModalView />)     
        default:
          break;
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <ModalTemplate>
      <ModalTemplate.NavBar>

        <ModalTemplate.NavBar.Title text={"Employee"} />

        <ModalTemplate.NavBar.Menu>
          <ModalTemplate.NavBar.Menu.Button action={"dashboard"} active={true} onClick={onNavButtonClick}>Dashboard</ModalTemplate.NavBar.Menu.Button>
          <ModalTemplate.NavBar.Menu.Button action={"employees"} onClick={onNavButtonClick}>Employees</ModalTemplate.NavBar.Menu.Button>
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

export default EmployeeModal;