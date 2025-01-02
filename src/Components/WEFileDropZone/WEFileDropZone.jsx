import CircleCheckOffsetIcon from '../../assets/Icons/CircleCheckOffsetIcon';
import styles from './weFileDropZone.module.css';

const WEFileDropZone = ({ label,name,value,onChange,types,icon,...props }) => {

  const handleDrop = (e) => {
    try {      
      e.preventDefault();
      e.stopPropagation();
            
      if (e.dataTransfer.files.length === 0) throw new Error("No files chosen");
      
      let file = e.dataTransfer.files[0];
      
      onChange(e,file);

    } catch (error) {
      console.error(error.message);
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.file_dropzone}>
        
    {/* PLUGIN FILE DROP ZONE */}
    <div data-zone={name} className={styles.dropzone} onDrop={(e) => handleDrop(e)} onDragOver={handleDragOver}>
      <div className={styles.dropzone_content}>
        <span className={styles.dropzone_label}>{label}</span>
        <span className={`${styles.dropzone_icon} ${value?.name ? styles.valid : ""}`}>          
          {value ? <CircleCheckOffsetIcon width={60} height={60} /> : icon}
        </span>
        <span className={`${styles.dropzone_text} ${value ? styles.valid : ""}`}>
          {value?.name ? value.name : types}
        </span>
      </div>
    </div>

  </div> 
  );
}

export default WEFileDropZone;