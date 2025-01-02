import WEButton from '../../../../../Components/WEButton/WEButton';
import styles from '../desktopMenuGrid.module.css';

const DesktopMenuGridItem = ({ heading,action,onClick,...props }) => {
  return (
    <div className={styles.grid_tile}>

    <div className={styles.grid_tile_header}>
      <div className={styles.tile_header_title}><h1>{heading}</h1></div>
      <div className={styles.tile_header_nav}><button type='button'>+</button></div>
    </div>

    <div className={styles.grid_tile_body} style={{flex:"1"}}></div>

    <div className={styles.grid_tile_footer}>    
      <WEButton onClick={onClick} data-action={action} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem","--backgroundColor":"#164264"}} type='solid'>
        View
      </WEButton>
    </div>

    </div>
  );
}

export default DesktopMenuGridItem;