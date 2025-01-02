import { useState } from "react"


const useToggle = (initialState=false) => {  
  const [isToggled,setToggleState] = useState(initialState);

  const toggle = (state = null) => {
    if (state){
      setToggleState(state);
      return;
    }
    setToggleState(!isToggled);
  }

  return {
    isToggled,
    toggle
  }
}

export default useToggle;