
import CloseIcon from '../../../../../../../../../../../../assets/Icons/CloseIcon';
import WEButton from '../../../../../../../../../../../../Components/WEButton/WEButton';
import styles from './guideDetailModal.module.css';
import useDownloadFile from '../../../../../../../../../../../../hooks/useDownloadFile';

const GuideDetailModal = ({ toggle,guide,...props }) => {
  const {downloadFile} = useDownloadFile("https://localhost:7291/guides/download");


  const downloadButtonClickEvent = async (e) => {
    try {
      
      if (!guide?.id) return;
      if (downloadFile(guide.id)){
        console.log("Successfully downloaded file");
      }
      toggle();
    } catch (error) {
      console.error(`[ERROR] [COMP:GuideDetailModal] [EVT:downloadButtonClickEvent] - ${error.message}`);
    }
  }

  return (
    <div className={styles.detail_modal_container}>

      <div className={styles.detail_modal_title}>
        <h1>Guide Details</h1>
      </div>

      <div className={styles.name_detail}>
          <h4>{guide?.name}</h4>
      </div>


      <div className={styles.detail_modal_content}>



        <div className={styles.detail_row}>
          <label>Platform:</label>
          <span>{guide?.platform}</span>
        </div>

        <div className={styles.detail_row}>
          <label>Group:</label>
          <span>{guide?.group}</span>
        </div>

        <div className={styles.detail_row}>
          <label>Category:</label>
          <span>{guide?.category}</span>
        </div>

        <div className={styles.detail_row}>
          <label>Filename:</label>
          <span>{guide?.fileName}</span>
        </div>

        <div className={styles.detail_row}>
          <label>Tags:</label>
          <span>{guide?.tags}</span>
        </div>

        <div className={styles.detail_row}>
          <label>MD5 Hash:</label>
          <span>{guide?.hash}</span>
        </div>

        <div className={styles.detail_row}>
          <label>Downloads:</label>
          <span>{guide?.downloads}</span>
        </div>


      </div>

   

      <div className={styles.footer}>
        <div className={styles.button_group}>
          <button className={styles.button} type='button' onClick={downloadButtonClickEvent}>Download</button>
          <button className={styles.button} type='button'>View</button>
        </div>
        <WEButton onClick={() => toggle()} style={{padding:".75rem .75rem",fontSize:"1.25rem",borderColor:"rgba(219, 22, 48, 0.75)",backgroundColor:"rgba(219, 22, 48, 0.5)"}} type='solid'>
          <CloseIcon width={20} height={20} />
        </WEButton>     
 
      </div>

    </div>
  );
}

export default GuideDetailModal;