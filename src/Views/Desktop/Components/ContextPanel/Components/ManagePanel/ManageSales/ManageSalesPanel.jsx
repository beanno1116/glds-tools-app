import { useGetUsers } from '../../../../../../../Api/api';
import LargePlusIcon from '../../../../../../../assets/Icons/LargePlusIcon';
import PencilIcon from '../../../../../../../assets/Icons/PencilIcon';
import TrashIcon from '../../../../../../../assets/Icons/TrashIcon';
import usePanel from '../../../Hooks/usePanel';
import PanelTemplate from '../Template/PanelTemplate';
import AddSaleForm from './Components/AddSaleForm';
import styles from './managerSalesPanel.module.css';

const ManageSalesPanel = ({ ...props }) => {
  const {status,data} = useGetUsers();
  const {currentView,updateView} = usePanel();

  const onNavButtonClick = (e,action) => {
    try {
      switch (action) {
        case "add":
          updateView("add");
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
          return <AddSaleForm users={data.data}/>
        case "edit":
          return <div>Edit Sale Form</div>
        case "delete":
          return <div>Delete Sale Form</div>
        default:
          return <div>Add Sale Form</div>
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <PanelTemplate>

      <PanelTemplate.Nav>                
        <PanelTemplate.Nav.Button className={"active"} icon={<LargePlusIcon width={20} height={20} />} action={"add"} onClick={onNavButtonClick} />
        <PanelTemplate.Nav.Button icon={<PencilIcon width={20} height={20} />} action={"edit"} onClick={onNavButtonClick} />
        <PanelTemplate.Nav.Button icon={<TrashIcon width={20} height={20} />} action={"delete"} onClick={onNavButtonClick} />
      </PanelTemplate.Nav>

      <PanelTemplate.Body>
        {renderCurrentView(currentView)}
      </PanelTemplate.Body>


    </PanelTemplate>
  );
}

export default ManageSalesPanel;