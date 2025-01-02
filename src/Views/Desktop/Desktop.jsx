import { useCallback, useState } from 'react';
import { useGetMenuItems } from '../../Api/api';

import { useAuth } from '../../hooks/useAuth';
import Greeting from './Components/Greeting/Greeting';
import Toolbar from './Components/Toolbar/Toolbar';
import styles from './desktop.module.css';

import ContextPanel from './Components/ContextPanel/ContextPanel';

import DesktopMenuGrid from './Components/DesktopMenuGrid/DesktopMenuGrid';
import WEModal from '../../Components/WEModal/WEModal';
import useModal from '../../Components/WEModal/hooks/useModal';
import GridMenuModal from './Components/DesktopMenuGrid/Components/GridMenuModal/GridMenuModal';
import StatusBar from './Components/StatusBar/StatusBar';

const Desktop = ({ ...props }) => {    
  console.log("Desktop rendered");
  
  const auth = useAuth();
  const {status,data} = useGetMenuItems("dashGridMenu");
  const {modalState,toggleModal} = useModal();
  const [currentModal,setCurrentModal] = useState("");

const gridItemOnClick = useCallback((e) => {
  try {
    let action = e.currentTarget.dataset.action;
    
    setCurrentModal(action);
    toggleModal();
    
  } catch (error) {
    console.error(error.message);
  }
},[toggleModal,setCurrentModal])

  return (
    <div className={styles.desktop_container}>

      <Toolbar location={"Dashboard"} />

      <Greeting name={auth?.user?.firstName ? auth.user.firstName : ""} />

      <DesktopMenuGrid>            
        {!status.isLoading && data.data.map(menuItem => {
          return (<DesktopMenuGrid.GridItem key={menuItem.id} heading={menuItem.title} action={menuItem.action} onClick={gridItemOnClick}/>)
        })}
      </DesktopMenuGrid>


      <WEModal config={{showCloseButton:false}}  isOpen={modalState} toggle={toggleModal}>

            <GridMenuModal action={currentModal} toggleModal={toggleModal}/>

      </WEModal>

      {/* <StatusBar /> */}
      {/* <section className={styles.desktop_statusbar}></section> */}
       
    </div>
  );
}

export default Desktop;