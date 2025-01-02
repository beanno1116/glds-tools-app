import styles from './gridMenuModal.module.css';
import CustomersModal from './Modals/CustomersModal/CustomersModal';
import EmployeeModal from './Modals/EmployeeModal/EmployeeModal';
import GuidesModal from './Modals/GuidesModal/GuidesModal';
import InventoryModal from './Modals/InventoryModal/InventoryModal';
import PluginModal from './Modals/PluginModal/PluginModal';
import SalesModal from './Modals/SalesModal/SalesModal';
import StoresModal from './Modals/StoresModal/StoresModal';


// import PluginModal from './Modals/PluginModal';

const GridMenuModal = ({ action,toggleModal,...props }) => {

  const renderModalContent = (action) => {    
    try {
      switch (action) {
        case "plugins":          
          return <PluginModal toggle={toggleModal} />
        case "sale":
          return <SalesModal toggle={toggleModal} />          
        case "employees":
          return <EmployeeModal toggle={toggleModal} />
        case "inventory":
          return <InventoryModal toggle={toggleModal} />
        case "customers":          
          return <CustomersModal toggle={toggleModal} />
        case "stores":
          return <StoresModal toggle={toggleModal} />
        case "guides":
          return <GuidesModal toggle={toggleModal} />
        default:
          break;
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className={styles.grid_menu_modal}>
       {renderModalContent(action)}
    </div>
  );
}

export default GridMenuModal;