import { useState } from "react";
import WEForm from "../../../../../../../../Forms/WEForm/WEForm";
import WEInput from "../../../../../../../../Components/WEInput/WEInput";
import WESelect from "../../../../../../../../Components/WESelect/WESelect";
import { request, useGetPlatformOptions } from "../../../../../../../../Api/api";
import WEFileDropZone from "../../../../../../../../Components/WEFileDropZone/WEFileDropZone";
import FileUploadIcon from "../../../../../../../../assets/Icons/FileUploadIcon";
import WEButton from "../../../../../../../../Components/WEButton/WEButton";
import axios from "axios";

const tagsData = [
  {
    id: 1,
    name: "Install",
    value: "install"
  },
  {
    id: 2,
    name: "Loc Plugin",
    value: "log_plugin"
  },
  {
    id: 3,
    name: "E-Commerce",
    value: "e_com"
  },
]

const groupsData = [
  {
    id: 1,
    name: "Install",
    value: "install"
  },
  {
    id: 2,
    name: "Fixes",
    value: "fixes"
  },
  {
    id: 3,
    name: "Pin pads",
    value: "pin_pads"
  },
]


const headers = {
  "Accept": "multipart/form-data",
  "Content-Type": "multipart/form-data"
}

const AddTechGuideForm = ({ ...props }) => {    
  const {status:fetchPlatformOptionsStatus,data:platformOptions} = useGetPlatformOptions();
  const [formData,setFormData] = useState({
    name: "",
    platform: [],
    tags: [],
    group: [],    
    guideFile: {}
  });
  
  

  const formSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
        
    const postData = {
      ...formData,
      platform:formData.platform[0].value.toString(),
      group:formData.group[0].value.toString(),
      tags: formData.tags.map(tag => tag.id).join("|")
    }
    
    const resetFormData = (response) => {
      try {
        if (response.success){
          console.log("Added new tech guide successfully");
          setFormData({
            name: "",
            platform: [],
            tags: [],
            group: [],    
            guideFile: {}
          })
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    request.post("tech-guides/create",postData,headers,resetFormData);

  }

  const onFileDropEvent = (e,file) => {    
    setFormData({...formData,guideFile:file});
  }




  return (    
    <WEForm>

      {/* Tech guide name TEXT INPUT */}
      <WEForm.Row>
        <WEInput 
            size="sm"
            id={"text_input_tgn"}
            name="name"
            value={formData.name}
            placeholder="Guide Name"
            onChange={(e) => setFormData({...formData,name:e.target.value})}
            autoComplete="off"
            style={{width:"100%"}} />
      </WEForm.Row>

      {/* TECH GUIDE PLATFORM SELECT INPUT */}
      <WEForm.Row>

        <WESelect 
            name="platform"
            value={formData.platform}
            placeholder="Choose Platform"
            options={platformOptions?.data && platformOptions?.data.map(platform => {
              return {id:platform.id,value:platform.value,label:platform.name}
            })}
            isMulti={false}
            isSearchable={false}
            onChange={(e) => setFormData({...formData,platform:e.target.value})} />


      </WEForm.Row>

      {/* TECH GUIDES TAGS SELECT INPUT */}
      <WEForm.Row>

        <WESelect 
            name="tags"
            value={formData.tags}
            placeholder="Select Tags"            
            options={tagsData.map(tag => {
              return {id:tag.id,value:tag.value,label:tag.name}
            })}
            isMulti={true}
            isSearchable={false}
            onChange={(e) => setFormData({...formData,tags:e.target.value})} />

      </WEForm.Row>

      {/* TECH GUIDES GROUP SELECT INPUT */}
      <WEForm.Row>

        <WESelect 
            name="group"
            value={formData.group}
            placeholder="Select Group"            
            options={groupsData.map(group => {
              return {id:group.id,value:group.value,label:group.name}
            })}
            isMulti={false}
            isSearchable={false}
            onChange={(e) => setFormData({...formData,group:e.target.value})} />

      </WEForm.Row>

      {/* TECH GUIDE FILE UPLOAD INPUT */}
      <WEForm.Row flex={1}>

        <WEFileDropZone 
          label={"Tech Guide"} 
          types={".pdf .txt .docx"} 
          icon={<FileUploadIcon width={60} height={60} />} 
          value={formData.guideFile} 
          onChange={onFileDropEvent} />

      </WEForm.Row>

      {/* FORM ACTION BUTTON */}
      <WEForm.Row>
        
        <WEButton onClick={formSubmit} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem"}} type='solid'>
            Create
        </WEButton>

      </WEForm.Row>

    </WEForm>
  );
}

export default AddTechGuideForm;