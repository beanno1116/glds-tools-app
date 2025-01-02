
import { useGetMenuItems } from '../../../Api/api';
import AddContactIcon from '../../../assets/Icons/AddContactIcon';
import AddFileIcon from '../../../assets/Icons/AddFileIcon';
import AddUserIcon from '../../../assets/Icons/AddUserIcon';
import DollarIcon from '../../../assets/Icons/DollarIcon';
import PluginIcon from '../../../assets/Icons/PluginIcon';
import TileIcon from '../../../assets/Icons/TileIcon';
import ToolIcon from '../../../assets/Icons/ToolIcon';
import UserEditIcon from '../../../assets/Icons/UserEditIcon';
import MetaDataIcon from '../../../assets/Icons/MetaDataIcon';
import ToolbarPopoverLayout from '../ToolbarPopovers/ToolbarPopoverLayout';


const ICON_SIZE = 24;

const menuItemIcon = {
  user: <AddUserIcon width={ICON_SIZE} height={ICON_SIZE} />,
  plugin: <PluginIcon width={ICON_SIZE} height={ICON_SIZE} />,
  guide: <AddFileIcon width={ICON_SIZE} height={ICON_SIZE} />,
  tool: <ToolIcon width={ICON_SIZE} height={ICON_SIZE} />,
  contact: <AddContactIcon width={ICON_SIZE} height={ICON_SIZE} />,
  tile: <TileIcon width={ICON_SIZE} height={ICON_SIZE} />,
  sale: <DollarIcon width={ICON_SIZE} height={ICON_SIZE} />,    
  meta: <MetaDataIcon width={ICON_SIZE} height={ICON_SIZE} /> ,
  customer: <UserEditIcon width={ICON_SIZE} height={ICON_SIZE} />
}




const ToolbarAddPopover = ({ menuAction }) => {  
  const {status,data} = useGetMenuItems("contextPanelManageTB");
  
 

  return (
    <ToolbarPopoverLayout>
      <ToolbarPopoverLayout.Title title={"Manage"} />
      <ToolbarPopoverLayout.MenuList>

        {status.isLoading ? (<ToolbarPopoverLayout.Loading />) : null}
          
        {!status.isLoading && data.data.map(menuItem => {
          return (
            <ToolbarPopoverLayout.IconListItem key={menuItem.id} onClick={e => menuAction(e,menuItem.action)}>
              <ToolbarPopoverLayout.IconListItem.Icon icon={menuItemIcon[menuItem.action]} />
              <ToolbarPopoverLayout.IconListItem.Text text={menuItem.title} />
            </ToolbarPopoverLayout.IconListItem>
          )
        })}

      </ToolbarPopoverLayout.MenuList>
    </ToolbarPopoverLayout>

  );
}

export default ToolbarAddPopover;