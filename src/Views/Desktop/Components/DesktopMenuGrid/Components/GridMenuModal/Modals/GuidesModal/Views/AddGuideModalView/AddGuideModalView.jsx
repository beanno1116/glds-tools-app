import FileUploadIcon from '../../../../../../../../../../assets/Icons/FileUploadIcon';
import WEButton from '../../../../../../../../../../Components/WEButton/WEButton';
import WEFileDropZone from '../../../../../../../../../../Components/WEFileDropZone/WEFileDropZone';
import WEInput from '../../../../../../../../../../Components/WEInput/WEInput';
import WESelect from '../../../../../../../../../../Components/WESelect/WESelect';
import WEForm from '../../../../../../../../../../Forms/WEForm/WEForm';
import styles from './addGuideModalView.module.css';
import guidesGraphic from '../../../../../../../../../../assets/images/guidesGraphic.png'
import { request, useGetGroupOptions, useGetPlatformOptions, useGetTags } from '../../../../../../../../../../Api/api';
import { useState } from 'react';
import PdfFileIcon from '../../../../../../../../../../assets/Icons/PdfFileIcon';

const PDF_ICON_SIZE = 60;

const groups = [
  {
    id: 1,
    label: "User",
    value: "user"
  },
  {
    id: 2,
    label: "Technical",
    value: "technical"
  },
  {
    id: 3,
    label: "Company",
    value: "company"
  }
]

const headers = {
  "Accept": "multipart/form-data",
  "Content-Type": "multipart/form-data"
}

const AddGuideModalView = ({ ...props }) => {
  const {status:getPlatformStatus,data:platforms=[]} = useGetPlatformOptions();
  const {status:getTagsStatus,data:tags=[]} = useGetTags();
  const {status:getCategoriesStatus,data:categories=[]} = useGetGroupOptions();  
  const [formData,setFormData] = useState({
    name: "",
    platform: [],
    tags: [],
    group: [],
    category: [],
    guideFile:null      
  })



  const onCreateButtonClick = (e) => {
    let postData = {
      ...formData,      
      platform: formData.platform[0].id,
      group: formData.group[0].id,
      category: formData.category[0].id,    
      tags: formData.tags.map(c => c.id).join("|") 
    }
    
    
    const resetFormData = (response) => {
      if (response.success){
        console.log("Success");
        setFormData({
          name: "",
          platform: [],
          tags: [],
          group: [],
          category: [],
          guideFile:null         
        })
      }
    }

    // resetFormData({success:true});    
    request.post("guides/create",postData,headers,resetFormData);
  }

  const onCancelButtonClick = (e) => {

  }

  const onGuideFileChange = (e,file) => {
    setFormData({...formData,guideFile:file});
  }



  return (
    <div className={styles.view}>
      <div className={styles.container}>
        <div className={styles.layout}>
          
          <div className={styles.asthetics_col}>

            <div className={styles.form_heading}>
              <h1>Create A Guide</h1>
            </div>

            <img src={guidesGraphic} className={styles.graphic} alt="cartoon graphic of documents and folders" />

          </div>

          <div className={styles.form_col}>


            <WEForm layout={"flex"} style={{width:"100%",height:"100%",gap:"1rem"}}>

              {/* Name Row */}
              <WEForm.Row>

                <WEInput           
                  id={"text_input_cn"}
                  name={"name"}
                  style={{flex:"1"}}
                  value={formData.name}
                  placeholder="Name"
                  onChange={e => setFormData({...formData,name:e.target.value})}
                  autoComplete="off" />   

                <WESelect 
                  name="platform"
                  value={formData.platform}                      
                  placeholder="Platform"
                  options={!getPlatformStatus.isLoading && platforms.map(platform => {
                    return {id:platform.id,value:platform.id,label:platform.name};
                  })}
                  isMulti={false}
                  isSearchable={false}
                  onChange={e => setFormData({...formData,platform:e.target.value})} />             

              </WEForm.Row>


              
              {/* Tags Row */}
              <WEForm.Row>
                <WESelect 
                  name="tags"                  
                  value={formData.tags}                      
                  placeholder="Tags"
                  options={!getTagsStatus.isLoading && tags.map(tag => {
                    return {id:tag.id,value:tag.value,label:tag.name};
                  })}
                  isMulti={true}
                  isSearchable={false}
                  onChange={e => setFormData({...formData,tags:e.target.value})} />  
              </WEForm.Row>

              {/* Group and Category Row */}
              <WEForm.Row>

                <WESelect 
                  name="group"
                  value={formData.group}                      
                  placeholder="Group"
                  options={groups.map(group => {
                    return {id:group.id,value:group.id,label:group.label};
                  })}
                  isMulti={false}
                  isSearchable={false}
                  onChange={(e) => setFormData({...formData,group:e.target.value})} />      

                <WESelect 
                  name="category"
                  value={formData.category}                      
                  placeholder="Category"
                  options={!getCategoriesStatus.isLoading && categories.map(category => {
                    return {id:category.id,value:category.id,label:category.name};
                  })}
                  isMulti={false}
                  isSearchable={false}
                  onChange={(e) => setFormData({...formData,category:e.target.value})} />      

              </WEForm.Row>

              {/* Guide file drop row */}
              <WEForm.Row flex={1}>
                <WEFileDropZone label={"Drop Guide"} types={".pdf"} icon={<PdfFileIcon width={PDF_ICON_SIZE} height={PDF_ICON_SIZE} />} value={formData.guideFile} onChange={onGuideFileChange} />
              </WEForm.Row>

              {/* FORM ACTION BUTTON */}
              <WEForm.Row style={{paddingTop:"1rem"}}>

                  <WEButton onClick={onCreateButtonClick} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:"1"}} type='solid'>
                    Create
                  </WEButton>
                  
                  <WEButton onClick={onCancelButtonClick} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:".25",borderColor:"#D6224668",backgroundColor:"transparent"}} type='solid'>
                    Cancel
                  </WEButton>

              </WEForm.Row>

            </WEForm>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddGuideModalView;