import {useState} from 'react';
import styles from '../managePluginPanel.module.css';
import WEInput from "../../../../../../../../Components/WEInput/WEInput";
import WESelect from "../../../../../../../../Components/WESelect/WESelect";
import WEButton from '../../../../../../../../Components/WEButton/WEButton';
import axios from 'axios';
import WETextArea from '../../../../../../../../Components/WETextArea/WETextArea';
import FileUploadIcon from '../../../../../../../../assets/Icons/FileUploadIcon';
import ZipFileIcon from '../../../../../../../../assets/Icons/ZipFileIcon';
import CircleCheckOffsetIcon from '../../../../../../../../assets/Icons/CircleCheckOffsetIcon';
import { request } from '../../../../../../../../Api/api';

const userLevels = [
  {
    id: 0,
    value: "administrator",
    label: "Administrator"
  },
  {
    id: 1,
    value: "service",
    label: "Service"
  },
  {
    id: 2,
    value: "manager",
    label: "Manager"
  },
  {
    id: 3,
    value: "developer",
    label: "Developer"
  },
]


const headers = {
  "Accept": "multipart/form-data",
  "Content-Type": "multipart/form-data"
}

const AddPluginForm = ({platforms}) => {  
  const [formData,setFormData] = useState({
    name: "",
    description: "",
    price: "",
    platform: [],
    pluginFile:null,
    docFile: null
  })

  


  const formSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const postData = {
      ...formData,
      price: formData.price === "" ? "0.00" : formData.price,
      platform:formData.platform[0].value.toString()
    }
    
    const resetFormData = (response) => {
      if (response.success){
        console.log("Success");
        setFormData({
          name: "",
          description: "",
          price: "",
          platform: [],    
          pluginFile: {},
          docFile: {}          
        })
      }
    }
    // if (formData.email === "" || formData.password === "" || formData.firstName === "" || formData.lastName === "" || formData.authLevel === "") return;
    request.post("plugins/create",postData,headers,resetFormData);

  }

  const handleDrop = (e) => {
    try {      
      e.preventDefault();
      e.stopPropagation();

      if (e.dataTransfer.files.length === 0) throw new Error("No files chosen");

      let zoneName = e.currentTarget.dataset.zone;
      let file = e.dataTransfer.files[0];
      if (zoneName === "plugin"){
        setFormData({...formData,pluginFile:file});
      }else if (zoneName === "docs"){
        setFormData({...formData,docFile:file});
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  
  return (
    <form className={styles.add_user_form}>

      {/* PLUGIN PLATFORM SELECT INPUT */}
      <div className={styles.add_user_form_row}>
      
        <WESelect 
            name="platform"
            value={formData.platform}
            size="sm"
            placeholder="Choose Platform"
            options={platforms && platforms.map(opt => {
              return {id:opt.id,value:opt.id,label:opt.name};
            })}
            isMulti={false}
            isSearchable={false}
            onChange={e => setFormData({...formData,platform:e.target.value})} />

      </div>

      {/* PLUGIN NAME INPUT */}
      <div className={styles.add_user_form_row}>        
        <WEInput 
          size="sm"
          id={"text_input_nm"}
          name="name"
          value={formData.name}
          placeholder="Plugin Name"
          onChange={e => setFormData({...formData,name:e.target.value})}
          autoComplete="off"
          style={{width:"100%"}} />
        
      </div>

      {/* SELL PRICE INPUT */}
      {/* <div className={styles.add_user_form_row}>
        
          <WEInput 
          size="sm"
          id={"text_input_pr"}
          name="price"
          value={formData.price}
          placeholder="Sell Price"
          onChange={e => setFormData({...formData,price:e.target.value})}
          autoComplete="off"
          style={{width:"100%"}} />

      </div> */}

      {/* PLUGIN DESCRIPTION INPUT */}
      <div className={styles.add_user_form_row}>
        <WETextArea 
          name="description" 
          value={formData.description} 
          onChange={e => setFormData({...formData,description:e.target.value})}
          height="150px"
          maxHeight="150px" />
      </div>

      {/* PLUGIN FILE AND DOCUMENTATION ROW */}
      <div className={styles.col_flex_1_row}>

        <div className={styles.form_file_drop}>
        
          {/* PLUGIN FILE DROP ZONE */}
          <div data-zone="plugin" className={styles.form_file_dropzone} onDrop={(e) => handleDrop(e)} onDragOver={handleDragOver}>
            <div className={styles.form_file_dropzone_content}>
              <span className={styles.form_file_dropzone_label}>Plugin File</span>
              <span className={`${styles.form_file_dropzone_icon} ${formData.pluginFile ? styles.valid : ""}`}>
                {formData.pluginFile ? <CircleCheckOffsetIcon width={60} height={60} /> : <ZipFileIcon width={60} height={60} />}
              </span>
              <span className={`${styles.form_file_dropzone_text} ${formData.pluginFile ? styles.valid : ""}`}>
                {formData.pluginFile ? formData.pluginFile.name : ".zip"}
              </span>
            </div>
          </div>

          {/* PLUGIN DOCUMENTATION FILE DROP ZONE */}
          <div data-zone="docs" className={styles.form_file_dropzone} onDrop={(e) => handleDrop(e)} onDragOver={handleDragOver}>
            <div className={styles.form_file_dropzone_content}>
              <span className={styles.form_file_dropzone_label}>Documentation File</span>
              <span className={`${styles.form_file_dropzone_icon} ${formData.pluginFile ? styles.valid : ""}`}>
                {formData.docFile ? <CircleCheckOffsetIcon width={60} height={60} /> : <FileUploadIcon width={60} height={60} />}                
              </span>
              <span className={`${styles.form_file_dropzone_text} ${formData.pluginFile ? styles.valid : ""}`}>
                {formData.docFile ? formData.docFile.name : ".pdf .txt .docx .html"}                
              </span>
            </div>
          </div>
        
        </div> 

      </div>
    
    

      


   
      

      <div className={styles.add_user_form_row}>        
        <WEButton onClick={formSubmit} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem"}} type='solid'>
          <span>Add</span>
        </WEButton>
      </div>

    </form>
  )
}

export default AddPluginForm;