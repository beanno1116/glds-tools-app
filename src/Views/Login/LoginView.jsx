import styles from './loginView.module.css';
import ContentGrid from './Components/ContentGrid/ContentGrid';
import LogoColumn from './Components/LogoColumn/LogoColumn';
import LoginMsgColumn from './Components/LoginMsgColumn/LoginMsgColumn';
import LoginFormColumn from './Components/LoginFormColumn/LoginFormColumn';
import MobileContentGrid from './Components/MobileContentGrid/MobileContentGrid';
import TopGridContent from './Components/TopGridContent/TopGridContent';
import MidGridContent from './Components/MidGridContent/MidGridContent';
import BottomGridContent from './Components/BottomGridContent/BottomGridContent';

const LoginView = () => {
  
  const screenWidth = () => {
    
    if(window.innerWidth <= 420){
      return false;
    }
      return true;
  }

  console.log(window.innerWidth);

  return (
    <div className={styles.loginView}>
      

      {screenWidth() ? 
        <ContentGrid left={<LogoColumn />} mid={<LoginMsgColumn />} right={<LoginFormColumn />} /> :
        <MobileContentGrid top={<TopGridContent />} mid={<MidGridContent />} bottom={<BottomGridContent/>} />
      }

      
    </div>
  );
}

export default LoginView;
