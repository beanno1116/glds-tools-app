import { useCallback, useState } from "react";


const usePanel = (initialView="add") => {
  const [currentView,setCurrentView] = useState(initialView);

  const updateView = useCallback((viewName) => {
    try {
      setCurrentView(viewName);
    } catch (error) {
      console.error(error.message);
    }
  })


  return {
    currentView,
    updateView,
  }
}

export default usePanel;