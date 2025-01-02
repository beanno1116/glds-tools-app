import styles from './guidesModalView.module.css';


import useGuideGrid from '../../../../../../../../../../hooks/useGuideGrid';
import Toolbar from './components/Toolbar/Toolbar';
import GridCard from './components/GridCard/GridCard';
import Content from './components/Content';
import useToggle from '../../../../../../../../../../hooks/useToggle';
import { useState } from 'react';
import GuideDetailModal from './components/GuideDetailModal/GuideDetailModal';
import { useGetTechGuides } from '../../../../../../../../../../Api/api';







const GuidesModalView = ({ ...props }) => {
  const {status,data} = useGetTechGuides();
  const {isToggled,toggle} = useToggle();
  const [selectedCard,setSelectedCard] = useState(-1);
  const [searchValue,setSearchValue] = useState("");

  const renderList = () => {
    debugger;
    if (status.isLoading) return [];
    if (searchValue !== ""){
      return data.filter(d => JSON.stringify(d).toLowerCase().includes(searchValue.toLowerCase()));
    }
    return data;
  }

  const guides = renderList();


  const handleViewClickEvent = (e,cardId) => {
    setSelectedCard(cardId);
    toggle();
  }

  return (
    <>
      <div className={styles.view}>
        <div className={styles.container}>
          <div className={styles.layout}>

            <Toolbar>
              <Toolbar.FilterSearch value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
              <Toolbar.ViewTypeSelector />
            </Toolbar>
            
            <Content>
              {guides.map(item => {
                return (
                  <GridCard key={item.id}>
                    <GridCard.Title name={item.name} />
                    <GridCard.Body />
                    <GridCard.Footer onViewClick={(e) => handleViewClickEvent(e,item.id)}/>
                  </GridCard>
                )
              })}
            </Content>

          </div>
        </div>
      </div>

      {/* PLUGIN SELECTOR LIST MODAL */}
      <div className={`${styles.guide_detail_modal_popup} ${isToggled ? styles.showing : ""}`}>        
        <GuideDetailModal toggle={toggle} guide={data && data.filter(d => d.id === selectedCard)[0]}/>        
      </div>
    </>
  );
}

export default GuidesModalView;