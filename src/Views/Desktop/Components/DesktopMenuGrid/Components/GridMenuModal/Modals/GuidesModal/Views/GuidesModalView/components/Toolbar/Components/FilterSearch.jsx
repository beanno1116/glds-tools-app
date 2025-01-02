import { useState } from 'react';
import FilterSquareIcon from '../../../../../../../../../../../../../assets/Icons/FilterSquareIcon';
import TextField from '../../../../../../../../../../../../../Components/Inputs/TextField';
import WEButton from '../../../../../../../../../../../../../Components/WEButton/WEButton';
import styles from '../toolbar.module.css';
import FilterGuidesForm from '../../../../../../../../../../../../../Forms/PopoverForms/FilterGuidesForm/FilterGuidesForm';

const FilterSearch = ({ value,onChange,...props }) => {
  const [isShowing,setIsShowing] = useState(false);
  

  const showPopover = () => {
    setIsShowing(!isShowing);
  }
  return (
    <div className={styles.tool_bar_search}>
      <WEButton onClick={showPopover} style={{anchorName:"--filter-btn",padding:".75rem .75rem",fontSize:"1.25rem"}} type='solid'>
        <FilterSquareIcon width={18} height={18} />
      </WEButton>
      <div className={`${styles.anchor_target} ${isShowing ? styles.showing : ""}`}>
        <FilterGuidesForm applyFilter={()=>{}} />        
      </div>
      <TextField type="search" size="sm" placeholder="Search" value={value} onChange={onChange} style={{width:"300px"}}/>
      {/* <input type='search' placeholder='Search' value={value} onChange={onChange} style={{height:"100%",borderRadius:"6px",paddingLeft:".5rem",backgroundColor:"hsl(209, 23%, 20%)",border:"0"}} />               */}
    </div>
  );
}

export default FilterSearch;