import Widget from '../../../../../../../../../Components/Widgets/Widget';
import styles from '../inventoryModal.module.css';

const DashboardModal = ({ ...props }) => (
  <div className={styles.modal_dashboard}>

    <div className={styles.modal_dashboard_view}>

      <div className={styles.modal_dashboard_layout}>

        <div className={styles.modal_dashoard_layout_row}>
          
          <Widget.DetailList heading={"Low Stock Items"} style={{flex:".35"}}>
            <Widget.DetailList.LowStockListItem id={"1"} name={"Epson printer"} model={"TM01234"} count={3} />
            <Widget.DetailList.LowStockListItem id={"2"} name={"6ft Cat-6"} model={"Amazon"} count={2} />
            <Widget.DetailList.LowStockListItem id={"3"} name={"POE Injector"} model={"D-Link"} count={4} />
            <Widget.DetailList.LowStockListItem id={"4"} name={"SoniceWall"} model={"SonicWall"} count={1} />
            <Widget.DetailList.LowStockListItem id={"5"} name={"SoniceWall"} model={"SonicWall"} count={1} />
          </Widget.DetailList>

          <Widget.DetailList heading={"Recently Assigned"} style={{flex:".60"}}>
            <Widget.DetailList.RecentlyAssignedListItem />
            <Widget.DetailList.RecentlyAssignedListItem />
            <Widget.DetailList.RecentlyAssignedListItem />
            <Widget.DetailList.RecentlyAssignedListItem />
            <Widget.DetailList.RecentlyAssignedListItem />
            {/* <Widget.DetailList.LowStockListItem id={"1"} name={"25ft Cat-6"} model={"Amazon"} count={24} />
            <Widget.DetailList.LowStockListItem id={"2"} name={"3ft Cat-6"} model={"Amazon"} count={18} />
            <Widget.DetailList.LowStockListItem id={"3"} name={"Printer Paper"} model={"32-P"} count={103} />
            <Widget.DetailList.LowStockListItem id={"4"} name={"4 Port Switch"} model={"D-Link"} count={15} />
            <Widget.DetailList.LowStockListItem id={"5"} name={"Dual Port Biscuit"} model={"generic"} count={34} /> */}
          </Widget.DetailList>

          <Widget.ActionMenu heading={"Actions"} style={{flex:".15"}}>

          </Widget.ActionMenu>

        </div>

        <div className={styles.modal_dashoard_layout_row}>
          <Widget.DetailList heading={"High Stock Items"} style={{flex:".335"}}>
            <Widget.DetailList.LowStockListItem id={"1"} name={"25ft Cat-6"} model={"Amazon"} count={24} />
            <Widget.DetailList.LowStockListItem id={"2"} name={"3ft Cat-6"} model={"Amazon"} count={18} />
            <Widget.DetailList.LowStockListItem id={"3"} name={"Printer Paper"} model={"32-P"} count={103} />
            <Widget.DetailList.LowStockListItem id={"4"} name={"4 Port Switch"} model={"D-Link"} count={15} />
            <Widget.DetailList.LowStockListItem id={"5"} name={"Dual Port Biscuit"} model={"generic"} count={34} />
          </Widget.DetailList>
          <Widget.DetailList heading={"Most Used"} style={{flex:".225"}}>
            <Widget.DetailList.LowStockListItem id={"1"} name={"25ft Cat-6"} model={"Amazon"} count={24} />
            <Widget.DetailList.LowStockListItem id={"2"} name={"3ft Cat-6"} model={"Amazon"} count={18} />
            <Widget.DetailList.LowStockListItem id={"3"} name={"Printer Paper"} model={"32-P"} count={103} />
            <Widget.DetailList.LowStockListItem id={"4"} name={"4 Port Switch"} model={"D-Link"} count={15} />
            <Widget.DetailList.LowStockListItem id={"5"} name={"Dual Port Biscuit"} model={"generic"} count={34} />
          </Widget.DetailList>
          <Widget.DetailList heading={"Inventory Value"} style={{flex:".225"}}>
            <Widget.DetailList.LowStockListItem id={"1"} name={"25ft Cat-6"} model={"Amazon"} count={24} />
            <Widget.DetailList.LowStockListItem id={"2"} name={"3ft Cat-6"} model={"Amazon"} count={18} />
            <Widget.DetailList.LowStockListItem id={"3"} name={"Printer Paper"} model={"32-P"} count={103} />
            <Widget.DetailList.LowStockListItem id={"4"} name={"4 Port Switch"} model={"D-Link"} count={15} />
            <Widget.DetailList.LowStockListItem id={"5"} name={"Dual Port Biscuit"} model={"generic"} count={34} />
          </Widget.DetailList>
          <Widget.DetailList heading={"Inventory Alerts"} style={{flex:".225"}}>
            <Widget.DetailList.LowStockListItem id={"1"} name={"25ft Cat-6"} model={"Amazon"} count={24} />
            <Widget.DetailList.LowStockListItem id={"2"} name={"3ft Cat-6"} model={"Amazon"} count={18} />
            <Widget.DetailList.LowStockListItem id={"3"} name={"Printer Paper"} model={"32-P"} count={103} />
            <Widget.DetailList.LowStockListItem id={"4"} name={"4 Port Switch"} model={"D-Link"} count={15} />
            <Widget.DetailList.LowStockListItem id={"5"} name={"Dual Port Biscuit"} model={"generic"} count={34} />
          </Widget.DetailList>
        </div>

      </div>

    </div>

  </div>
)

export default DashboardModal;