import { useState } from 'react';
import TextField from '../../../../../../../../../../Components/Inputs/TextField';
import WEButton from '../../../../../../../../../../Components/WEButton/WEButton';
import WESelect from '../../../../../../../../../../Components/WESelect/WESelect';
import WEForm from '../../../../../../../../../../Forms/WEForm/WEForm';
import styles from './addEmployeeModalView.module.css';
import PasswordTextField from '../../../../../../../../../../Components/Inputs/PasswordTextField';
import employeeGraphic from '../../../../../../../../../../assets/Images/employeeGraphic.png'
import { request, useGetEmployeeDepartments, useGetEmployeeTypes, useGetUserLevels, useGetUsers } from '../../../../../../../../../../Api/api';
import { useAuth } from '../../../../../../../../../../hooks/useAuth';


const employeeTypes = [
  {
    id: "1",
    name: "Salesman",
    value: "salesman"
  },
  {
    id: "2",
    name: "Onsite Technician",
    value: "onsite technician"
  },
  {
    id: "3",
    name: "Phone Technician",
    value: "phone technician"
  },
  {
    id: "4",
    name: "Service Manager",
    value: "service manager"
  },
  {
    id: "5",
    name: "Developer",
    value: "developer"
  },
  {
    id: "6",
    name: "Project Manager",
    value: "project manager"
  },
  {
    id: "7",
    name: "Accountant",
    value: "accountant"
  },
  {
    id: "8",
    name: "Office Manager",
    value: "office manager"
  }
]
const employeeDepartments = [
  {
    id: "1",
    name: "Sales",
    value: "sales"
  },
  {
    id: "2",
    name: "Service",
    value: "service"
  },
  {
    id: "3",
    name: "Office",
    value: "office"
  },
  {
    id: "4",
    name: "Development",
    value: "development"
  },
  {
    id: "5",
    name: "Developer",
    value: "developer"
  },
  {
    id: "6",
    name: "Accounting",
    value: "accounting"
  },
]

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

const AddEmployeeModalView = ({ ...props }) => {
  const auth = useAuth();
  const [formData,setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    phone: "",
    ext: "",
    email: "",
    type: [],
    department: [],
    reportsTo: [],
    level: [],
    password: "",
    hireDate: new Date().toISOString().slice(0,19).replace('T',' ')
  })

  const {status:empTypeStatus,data:employeeTypes} = useGetEmployeeTypes();
  const {status:empDeptStatus,data:employeeDepartments} = useGetEmployeeDepartments();
  const {status:getUsersStatus,data:employees} = useGetUsers();
  const {status:getUserLevelsStatus,data:userLevels} = useGetUserLevels();

  const createEmployeeButtonClick = (e) => {
    try {
      const postData = {
        ...formData,
        department: formData.department[0].id.toString(),
        type: formData.type[0].id.toString(),
        reportsTo: formData.reportsTo.length > 0 ? formData.reportsTo[0].id.toString() : "0",
        userName: formData.email,
        level: formData.level[0].id.toString(),
        token: auth.token
      }
            
      const resetFormData = (response) => {
        if (response.success) {
          setFormData({
            userName: "",
            firstName: "",
            lastName: "",
            phone: "",
            ext: "",
            email: "",
            type: [],
            department: [],
            reportsTo: [],
            level: [],
            password: "",
            hireDate: new Date().toISOString().slice(0,19).replace('T',' ')
          })          
        }
      }

      request.post("users/create",postData,headers,resetFormData);
      
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className={styles.view}>
      <div className={styles.container}>
        <div className={styles.layout}>

          <div className={styles.asthetics_col}>
            <div className={styles.form_heading}>
              <h1>Create an employee</h1>
            </div>

            <img src={employeeGraphic} className={styles.graphic} alt="cartoon graphic of three employees" />
          </div>

          <div className={styles.form_col}>

            <WEForm layout={"flex"} style={{width:"100%",height:"100%",gap:"2rem"}}>

            {/* Name Row */}
            <WEForm.Row>

              <TextField value={formData.firstName} style={{flex:"1"}} name={"firstName"} placeholder="First name" onChange={e => setFormData({...formData,firstName:e.target.value})} />
              <TextField value={formData.lastName} style={{flex:"1"}} name={"lastName"} placeholder="Last name" onChange={e => setFormData({...formData,lastName:e.target.value})} />

            </WEForm.Row>


            {/* Phone and email Row */}
            <WEForm.Row>

              <TextField value={formData.phone} name={"phone"} style={{flex:".75"}} placeholder="Phone" onChange={e => setFormData({...formData,phone:e.target.value})} />
              <TextField value={formData.ext} name={"ext"} style={{flex:".2"}} placeholder="Ext" onChange={e => setFormData({...formData,ext:e.target.value})} />
              <TextField value={formData.email} name={"email"} style={{flex:"1"}} placeholder="Email" onChange={e => setFormData({...formData,email:e.target.value})} />

            </WEForm.Row>


            {/* Group and Category Row */}
            <WEForm.Row>

              <WESelect 
                name="type"
                value={formData.type}                      
                placeholder="Type"
                options={!empTypeStatus.isLoading && employeeTypes.map(type => {
                  return {id:type.id,value:type.id,label:type.name};
                })}
                isMulti={false}
                isSearchable={false}
                onChange={(e) => setFormData({...formData,type:e.target.value})} />      

              <WESelect 
                name="department"
                value={formData.department}                      
                placeholder="Department"
                options={!empDeptStatus.isLoading && employeeDepartments.map(dept => {
                  return {id:dept.id,value:dept.id,label:dept.name};
                })}
                isMulti={false}
                isSearchable={false}
                onChange={(e) => setFormData({...formData,department:e.target.value})} />      

            </WEForm.Row>

            <WEForm.Row>
              <WESelect 
                  name="reportsTo"
                  value={formData.reportsTo}                      
                  placeholder="Reports to"
                  options={!getUsersStatus.isLoading && employees.map(dept => {
                    return {id:dept.id,value:dept.id,label:`${dept.firstName} ${dept.lastName}`};
                  })}
                  isMulti={false}
                  isSearchable={false}
                  onChange={(e) => setFormData({...formData,reportsTo:e.target.value})} /> 

                <WESelect 
                  name="level"
                  value={formData.level}                      
                  placeholder="Level"
                  options={!getUserLevelsStatus.isLoading && userLevels.map(dept => {
                    return {id:dept.id,value:dept.id,label:dept.label};
                  })}
                  isMulti={false}
                  isSearchable={false}
                  onChange={(e) => setFormData({...formData,level:e.target.value})} /> 
            </WEForm.Row>

            <WEForm.Row>
              <PasswordTextField value={formData.password} name="password" style={{flex:"1"}} placeholder="Temporary password" onChange={e => setFormData({...formData,password:e.target.value})} />
              <TextField value={formData.hireDate} name={"hireDate"} style={{flex:".75"}} placeholder="Hire date" onChange={e => setFormData({...formData,hireDate:e.target.value})} />
            </WEForm.Row>

            <WEForm.Row>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                <label>Password Must Contain:</label>
                <ul style={{textAlign:"left"}}>
                  <li>1 Uppercase letter</li>
                  <li>1 Number</li>
                  <li>1 Character ! @ #</li>
                </ul>
              </div>
            </WEForm.Row>

            <WEForm.Row flex={1}></WEForm.Row>
            {/* FORM ACTION BUTTON */}
            <WEForm.Row style={{paddingTop:"1rem"}}>

                <WEButton onClick={createEmployeeButtonClick} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:"1"}} type='solid'>
                  Create
                </WEButton>
                
                <WEButton onClick={()=>{}} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:".25",borderColor:"#D6224668",backgroundColor:"transparent"}} type='solid'>
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

export default AddEmployeeModalView;