import { useState } from 'react';
import FilterSquareIcon from '../../../../../../../../../assets/Icons/FilterSquareIcon';
import WEButton from '../../../../../../../../../Components/WEButton/WEButton';
import WEInput from '../../../../../../../../../Components/WEInput/WEInput';
import styles from '../../manageTechGuides.module.css';
import NTTPopover, { usePopover,positions } from '../../../../../../../../../Components/NTTPopover/NTTPopover';
import FilterGuidesForm from '../../../../../../../../../Forms/PopoverForms/FilterGuidesForm/FilterGuidesForm';
import Navbar from './components/Navbar';
import List from './components/List';

const filterMethods = {
  platform: (filterQuery) => (item) => item.platform.toLowerCase() === filterQuery.toLowerCase(),
  group: (filterQuery) => (item) => item.group.toLowerCase() === filterQuery.toLowerCase(),
  tags: (filterQuery) => (item) => item.tags.toLowerCase().includes(filterQuery.toLowerCase())
}




const TechGuideList = ({ ...props }) => {
  const [searchValue,setSearchValue] = useState("");
  const {isShowing,close,open} = usePopover();
  const {status,data} = useGet
  const [listItems,setListItems] = useState(guidesData);


  const onApplyFilter = (e,filters) => {

    if (filters.length === 0) {
      setListItems(guidesData);
      close();
      return;
    }

    const listItemsCopy = [...guidesData];
    let filteredItems = [...listItemsCopy];    

    for (let i = 0; i < filters.length; i++) {
      const filter = filters[i];
      let filterType = filter.filterType;
      let filterQuery = filter.filterQuery;

      let filterFn = filterMethods[filterType](filterQuery);

      filteredItems = listItemsCopy.filter(filterFn);
      
    }    
    setListItems([...filteredItems]);
    close();    
  }

  return (
    <div className={styles.list_component}>

      <Navbar>

        <Navbar.Buttons>

          <Navbar.NavButton>   

            <NTTPopover close={close} open={open} show={isShowing} config={{position:positions.BOTTOM_RIGHT}} popover={<FilterGuidesForm applyFilter={onApplyFilter} />}>

              <WEButton onClick={()=>{}} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem"}} type='solid'>
                <FilterSquareIcon width={18} height={18} />
              </WEButton>

            </NTTPopover>

          </Navbar.NavButton>

        </Navbar.Buttons>

        <Navbar.SearchField>
          <WEInput 
                size="sm"
                type="search"
                id={"text_input_sf"}
                name="searchValue"
                value={searchValue}
                placeholder="Search"
                onChange={(e) => setSearchValue(e.target.value)}
                autoComplete="off"
                style={{width:"100%"}} />
        </Navbar.SearchField>

      </Navbar>

      <List>
        {listItems.map(item => {
          return (
            <List.Item key={item.id} title={item.title} platform={item.platform} tags={item.tags} />
          )
        })}
      </List>

      <List.Detail count={listItems.length} />

    </div>
  );
}

export default TechGuideList;