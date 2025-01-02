import HeartOutlineIcon from '../../../../../../../../../../../../assets/Icons/HeartOutlineIcon';
import WEButton from '../../../../../../../../../../../../Components/WEButton/WEButton';
import styles from './gridCard.module.css';

const Title = ({name}) => {
  return (
    <div className={styles.grid_card_title}>
      <span>{name}</span>
    </div>
  )
}

const Body = () => <div className={styles.grid_card_body}></div>

const Footer = ({onViewClick,onFavClick}) => {
  return (
    <div className={styles.grid_card_footer}>
      <div className={styles.grid_card_footer_buttons}>
        <WEButton onClick={onViewClick} style={{padding:".5rem .25rem"}} type='solid'>
          View
        </WEButton>                    
      </div>
      <WEButton onClick={onFavClick} style={{padding:".75rem .75rem",fontSize:"1.25rem"}} type='solid'>
        <HeartOutlineIcon width={18} height={18}/>
      </WEButton>
    </div>
  )
}

const GridCard = ({ children,...props }) => {
  return (
    <div className={styles.grid_card}>
      {children}
    </div>
  );
}

GridCard.Title = Title;
GridCard.Body = Body;
GridCard.Footer = Footer;

export default GridCard;