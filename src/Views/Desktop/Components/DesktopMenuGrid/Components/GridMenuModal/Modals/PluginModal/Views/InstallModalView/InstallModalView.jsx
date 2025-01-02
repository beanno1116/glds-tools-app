import styles from './installModalView.module.css';
import { useGetCustomers, useGetPlugins } from '../../../../../../../../../../Api/api';

import CustomerForm from './Forms/CustomerForm';
import PluginSelection from './Components/PluginSelection';



const InstallModalView = ({ ...props }) => {
  const {status:getCustomersStatus,data:customers} = useGetCustomers();
  const {status:getPluginsStatus,data:plugins} = useGetPlugins();

  return (
    <div className={styles.view}>

      <div className={styles.container}>

        <div className={styles.layout}>

          <div className={styles.customer_col}>
            <CustomerForm stores={customers} customers={customers}/>
          </div>

          <div className={styles.plugin_col}>
            <PluginSelection plugins={plugins}/>
          </div>

        </div>

      </div>

    </div>
  );
}

export default InstallModalView;