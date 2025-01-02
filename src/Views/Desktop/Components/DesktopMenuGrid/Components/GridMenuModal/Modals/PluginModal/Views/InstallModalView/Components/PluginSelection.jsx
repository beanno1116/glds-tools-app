import { useState } from 'react';
import PdfFileIcon from '../../../../../../../../../../../assets/Icons/PdfFileIcon';
import PluginIcon from '../../../../../../../../../../../assets/Icons/PluginIcon';
import ZipFileIcon from '../../../../../../../../../../../assets/Icons/ZipFileIcon';
import WEButton from '../../../../../../../../../../../Components/WEButton/WEButton';
import styles from '../installModalView.module.css';
import FilterSquareIcon from '../../../../../../../../../../../assets/Icons/FilterSquareIcon';
import axios from 'axios';

const ICON_SIZE = 60;
const DL_ICON_SIZE = 80;

const getFileNameFromContentDisposition = (disposition) => {
  try {
    return disposition.split("; ")[1].split('=')[1];
  } catch (error) {
    console.error(error.message);
  }
}


const PluginSelection = ({ plugins=[],...props }) => {
  const [selectedPlugin,setSelectedPlugin] = useState(undefined);
  const [selectorOpen,setSelectorOpen] = useState(false);    
  const plugin = selectedPlugin === undefined ? {} : plugins.filter(p => p.id === parseInt(selectedPlugin))[0]

  const onSelectPluginButtonClick = (e) => {
    try {
      setSelectorOpen(!selectorOpen);
    } catch (error) {
      console.error(`[ERROR] [COMP:InstalModalView] [EVT:onSelectPluginButtonClick] - ${error.message}`);
    }
  }

  const onSelectorResetClick = (e) => {
    setSelectedPlugin(undefined);
  }

  const onDownloadPluginButtonClick = async (e) => {
    try {

      const response = await axios.get("https://localhost:7291/plugins/download",{params:{id:selectedPlugin},responseType:'arraybuffer'});       

      const fileBlob = new Blob([response.data],{type:"application/zip"});
      let fileName = getFileNameFromContentDisposition(response.headers["content-disposition"]);
      const opts = {
        types: [
          {
            description: fileName,
            accept: {'application/zip':['.zip']}
          }
        ],
        startIn: "downloads",
        suggestedName: fileName
      }
      let handle = await showSaveFilePicker(opts);
      let writable = await handle.createWritable();
      await writable.write(fileBlob);
      writable.close();
    } catch (error) {
      console.error(`[ERROR] [COMP:InstallModalView] [EVT:onDownloadPluginButtonClick] - ${error.message}`);
    }
  }

  const onDownloadGuideButtonClick = async (e) => {
    try {
      // request.download("plugins/download/docs",{params:{id:selectedPlugin},responseType:'blob'});
      const response = await axios.get("https://localhost:7291/plugins/download/docs",{params:{id:selectedPlugin},responseType:'arraybuffer'});
      const fileBlob = new Blob([response.data],{type:"application/pdf"});
      let fileName = getFileNameFromContentDisposition(response.headers["content-disposition"]);
      const opts = {
        types: [
          {
            description: fileName,
            accept: {'application/pdf':['.pdf']}
          }
        ],
        startIn: "downloads",
        suggestedName: fileName
      }
      let handle = await showSaveFilePicker(opts);
      let writable = await handle.createWritable();
      await writable.write(fileBlob);
      writable.close();
    } catch (error) {
      console.error(`[ERROR] [COMP:InstallModalView] [EVT:onDownloadGuideButtonClick] - ${error.message}`);
    }
  }

  const onSelectorItemClick = (e) => {
    try {            
      let plugin = e.currentTarget.dataset.plugin;
      setSelectedPlugin(plugin);
      setSelectorOpen(false);
    } catch (error) {
      console.error(`[ERROR] [COMP:InstallModalView] [EVT:onSelectorItemClick] - ${error.message}`);
    }
  }
  

  return (
    <>
      {selectedPlugin === undefined && 
        (
          <div className={styles.select_plugin_section}>
            <button title={"Click to select plugin"} onClick={onSelectPluginButtonClick}>
              <span><PluginIcon width={ICON_SIZE} height={ICON_SIZE} /></span>
              <label>Add Plugin</label>                    
            </button>
          </div>
        )
      }

      {selectedPlugin !== undefined && 
        (
          <div className={styles.plugin_details}>

            <div className={styles.section}>

              <div className={styles.plugin_main_details}>

                <div className={styles.status_widget}>
                  <label>Status</label>
                  <span className={styles.green}>Verified</span>
                </div>

                <div className={styles.main_details_widget}>
                  <div>
                    <div className={styles.label_wrapper}><label>Name:</label><span>{plugin?.name}</span></div>
                  </div>

                  <div>
                    <div className={styles.label_wrapper}><label>platform:</label><span>{plugin?.platform}</span></div>
                  </div>

                  <div>
                    <div className={styles.label_wrapper}><label>Last Update:</label><span>{plugin?.modifiedDate}</span></div>
                  </div>

                  <div>
                    <div className={styles.label_wrapper}><label>Downloads:</label><span>{plugin?.downloads}</span></div>
                  </div>

                </div>

                <div className={styles.plugin_selector_reset}>
                  <WEButton onClick={onSelectorResetClick} style={{width:"100%",padding:".75rem 1rem",fontSize:"1.25rem"}} type='solid'>
                    Reset
                  </WEButton>
                </div>

              </div>

            </div>

            <div className={styles.plugin_description}>
                <label>Description</label>
              <div className={`${styles.section} ${styles.description_section}`}>
                <p className={styles.section_p}>{plugin?.description}</p>
              </div>
            </div>

            <div className={`${styles.plugin_download_section}`}>
              <div className={`${styles.section} ${styles.download_button_section}`}>
                <button className={styles.download_button} onClick={(e) => onDownloadPluginButtonClick(e)}>
                  <span><ZipFileIcon width={DL_ICON_SIZE} height={DL_ICON_SIZE}/></span>
                  <span>Download Plugin</span>
                </button>
              </div>
              <div className={`${styles.section} ${styles.download_button_section}`}>
                <button className={styles.download_button} onClick={onDownloadGuideButtonClick}>
                  <span><PdfFileIcon width={DL_ICON_SIZE} height={DL_ICON_SIZE} /></span>
                  <span>Download Guide</span>
                </button>
              </div>
            </div>


          </div>
        )
      }

      {/* PLUGIN SELECTOR LIST MODAL */}
      <div className={`${styles.plugin_list_selector} ${selectorOpen ? styles.showing : ""}`}>

        <div className={`${styles.selector_panel}`}>

          <div className={styles.selector_panel_title}>
            <h4>Select a plugin</h4>
          </div>

          <div className={styles.selector_panel_search}>
            <button><FilterSquareIcon width={18} height={18} /></button>
            <input type='search' placeholder='Search' />
          </div>

          <div className={styles.selector_panel_scroll}>

            <ul className={styles.selector_panel_list}>

              {plugins && plugins.map(plugin => {
                return (
                  <li key={plugin.id} data-plugin={plugin.id} className={styles.selector_panel_item} onClick={onSelectorItemClick}>
                  <div className={styles.selector_panel_item_details}>
                    <label className={styles.selector_panel_item_name}>{plugin.name}</label>
                    <div className={styles.selector_panel_item_platform}>{plugin.platform}</div>
                  </div>
                  <div className={styles.selector_panel_item_icon}>
                    <PluginIcon width={25} height={25} />
                  </div>
                </li>
                )
              })}

            </ul>

          </div>
        </div>
      </div>
    </>
  );
}

export default PluginSelection;