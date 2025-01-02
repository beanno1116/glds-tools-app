import { Children, useState } from 'react';



import styles from './searchList.module.css';


import List from './components/List';
import Navbar from './Components/NavBar';
import WEButton from '../WEButton/WEButton';
import NTTPopover, {usePopover,positions} from '../NTTPopover/NTTPopover';
import WEInput from '../WEInput/WEInput';
import FilterSquareIcon from '../../assets/Icons/FilterSquareIcon';
import UserListItem from './Components/UserListItem';


const filterMethods = {
  platform: (filterQuery) => (item) => item.platform.toLowerCase() === filterQuery.toLowerCase(),
  group: (filterQuery) => (item) => item.group.toLowerCase() === filterQuery.toLowerCase(),
  tags: (filterQuery) => (item) => item.tags.toLowerCase().includes(filterQuery.toLowerCase())
}


const guidesData = [
  {
    id: 1,
    title: "How To Install Liquor management Loc SMS Plugin",
    platform: "Loc SMS",
    tags: "Install|Loc Plugin",
    group: "Install"
  },
  {
    id: 2,
    title: "How to setup SMSPayments gift cards",
    platform: "Loc SMS",
    tags: "Install|Loc Plugin|SMSPayments|Gift cards",
    group: "Configuration"
  },
  {
    id: 3,
    title: "How to install RMH Manager on backoffice",
    platform: "RMH",
    tags: "Install|RMH|RMH Manager|Backoffice",
    group: "install"
  },
  {
    id: 4,
    title: "How to backup a database in Sql Studio Management",
    platform: "Sql Studio",
    tags: "How to|Sql|backup",
  },
  {
    id: 5,
    title: "Setting up and configuring a Sonic Wall",
    platform: "Sonic Wall",
    tags: "How to|firewall|sonic wall|setup|configuration",
  },
]


const SearchList = ({ children,...props }) => {
  const [searchValue,setSearchValue] = useState("");
  const {isShowing,close,open} = usePopover();  
  const arrayChildren = Children.toArray(children);
  // const [listItems,setListItems] = useState(items);


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

            <NTTPopover close={close} open={open} show={isShowing} config={{position:positions.BOTTOM_RIGHT}} popover={<div></div>}>

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
        {children}
      </List>

      <List.Detail count={arrayChildren.length} />

    </div>
  );
}

SearchList.UserListItem = UserListItem;
SearchList.ListDetails = List.Detail;

export default SearchList;