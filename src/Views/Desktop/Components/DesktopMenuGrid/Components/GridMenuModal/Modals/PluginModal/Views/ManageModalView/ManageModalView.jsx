import styles from './manageModalView.module.css';
import pluginsGraphic from '../../../../../../../../../../assets/Images/pluginsGraphic.png'
import WEForm from '../../../../../../../../../../Forms/WEForm/WEForm';
import WEButton from '../../../../../../../../../../Components/WEButton/WEButton';
import WEInput from '../../../../../../../../../../Components/WEInput/WEInput';
import WESelect from '../../../../../../../../../../Components/WESelect/WESelect';
import { useState } from 'react';
import { request, useGetPlatformOptions } from '../../../../../../../../../../Api/api';
import WETextArea from '../../../../../../../../../../Components/WETextArea/WETextArea';
import WEFileDropZone from '../../../../../../../../../../Components/WEFileDropZone/WEFileDropZone';
import FileUploadIcon from '../../../../../../../../../../assets/Icons/FileUploadIcon';


const headers = {
  "Accept": "multipart/form-data",
  "Content-Type": "multipart/form-data"
}


const ManageModalView = ({ ...props }) => {
  const {status,data} = useGetPlatformOptions();
  const [formData,setFormData] = useState({
    name: "",
    description: "",
    price: "",
    tags: [],
    status: [],
    platform: [],
    pluginFile:null,
    docFile: null    
  })


  const onPlatformSelectEvent = (e) => {
    try {
      setFormData({...formData,platform:e.target.value})
    } catch (error) {
      console.error(`[ERROR] [COMP:ManageModalView] [EVT:onPlatformSelectEvent] - ${error.message}`);
    }
  }

  const onCreateButtonClick = (e) => {
    let postData = {
      ...formData,
      price: formData.price === "" ? "0.00" : formData.price,
      platform: formData.platform[0].id
    }
    
    const resetFormData = (response) => {
      if (response.success){
        console.log("Success");
        setFormData({
          name: "",
          description: "",
          price: "",
          platform: [],    
          pluginFile: null,
          docFile: null          
        })
      }
    }

    // resetFormData({success:true});
    request.post("plugins/create",postData,headers,resetFormData);
  }

  const onCancelButtonClick = (e) => {

  }

  const onPluginFileChange = (e,file) => {
    setFormData({...formData,pluginFile:file});
  }

  const onPluginGuideFileChange = (e,file) => {
    setFormData({...formData,docFile:file});
  }

  return (
    <div className={styles.view}>
      <div className={styles.container}>
        <div className={styles.layout}>
          
          {/* Plugin creation graphic and title column */}
          <div className={styles.asthetics_col}>

            <div className={styles.form_heading}>
              <h1>Create A Plugin</h1>
            </div>

            <img src={pluginsGraphic} className={styles.graphic} alt="cartoon graphic of man with different screens" />

          </div>

          {/* Plugin creation form column */}
          <div className={styles.form_col}>

            <WEForm layout={"flex"} style={{width:"100%",height:"100%",gap:"1rem"}}>

              {/* Name and Platform Row */}
              <WEForm.Row>
                
                {/* Name input component */}
                <WEInput    
                  size="sm"
                  id={"text_input_cn"}
                  name={"name"}
                  style={{flex:"1"}}
                  value={formData.name}
                  placeholder="Name"
                  onChange={e => setFormData({...formData,name:e.target.value})}
                  autoComplete="off" />  

                {/* Platform select component */}
                <WESelect 
                  size="sm"
                  name="platform"
                  value={formData.platform}                      
                  placeholder="Platform"
                  options={!status.isLoading && data.map(plugin => {
                    return {id:plugin.id,value:plugin.id,label:plugin.name};
                  })}
                  isMulti={false}
                  isSearchable={false}
                  onChange={onPlatformSelectEvent} />

              </WEForm.Row>
              
              {/* Price Row */}
              <WEForm.Row>

                {/* Tags select component */}
                <WESelect 
                  size="sm"
                  name="tags"
                  value={formData.tags}                      
                  placeholder="Tags"
                  options={!status.isLoading && data.map(plugin => {
                    return {id:plugin.id,value:plugin.id,label:plugin.name};
                  })}
                  isMulti={false}
                  isSearchable={false}
                  onChange={e => setFormData({...formData,tags:e.target.value})} />

                {/* Price text input component */}
                <WEInput 
                  size="sm"
                  id={"text_input_pp"}
                  name={"price"}
                  style={{flex:".5"}}
                  value={formData.price}
                  placeholder="Price"
                  onChange={e => setFormData({...formData,price:e.target.value})}
                  autoComplete="off" />              

              </WEForm.Row>

              {/* Status row */}
              <WEForm.Row>

                {/* Status select component */}
                <WESelect 
                  size="sm"
                  name="status"
                  value={formData.status}                      
                  placeholder="Status"
                  options={!status.isLoading && data.map(plugin => {
                    return {id:plugin.id,value:plugin.id,label:plugin.name};
                  })}
                  isMulti={false}
                  isSearchable={false}
                  onChange={e => setFormData({...formData,status:e.target.value})} />

              </WEForm.Row>

              {/* Description row */}
              <WEForm.Row>

                {/* Description text area input component */}
                <WETextArea 
                  name="description" 
                  value={formData.description} 
                  onChange={e => setFormData({...formData,description:e.target.value})}
                  height="150px"
                  maxHeight="150px" />

              </WEForm.Row>

              {/* Plugin and documentation dropzon row */}
              <WEForm.Row flex={1}>

                {/* Plugin file dropzone component */}
                <WEFileDropZone label={"Drop plugin here"} types={".zip"} icon={<FileUploadIcon width={60} height={60} />} value={formData.pluginFile} onChange={onPluginFileChange} />

                {/* Plugin documentation file dropzone component */}
                <WEFileDropZone label={"Drop guide here"} types={".pdf"} icon={<FileUploadIcon width={60} height={60} />} value={formData.docFile} onChange={onPluginGuideFileChange}/>

              </WEForm.Row>

              {/* FORM ACTION BUTTON */}
              <WEForm.Row style={{paddingTop:"1rem"}}>
                
                {/* Create button component */}
                <WEButton onClick={onCreateButtonClick} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:"1"}} type='solid'>
                  Create
                </WEButton>
                  
                {/* Reset form button component */}
                <WEButton onClick={onCancelButtonClick} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:".25",borderColor:"#D6224668",backgroundColor:"transparent"}} type='solid'>
                  Reset
                </WEButton>

              </WEForm.Row>

            </WEForm>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ManageModalView;