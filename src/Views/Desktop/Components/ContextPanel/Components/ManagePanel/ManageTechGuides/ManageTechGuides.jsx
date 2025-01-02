import { useGetUsers } from "../../../../../../../Api/api";
import LargePlusIcon from "../../../../../../../assets/Icons/LargePlusIcon";
import ListViewIcon from "../../../../../../../assets/Icons/ListViewIcon";
import PencilIcon from "../../../../../../../assets/Icons/PencilIcon";
import TrashIcon from "../../../../../../../assets/Icons/TrashIcon";
import usePanel from "../../../Hooks/usePanel";
import PanelTemplate from "../Template/PanelTemplate";
import AddTechGuideForm from "./Components/AddTechGuideForm";
import TechGuideList from "./Components/TechGuideList/TechGuideList";



const ManageTechGuides = ({ ...props }) => {    
  const {currentView,updateView} = usePanel("list");
  

  const onNavButtonClick = (e,action) => {
    try {
      switch (action) {
        case "list":
          updateView("list");
          break;
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
        case "list":          
          return <TechGuideList />
        case "add":          
          return <AddTechGuideForm />
        case "edit":
          return <div>Edit Tech Guide Form</div>
        case "delete":
          return <div>Delete Tech Guide Form</div>
        default:
          return <div>Tech Guide List</div>
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (    
    <PanelTemplate>

      <PanelTemplate.Nav>
        <PanelTemplate.Nav.Button className={"active"} icon={<ListViewIcon width={20} height={20} />} action={"list"} onClick={onNavButtonClick} />
        <PanelTemplate.Nav.Button icon={<LargePlusIcon width={20} height={20} />} action={"add"} onClick={onNavButtonClick} />
        <PanelTemplate.Nav.Button icon={<PencilIcon width={20} height={20} />} action={"edit"} onClick={onNavButtonClick} />
        <PanelTemplate.Nav.Button icon={<TrashIcon width={20} height={20} />} action={"delete"} onClick={onNavButtonClick} />
      </PanelTemplate.Nav>

      <PanelTemplate.Body>
        {renderCurrentView(currentView)}
      </PanelTemplate.Body>


    </PanelTemplate>
  );
}

export default ManageTechGuides;