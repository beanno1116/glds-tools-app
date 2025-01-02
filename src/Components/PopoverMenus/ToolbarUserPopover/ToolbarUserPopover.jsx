
import { useGetMenuItems } from '../../../Api/api';
import ToolbarPopoverLayout from '../ToolbarPopovers/ToolbarPopoverLayout';
import PowerIcon from '../../../assets/Icons/PowerIcon';
import PersonSquareIcon from '../../../assets/Icons/PersonSquareIcon';
import FingerprintIcon from '../../../assets/Icons/FingerprintIcon';

const menuItemIcon = {
  logout: <PowerIcon width={22} height={22} />,
  profile: <PersonSquareIcon width={22} height={22} />,
  security: <FingerprintIcon width={24} height={24} />,
}

const ToolbarUserPopover = ({ menuAction }) => {  
  const {status,data} = useGetMenuItems("contextPanelUserTB");
  return (    
    <ToolbarPopoverLayout>
      <ToolbarPopoverLayout.Title title={"User"} />
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
      <ToolbarPopoverLayout.IconListItem  onClick={e => menuAction(e,"logout")}>
        <ToolbarPopoverLayout.IconListItem.Icon icon={menuItemIcon["logout"]} />
        <ToolbarPopoverLayout.IconListItem.Text text={"Logout"} />
      </ToolbarPopoverLayout.IconListItem>
    </ToolbarPopoverLayout>
  );
}

export default ToolbarUserPopover;