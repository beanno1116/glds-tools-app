import { useCallback, useState } from 'react';
import styles from './manageUserPanel.module.css';


import AddNewUserForm from './components/AddNewUserForm';
import LargePlusIcon from '../../../../../../../assets/Icons/LargePlusIcon';
import PencilIcon from '../../../../../../../assets/Icons/PencilIcon';
import TrashIcon from '../../../../../../../assets/Icons/TrashIcon';
import EditUserForm from './components/EditUserForm';
import DeleteUserForm from './components/DeleteUserForm';
import { useGetUsers } from '../../../../../../../Api/api';
import PanelTemplate from '../Template/PanelTemplate';
import ListViewIcon from '../../../../../../../assets/Icons/ListViewIcon';
import SearchList from '../../../../../../../Components/SearchList/SearchList';
import usePanel from '../../../Hooks/usePanel';
import HomeIcon from '../../../../../../../assets/Icons/HomeIcon';
import WEModal from '../../../../../../../Components/WEModal/WEModal';
import useModal from '../../../../../../../Components/WEModal/hooks/useModal';
import UserModal from '../../../../../../../Modals/UserModal/UserModal';
import UserListItem from '../../../../../../../Components/SearchList/Components/UserListItem';

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



const ManageUserPanel = ({ navigate,...props }) => {  
  const {currentView,updateView} = usePanel();
  const {modalState,toggleModal} = useModal();  
  const {status,data} = useGetUsers();
  const [selectedUser,setSelectedUser] = useState(-1);

  const onNavButtonClick = (e,action) => {
    try {
      switch (action) {
        case "home":
          navigate(e,)
          break;
        case "add":
          // updateView("add");
          toggleModal();
          break;
        case "edit":
          updateView("edit");
          break;
        case "delete":
          updateView("delete");
          break;
        default:
          updateView("add");
          break;
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const renderCurrentView = (currentView) => {
    try {
      switch (currentView) {
        case "add":          
          return <AddNewUserForm />    
        case "edit":
          return <EditUserForm users={data.data} />
        case "delete":
          return <DeleteUserForm users={data.data} />
        default:
          return <AddNewUserForm />    
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const onListItemClick = (e,action=undefined) => {
    try {
      if (action){
        
      }
      let userId = e.currentTarget.dataset.value
      
      setSelectedUser(e.currentTarget.dataset.value);
    } catch (error) {
      console.error(`[ManageUserPanel]onListItemClick Error: ${error.message}`);
    }
  }

  const useModalAction = useCallback((e,user) => {
    if (user){
      console.log("");
    }
    toggleModal();
  },[toggleModal])

  return (
    <PanelTemplate>

      <div><h1>Employees</h1></div>

      {/* <PanelTemplate.Nav>

        <PanelTemplate.Nav.Button icon={<HomeIcon width={20} height={20}/>} action={"home"} onClick={navigate} />
        <PanelTemplate.Nav.Button icon={<LargePlusIcon width={20} height={20}/>} action={"add"} onClick={onNavButtonClick} />
        <PanelTemplate.Nav.Button icon={<PencilIcon width={20} height={20}/>} action={"edit"} onClick={onNavButtonClick} />
        <PanelTemplate.Nav.Button icon={<TrashIcon width={20} height={20}/>} action={"delete"} onClick={onNavButtonClick} />

      </PanelTemplate.Nav> */}

      <PanelTemplate.Body>

        <SearchList>

          {status.isLoading && (<div>Loading....</div>)}    

          {!status.isLoading && data.map(user => {
            return (
              <SearchList.UserListItem 
                id={user.id} 
                key={user.id} 
                name={`${user.firstName} ${user.lastName}`} 
                title={user.title} 
                type={user.type} 
                onClick={onListItemClick}
              />
            )
          })}

        </SearchList>  

      </PanelTemplate.Body>

      <WEModal config={{showCloseButton:false}} style={{padding:"2rem"}} isOpen={modalState} toggle={toggleModal}>
            
        <UserModal modalAction={useModalAction} view={"add"}/>
            
      </WEModal>

    </PanelTemplate>
  );
}

export default ManageUserPanel;