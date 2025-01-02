import { useRef, useState } from 'react';
import SmallCloseIcon from '../../../assets/Icons/SmallCLoseIcon';
import WEAccordion from '../../../Components/WEAccordion/WEAccordion';
import WEButton from '../../../Components/WEButton/WEButton';
import styles from './filterGuidesForm.module.css';


const findFilterIndex = (filters,filterObj) => {
  try {
    if (filters.length === 0) return -1;
    let filterIndex = -1;
    for (let i = 0; i < filters.length; i++) {
      const filter = filters[i];
      if ((filter.filterType === filterObj.filterType) && (filter.filterQuery === filterObj.filterQuery) ){
        filterIndex = i;
        break;
      }
    }
    return filterIndex;
  } catch (error) {
    console.error(error.message);
  }
}
const parseFilterObject = (filterStr) => {
  try {    
    let filterItemArr = filterStr.split(":");
    if (filterItemArr.length === 0) throw new Error(`ERROR: Unable to parse filter string: ${filterStr}`);
    return {
      filterType: filterItemArr[0],
      filterQuery: filterItemArr[1]
    }
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

const FilterGuidesForm = ({ applyFilter,...props }) => {
  const [filters,setFilters] = useState([]);
  const filterDivRef = useRef(null);

  

  const filterItemClicked = (e,filter) => {
    e.stopPropagation();
    
    let filterObj = parseFilterObject(filter);

    if (!filterObj) return;

    let filtersCopy = [...filters];

    let index = findFilterIndex(filtersCopy,filterObj);

    if (index === -1) {
      filtersCopy.push(filterObj);
    }else{
      filtersCopy.splice(index,1)
    }

    setFilters([...filtersCopy]);    
  }

  const clearFiltersClickEvent = (e) => {
    setFilters([]);
    let filterItems = filterDivRef.current.querySelectorAll("[data-filter]");
    filterItems.forEach(item => {
      item.querySelector("input").checked = false;      
    });
  }

  const applyFiltersEvent = (e) => {
    try {      
      if (!applyFilter) throw new Error("ERROR: Cannot execute undefined applyFilter method");      
      applyFilter(e,filters); 
    } catch (error) {
      console.error(error.message);
    }    
  }

  return (
    <div ref={filterDivRef} className={styles.filter_guides_popover}>
       
       <h4 className={styles.title}>Apply Filters</h4>
       
       <div className={styles.filter_list_container}>

        <div className={styles.filter_list_wrapper}>

          <div className={styles.clear_filter_item}>
            {filters.length !== 0 ? (<span className={styles.filter_count}>{filters.length}</span>) : null}
            <span className={styles.clear_filter}>Clear Filters</span>
            <span className={styles.clear_filter_icon} onClick={clearFiltersClickEvent}><SmallCloseIcon width={24} height={24} /></span>
          </div>

          <WEAccordion>

            <WEAccordion.Panel>
              <WEAccordion.Panel.Header text={"Platform"}/>
              <WEAccordion.Panel.Content>
                
                <div className={styles.filter_list_panel}>

                  <div className={styles.filter_item_list}>
                    <div data-filter className={styles.filter_item}><label htmlFor='pf1'>Loc SMS</label><span><input id='pf1' type='checkbox' onChange={e => filterItemClicked(e,"platform:Loc SMS")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='pf2'>Windows</label><span><input id='pf2' type='checkbox' onChange={e => filterItemClicked(e,"windows")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='pf3'>ESuite</label><span><input id='pf3' type='checkbox' onChange={e => filterItemClicked(e,"esuite")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='pf4'>RMH</label><span><input id='pf4' type='checkbox' onChange={e => filterItemClicked(e,"platform:RMH")}/></span></div>
                  </div>

                  <div className={styles.filter_item_list}>
                    <div data-filter className={styles.filter_item}><label htmlFor='pf5'>Sql Studio</label><span><input id='pf5' type='checkbox' onChange={e => filterItemClicked(e,"platform:Sql Studio")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='pf6'>Verifone</label><span><input id='pf6' type='checkbox' onChange={e => filterItemClicked(e,"verifone")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='pf7'>Sonic Wall</label><span><input id='pf7' type='checkbox' onChange={e => filterItemClicked(e,"platform:Sonic Wall")}/></span></div>                  
                  </div>

                  <div className={styles.filter_item_list}>
                    <div data-filter className={styles.filter_item}><label htmlFor='pf5'>Sql Studio</label><span><input id='pf5' type='checkbox' onChange={e => filterItemClicked(e,"platform:Sql Studio")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='pf6'>Verifone</label><span><input id='pf6' type='checkbox' onChange={e => filterItemClicked(e,"verifone")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='pf7'>Sonic Wall</label><span><input id='pf7' type='checkbox' onChange={e => filterItemClicked(e,"platform:Sonic Wall")}/></span></div>                  
                  </div>
                  <div className={styles.filter_item_list}>
                    <div data-filter className={styles.filter_item}><label htmlFor='pf5'>Sql Studio</label><span><input id='pf5' type='checkbox' onChange={e => filterItemClicked(e,"platform:Sql Studio")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='pf6'>Verifone</label><span><input id='pf6' type='checkbox' onChange={e => filterItemClicked(e,"verifone")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='pf7'>Sonic Wall</label><span><input id='pf7' type='checkbox' onChange={e => filterItemClicked(e,"platform:Sonic Wall")}/></span></div>                  
                  </div>

                </div>

              </WEAccordion.Panel.Content>
            </WEAccordion.Panel>
            
            <WEAccordion.Panel>
              <WEAccordion.Panel.Header text={"Tags"}/>
              <WEAccordion.Panel.Content>

                <div className={styles.filter_list_panel}>

                  <div className={styles.filter_item_list}>
                    <div data-filter className={styles.filter_item}><label htmlFor='tf1'>Install</label><span><input id='tf1' type='checkbox' onChange={e => filterItemClicked(e,"tags:Install")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='tf2'>Loc Plugin</label><span><input id='tf2' type='checkbox' onChange={e => filterItemClicked(e,"tags:Loc Plugin")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='tf3'>Firewall</label><span><input id='tf3' type='checkbox' onChange={e => filterItemClicked(e,"tags:firewall")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='tf4'>Configuration</label><span><input id='tf4' type='checkbox' onChange={e => filterItemClicked(e,"tags:configuration")}/></span></div>
                  </div>
                  <div className={styles.filter_item_list}>
                    <div data-filter className={styles.filter_item}><label htmlFor='tf5'>SMSPayments</label><span><input id='tf5' type='checkbox' onChange={e => filterItemClicked(e,"tags:SMSPayments")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='tf6'>How to</label><span><input id='tf6' type='checkbox' onChange={e => filterItemClicked(e,"tags:How to")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='tf7'>RMH</label><span><input id='tf7' type='checkbox' onChange={e => filterItemClicked(e,"tags:RMH")}/></span></div>
                  </div>
                  
                </div>

              </WEAccordion.Panel.Content>
            </WEAccordion.Panel>

            <WEAccordion.Panel>
              <WEAccordion.Panel.Header text={"Group"}/>
              <WEAccordion.Panel.Content>

                <div className={styles.filter_list_panel}>

                  <div className={styles.filter_item_list}>
                    <div data-filter className={styles.filter_item}><label htmlFor='gf1'>Install</label><span><input id='gf1' type='checkbox' onChange={e => filterItemClicked(e,"g_install")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='gf2'>Fixes</label><span><input id='gf2' type='checkbox' onChange={e => filterItemClicked(e,"g_fixes")}/></span></div>
                    <div data-filter className={styles.filter_item}><label htmlFor='gf3'>Pin Pads</label><span><input id='gf3' type='checkbox' onChange={e => filterItemClicked(e,"g_pinpads")}/></span></div>                    
                  </div>
                  <div className={styles.filter_item_list}></div>

                  </div>

              </WEAccordion.Panel.Content>
            </WEAccordion.Panel>

          </WEAccordion>

          <div className={styles.filter_apply_button}>
            <WEButton onClick={applyFiltersEvent} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem"}} type='solid'>
              Apply
            </WEButton>
          </div>

        </div>

       </div>
    </div>
  );
}

export default FilterGuidesForm;