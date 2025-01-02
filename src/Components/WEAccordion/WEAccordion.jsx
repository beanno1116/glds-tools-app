import { useEffect, useRef, useState } from 'react';



import styles from './weAccordion.module.css';
import AccordionPanel from './components/AccordionPanel';


const demoAccordionData = [
  {
    text: "Grid is awesome",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, amet!"
  },
  {
    text: "It's full of neat tricks",
    content: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium harum autem delectus mollitia ab assumenda nemo facilis ea aliquam deleniti earum recusandae, eius, atque explicabo, expedita alias laboriosam labore iste",
      "Doloremque adipisci ea error ad architecto tempore ullam dolores voluptatibus. Perferendis debitis rem, aliquam, in laborum expedita iure soluta, sed blanditiis repellat eveniet minus cumque minima! Debitis numquam harum consequuntur?",
      "Provident, tempore sit. Eaque nam eius assumenda iste rem, ipsam quisquam cumque. Nobis rerum quod, saepe dolore distinctio voluptate sit excepturi iusto quaerat tempora reiciendis adipisci sed perspiciatis qui maiores."
    ]
  },
  {
    text: "Tell me more",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla possimus obcaecati hic cumque amet totam, labore placeat. Laudantium consequatur expedita nihil ipsam at porro!"
  }
]



const WEAccordion = ({ children,...props }) => {
 

  const elementRef = useRef(null);
  const currentPanelRef = useRef(null);

  useEffect(() => {
    //  if (currentPanelRef.current === null) return;
    //   const oldActiveButton = currentPanelRef.current.querySelector('button');
    //   const oldActivePanel = currentPanelRef.current.querySelector(`.${styles.content}`);
    //   const oldActivePanelIsOpened = oldActiveButton.getAttribute("aria-expanded");

    //   if (oldActivePanelIsOpened === true){
    //     oldActiveButton.setAttribute("aria-expanded", true);
    //     oldActivePanel.setAttribute("aria-hidden", false);
    //   }else {
    //     oldActiveButton.setAttribute("aria-expanded", false);
    //     oldActivePanel.setAttribute("aria-hidden", true);
    //   }
    return () => {
 
      // currentPanelRef.current = null;      
    }
  })

  const accordionClickEvent = (e) => {
    
    let filterItem = e.target.closest(`[data-filter]`);
    if (filterItem){
      return;
    }
    const activePanel = e.target.closest(`.${styles.panel}`);    
    if (!activePanel) return;
    toggleAccordion(activePanel);
  }

  const toggleAccordion = (panelToActivate) => {        
    if (currentPanelRef.current === null) {
      currentPanelRef.current = panelToActivate;
    }

    const activeButton = panelToActivate.querySelector(`button`);
    const oldActiveButton = currentPanelRef.current.querySelector('button');

    const activePanel = panelToActivate.querySelector(`.${styles.content}`);
    const oldActivePanel = currentPanelRef.current.querySelector(`.${styles.content}`);

    const activePanelIsOpened = activeButton.getAttribute("aria-expanded");
    const oldActivePanelIsOpened = oldActiveButton.getAttribute("aria-expanded");
    

    if (activePanelIsOpened === "true") {
      activeButton.setAttribute("aria-expanded", false);
      activePanel.setAttribute("aria-hidden", true);
    } else {
      activeButton.setAttribute("aria-expanded", true);
      activePanel.setAttribute("aria-hidden", false);
    }

    if (currentPanelRef.current == panelToActivate){
     return;
    }

    if (oldActivePanelIsOpened === true){
      oldActiveButton.setAttribute("aria-expanded", true);
      oldActivePanel.setAttribute("aria-hidden", false);
    }else {
      oldActiveButton.setAttribute("aria-expanded", false);
      oldActivePanel.setAttribute("aria-hidden", true);
    }
    currentPanelRef.current = panelToActivate;
  }

  return (
    <div ref={elementRef} className={styles.accordion} onClick={e => accordionClickEvent(e)}>
      {children}
    </div>
  );
}

WEAccordion.Panel = AccordionPanel;


export default WEAccordion;