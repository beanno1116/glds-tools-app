import { useCallback, useState } from "react";
import FileUploadIcon from "../../../../../../../../assets/Icons/FileUploadIcon";
import WEButton from "../../../../../../../../Components/WEButton/WEButton";
import WEFileDropZone from "../../../../../../../../Components/WEFileDropZone/WEFileDropZone";
import WEInput from "../../../../../../../../Components/WEInput/WEInput";
import WESelect from "../../../../../../../../Components/WESelect/WESelect";
import WEForm from "../../../../../../../../Forms/WEForm/WEForm";
import axios from "axios";
import SquareAddIcon from "../../../../../../../../assets/Icons/SquareAddIcon";
import WEModal from "../../../../../../../../Components/WEModal/WEModal";
import useModal from "../../../../../../../../Components/WEModal/hooks/useModal";
import AddCustomerFormModal from "../../../../../../../../Modals/AddCusomterFormModal/AddCustomerFormModal";
import { states } from "../../../../../../../../Utilities";
import { request, useGetCustomers } from "../../../../../../../../Api/api";


const statuses = [
  {
    id: 0,
    value: "sent",
    label: "Sent"
  },
  {
    id: 1,
    value: "approved",
    label: "Approved"
  },
  {
    id: 2,
    value: "ordered",
    label: "Ordered"
  },
  {
    id: 2,
    value: "paid",
    label: "Paid"
  }
]

const customersData = [
  {
    id:1,
    cid: "abcdefgh",
    companyName: "Glds Market Place",
    phoneNumber: "(248)-356-4100",
    altPhoneNumber: "",
    address: "324 West Park Ave",
    addressTwo: "",
    state: "Mi",
    zipcode: "48111",
    city: "Detroit"
  },
  {
    id:2,
    cid: "ijklmnopq",
    companyName: "Fake A$$ Market",
    phoneNumber: "(248)-543-1123",
    altPhoneNumber: "(313)-643-2363",
    address: "5231 Fuller St",
    addressTwo: "",
    state: "Mi",
    zipcode: "48180",
    city: "Taylor"
  }
]

const headers = {
  "Accept": "multipart/form-data",
  "Content-Type": "multipart/form-data"
}

const AddSaleForm = ({ users=[] }) => {
  const [formData,setFormData] = useState({
    salesman: [],
    storeName: "",
    customer: [],
    city: "",
    state:[],
    estimate: "",
    status: [],
    manager: [],
    invoiceFile: {}
  });
  const {status,data} = useGetCustomers();
  const [customers,setCustomers] = useState([...customersData]);
  const {modalState,toggleModal} = useModal();

  const formSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const postData = {
      ...formData,
      manager:formData.manager[0].value.toString(),
      salesman:formData.salesman[0].value.toString(),
      status:formData.status[0].value.toString(),
      customer: formData.customer[0].value.toString()
    }

    const resetFormData = (response) => {
      try {
        if (response.success){
          console.log("Added sale successfully")
          setFormData({
            salesman: [],
            storeName: "",
            customer: [],
            city: "",
            state:"",
            estimate: "",
            status: [],
            manager: [],
            invoiceFile: {}
          })
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    request.post("sales/create",postData,headers,resetFormData)
  }

  const addCustomerButtonClick = (e) => {
    toggleModal();
  }

  const addCustomerModalAction = useCallback((e,customer=undefined) => {    
    if (customer){
      setCustomers([...customers,customer]);
    }
    toggleModal();
  },[customers,setCustomers,toggleModal])

  return (
    <>
      
      <WEForm style={{gap:".75rem"}}>

        {/* SALESMAN SELECT INPUT */}
        <WEForm.Row>

          <WESelect 
              name="salesman"
              value={formData.salesman}
              placeholder="Choose Salesman"
              options={users.map(usr => {
                return {id:usr.uid,value:usr.uid,label:usr.username}
              })}
              isMulti={false}
              isSearchable={false}
              onChange={(e) => setFormData({...formData,salesman:e.target.value})} />

        </WEForm.Row>

        {/* CUSTOMER SELECT INPUT */}
        <WEForm.Row>

          <WESelect 
              name="customer"
              disabled={customers.length === 0 ? true : false}
              value={formData.customer}
              placeholder="Choose Customer"
              options={data?.data && data?.data.map(customer => {
                return {id:customer.cid,value:customer.cid,label:customer.companyName}
              })}
              isMulti={false}
              isSearchable={false}
              onChange={(e) => setFormData({...formData,customer:e.target.value})} />

            <WEButton onClick={addCustomerButtonClick} title={"Add user"} style={{width:"48px",padding:"0",backgroundColor:"#00A36A"}} type='solid'>
              <SquareAddIcon width={20} height={20} />
            </WEButton>

        </WEForm.Row>

        {/* STORENAME TEXT INPUT */}
        <WEForm.Row>
          <WEInput 
              size="sm"
              id={"text_input_sn"}
              name="storeName"
              value={formData.storeName}
              placeholder="Store Name"
              onChange={(e) => setFormData({...formData,storeName:e.target.value})}
              autoComplete="off"
              style={{width:"100%"}} />
        </WEForm.Row>

        {/* LOCATION TEXT INPUT */}
        <WEForm.Row>

          <WEInput 
            size="sm"
            id={"text_input_sc"}
            name="city"
            value={formData.city}
            placeholder="City"
            onChange={(e) => setFormData({...formData,city:e.target.value})}
            autoComplete="off"
            style={{flex:".66"}} />

            

          <WESelect 
            name="state"
            style={{"--flex":".34"}}
            value={formData.state}
            placeholder="State"            
            options={Object.keys(states).map(state => {
              return {id:state,value:state,label:state}
            })}
            isMulti={false}
            isSearchable={false}
            onChange={(e) => setFormData({...formData,state:e.target.value})} />

        </WEForm.Row>

        {/* ESTIMATE VALUE TEXT INPUT */}
        <WEForm.Row>
          <WEInput 
              size="sm"
              id={"text_input_es"}
              name="estimate"
              value={formData.estimate}
              placeholder="Estimate"
              onChange={(e) => setFormData({...formData,estimate:e.target.value})}
              autoComplete="off"
              style={{width:"100%"}} />
        </WEForm.Row>

        {/* STATUS SELECT INPUT */}
        <WEForm.Row>

          <WESelect 
              name="status"
              value={formData.status}
              placeholder="Choose Status"
              options={statuses}
              isMulti={false}
              isSearchable={false}
              onChange={(e) => setFormData({...formData,status:e.target.value})} />

        </WEForm.Row>

        {/* MANAGER SELECT INPUT */}
        <WEForm.Row>

          <WESelect 
              name="manager"
              value={formData.manager}
              placeholder="Choose Manager"
              options={users.map(usr => {
                return {id:usr.uid,value:usr.uid,label:usr.username}
              })}
              isMulti={false}
              isSearchable={false}
              onChange={(e) => setFormData({...formData,manager:e.target.value})} />

        </WEForm.Row>

        <WEForm.Row>

          <WEFileDropZone label={"Invoice"} types={".pdf"} icon={<FileUploadIcon width={60} height={60} />} />

        </WEForm.Row>

        {/* FORM ACTION BUTTON */}
        <WEForm.Row>
          <WEButton onClick={formSubmit} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem"}} type='solid'>
              Create
            </WEButton>
        </WEForm.Row>



      </WEForm>
      
      <WEModal config={{showCloseButton:false}} style={{padding:"2rem"}} isOpen={modalState} toggle={toggleModal}>
            
        <AddCustomerFormModal modalAction={addCustomerModalAction}/>
            
      </WEModal>

    </>    
  );
}

export default AddSaleForm;