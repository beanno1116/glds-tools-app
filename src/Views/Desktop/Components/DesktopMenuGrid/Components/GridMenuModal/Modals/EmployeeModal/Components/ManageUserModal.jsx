import { useState } from 'react';
import { useGetUsers } from '../../../../../../../../../Api/api';
import PencilIcon from '../../../../../../../../../assets/Icons/PencilIcon';
import WEButton from '../../../../../../../../../Components/WEButton/WEButton';
import DashboardView from '../../ModalTemplate/Components/DashboardView/DashboardView';
import EmployeeListViewWidgetItem from '../../ModalTemplate/Components/ListViewWidget/Components/EmployeeListViewWidgetItem';
import ListViewWidget from '../../ModalTemplate/Components/ListViewWidget/ListViewWidget';
import styles from '../employeeModal.module.css';

const ManageUserModal = ({ toggleModal,...props }) => {
  const {status,data} = useGetUsers();
  const [selectedEmployee,setSelectedEmployee] = useState();
  const employee = data?.filter(p => parseInt(p.id) === parseInt(selectedEmployee))[0];
  

  const onListItemClick = (e,employeeId) => {    
    setSelectedEmployee(employeeId);
  }

  const onCancelButtonClick = (e) => {
    toggleModal();
  }

  const onSaveButtonClick = (e) => {
    toggleModal();
  }

  return (
    <div className={styles.modal_manage}>
       
       
       <ListViewWidget heading={""} showButton={false}>

          {status.isLoading && <div>Loading...</div>}

          {!status.isLoading && data.map(employee => {            
            return (
              <EmployeeListViewWidgetItem 
                key={employee.id}
                id={employee.id}
                name={`${employee.firstName} ${employee.lastName}`}
                jobTitle={employee.title}
                jobType={employee.type}
                onClick={onListItemClick}
              />
            )
          })}

        </ListViewWidget>

        <DashboardView>

          <div className={styles.user_form_widget}>

            {/* EMPLOYEE NAME AND HIRE DATE DETAILS */}
            <div className={styles.user_form_containter}>
              
              <div className={styles.user_form_section}>
                <label className={styles.modal_widget_label}>Name:</label>
                <span className={styles.modal_widget_detail_span}>{`${employee ? employee.fullName() : ""}`}</span>
                {/* <span className={styles.modal_widget_detail_span}>{`${employee?.firstName ? employee.firstName : ""} ${employee?.lastName ? employee.lastName : ""}`}</span> */}
              </div>

              <div className={styles.user_form_section}>
                <label className={styles.modal_widget_label}>Hire Date:</label>
                <span className={styles.modal_widget_detail_span}>{`${employee?.hireDate ? employee.formatHireDate() : ""}`}</span>                
              </div>
              
            </div>            
            
            {/* EMPLOYEE EMPLOYMENT AND CONTACT DETAILS */}
            <div className={styles.user_form_containter}>

                {/* EMPLOYEE EMPLOYMENT DETAILS */}
                <div className={styles.user_form_widget_emp_details}>
                  <div className={styles.modal_widget_title}>
                    <h5>Employment Details</h5>
                    <div className={styles.widget_edit_button_wrapper}>
                      <WEButton onClick={()=>{}} title={"Add user"} style={{height:"75%",aspectRatio:"1 / 1", padding:"0",backgroundColor:"#00A36A"}} type='solid'>
                        <PencilIcon width={18} height={18} />
                      </WEButton>
                    </div>
                  </div>
                  <div className={styles.modal_widget_container}>
                    <div className={styles.modal_widget_row}>
                      <label className={styles.modal_widget_label}>Title:</label>
                      <span className={styles.modal_widget_detail_span}>{employee?.title ? employee.title : ""}</span>
                    </div>
                    <div className={styles.modal_widget_row}>
                      <label className={styles.modal_widget_label}>Role:</label>
                      <span className={styles.modal_widget_detail_span}>{employee?.role ? employee.role : ""}</span>
                    </div>
                  </div>              
                </div>

                {/* EMPLOYEE CONTACT DETAILS */}
                <div className={styles.user_form_widget_emp_details}>
                  <div className={styles.modal_widget_title}>
                    <h5>Contact Details</h5>
                    <div className={styles.widget_edit_button_wrapper}>
                      <WEButton onClick={()=>{}} title={"Add user"} style={{height:"75%",aspectRatio:"1 / 1", padding:"0",backgroundColor:"#00A36A"}} type='solid'>
                        <PencilIcon width={18} height={18} />
                      </WEButton>
                    </div>
                  </div>
                  <div className={styles.modal_widget_container}>
                    <div className={styles.modal_widget_row}>
                      <label className={styles.modal_widget_label}>Phone:</label>
                      <span className={styles.modal_widget_detail_span}>{employee?.phone ? employee.formatPhoneNumber() : ""}</span>
                    </div>
                    <div className={styles.modal_widget_row}>
                      <label className={styles.modal_widget_label}>Email:</label>
                      <span className={styles.modal_widget_detail_span}>{employee?.email ? employee.email : ""}</span>
                    </div>
                  </div>              
                </div>
                
            </div>

            {/* REPORTS TO AND MANAGES DETAILS */}
            <div className={styles.user_form_containter}>

              {/* EMPLOYEE REPORTS TO DETAIL */}
              <div className={styles.user_form_widget_emp_details}>
                <div className={styles.modal_widget_title}>
                  <h5>Reports to</h5>
                  <div className={styles.widget_edit_button_wrapper}>
                      <WEButton onClick={()=>{}} title={"Add user"} style={{height:"75%",aspectRatio:"1 / 1", padding:"0",backgroundColor:"#00A36A"}} type='solid'>
                        <PencilIcon width={18} height={18} />
                      </WEButton>
                    </div>
                </div>
                <div className={styles.modal_widget_container}>
                    <div className={styles.modal_widget_row}>                      
                      <span className={styles.modal_widget_detail_span}>{employee?.reportsTo ? employee.reportsTo : ""}</span>
                    </div>
                  </div>
              </div>
              {/* EMPLOYEE MANAGES DETAIL */}
              <div className={styles.user_form_widget_emp_details}>


                <div className={styles.modal_widget_title}>
                  <h5>Manages</h5>
                  <div className={styles.widget_edit_button_wrapper}>
                      <WEButton onClick={()=>{}} title={"Add user"} style={{height:"75%",aspectRatio:"1 / 1", padding:"0",backgroundColor:"#00A36A"}} type='solid'>
                        <PencilIcon width={18} height={18} />
                      </WEButton>
                    </div>
                </div>

                <div className={`${styles.modal_widget_container} ${styles.flex_row}`}>    
                  {employee && data?.filter(usr => {                    
                    if (usr.reportsTo.toLowerCase() === employee.fullName().toLowerCase()){
                      return true;
                    }
                    return false
                  }).map(rt => {
                    return (
                      <div key={rt.id} className={styles.modal_widget_row}>                      
                        <span key={rt.id} className={styles.modal_widget_detail_span}>{`${rt.firstName} ${rt.lastName}`}</span>
                      </div>)                    
                  })}              

                    {/* <div className={styles.modal_widget_row}>                      
                      <span className={styles.modal_widget_detail_span}>Avi Adamson</span>
                    </div>

                    <div className={styles.modal_widget_row}>                      
                      <span className={styles.modal_widget_detail_span}>Josh Dude</span>
                    </div> */}
                    
                </div>
                
              </div>
            </div>

            {/* EMPLOYEE TEAMS AND AUTH LEVEL DETAIL */}
            <div className={styles.user_form_containter}>

            {/* EMPLOYEE TEAMS DETAIL */}
            <div className={styles.user_form_widget_emp_details}>
              <div className={styles.modal_widget_title}>
                <h5>Teams</h5>
                <div className={styles.widget_edit_button_wrapper}>
                    <WEButton onClick={()=>{}} title={"Add user"} style={{height:"75%",aspectRatio:"1 / 1", padding:"0",backgroundColor:"#00A36A"}} type='solid'>
                      <PencilIcon width={18} height={18} />
                    </WEButton>
                  </div>
              </div>
              <div className={`${styles.modal_widget_container} ${styles.flex_row}`}>
                {/* <div className={styles.modal_widget_row}>
                  <label className={`${styles.modal_widget_label} ${styles.flex_1}`}>Development</label>
                </div>
                <div className={styles.modal_widget_row}>
                  <label className={`${styles.modal_widget_label} ${styles.flex_1}`}>Install</label>
                </div>
                <div className={styles.modal_widget_row}>
                  <label className={`${styles.modal_widget_label} ${styles.flex_1}`}>SES</label>
                </div> */}
              </div>
            </div>

            {/* EMPLOYEE AUTH LEVEL DETAIL */}
            <div className={styles.user_form_widget_emp_details}>
              <div className={styles.modal_widget_title}>
                <h5>Auth Level</h5>
                <div className={styles.widget_edit_button_wrapper}>
                    <WEButton onClick={()=>{}} title={"Add user"} style={{height:"75%",aspectRatio:"1 / 1", padding:"0",backgroundColor:"#00A36A"}} type='solid'>
                      <PencilIcon width={18} height={18} />
                    </WEButton>
                  </div>
              </div>
              <div className={`${styles.modal_widget_container} ${styles.flex_row}`}>
                <div className={`${styles.modal_widget_row}  ${styles.flex_1}`}>
                  <label className={`${styles.modal_widget_label} ${styles.align_center}`}>{employee?.authLevel ? employee.authLevel : ""}</label>
                </div>
              </div>
            </div>

            </div>
            <div style={{visibility:"hidden",flex:"1"}}></div>
            <div className={styles.user_form_button_container}>

              <WEButton onClick={onCancelButtonClick} title={"Add user"} style={{flex:".25"}} type='solid'>
                Cancel
              </WEButton>
              <WEButton onClick={onSaveButtonClick} title={"Add user"} style={{flex:".25"}} type='solid'>
                Save
              </WEButton>
            </div>

          </div>

        </DashboardView>

    </div>
  );
}

export default ManageUserModal;