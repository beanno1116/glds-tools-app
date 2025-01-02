
class User {
  id = "";
  uid = "";
  userName = "";
  firstName = "";
  lastName = "";
  email = "";  
  phone = "";
  role = ""; 
  reportsTo = ""; 
  title = "";  
  authLevel = "";
  hireDate = "";
  creationDate = "";
  modifiedDate = "";

  fullName(){
    try {      
      return `${this.firstName} ${this.lastName}`;
    } catch (error) {
      console.error(`[user]Class Error: ${error.message}`);
    }
  }
  formatHireDate(){
    try {
      let dateStrArr = this.hireDate.split(" ");
      if (dateStrArr.length > 0) {
        return dateStrArr[0];
      }
      return this.hireDate;
    } catch (error) {
      console.error(`[user]Class Error: ${error.message}`);
    }
  }
  formatPhoneNumber(){
    try {      
      let phoneNumberStr = "("
      for (let i = 0; i < this.phone.length; i++) {
        const char = this.phone[i];
        if (i === 3){
          phoneNumberStr = phoneNumberStr + ")";
        }
        if (i === 6){
          phoneNumberStr = phoneNumberStr + "-";
        }
        phoneNumberStr = phoneNumberStr + char;
      }
      
      return phoneNumberStr;
    } catch (error) {
      console.error(`[user]Class Error: ${error.message}`);
    }
  }
}

export default User;