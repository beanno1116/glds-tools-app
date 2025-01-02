import { useState } from 'react';
import styles from './userModal.module.css';
import AddUserForm from './Components/AddUserForm';

const UserModal = ({ modalAction,view,...props }) => {
  const [currentView,setCurrentView] = useState("add");

  const renderCurrentModalView = (view) => {
    try {
      switch (view) {
        case "add":
          return <AddUserForm onSubmit={modalAction} />                
        default:
          break;
      }
    } catch (error) {
      console.error(`[UserModal]-Error: ${error.message}`);
    }
  }

  return (
    <div className={styles.user_modal}>       
       {renderCurrentModalView(view)}
    </div>
  );
}

export default UserModal;