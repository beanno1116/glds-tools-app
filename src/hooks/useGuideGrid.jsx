import { useCallback, useEffect, useState } from "react";
import { useGetTechGuides } from "../Api/api";


const useGuideGrid = () => {
  const {status,data} = useGetTechGuides();
  const [rowData,setRowData] = useState([]);
  const [colDefs,setColDefs] = useState([]);
  const [selectedRow,setSelectedRow] = useState(-1);

  const selectedGuide = (selectedRow === -1) ? {} : data[selectedRow];

  const createRowData = () => {
    if (status.isLoading) return;
    let rd = data ? data : [];
    const rows = rd.map(d => {
      return {
        id: d.id,
        name: d.name,
        platform: d.platform,
        category: d.category,
        tags: d.tags.replaceAll("|",","),
        group: d.group,        
      }
    })
    return rows 
  }
  const createColumnDefs = () => {
    
    const defs = [
      {headerName:"id",field:"id",width:100},
      {headerName:"Name",field:"name",flex: 1},
      {headerName:"Platform",field:"platform",cellStyle: {color: 'red'}},
      {headerName:"Category",field:"category"},
      {headerName:"Tags",field:"tags",flex:1},
      {headerName:"Group",field:"group"}
    ]
    return defs;
  }
  useEffect(()=> {
    if (!status.isLoading){
      setRowData(createRowData());
      setColDefs(createColumnDefs());
    }
  },[status.isLoading,data])

  const onCellClicked = useCallback((e) => {
    try {            
      let node = e.node;
      if (!e?.node) return;
      setSelectedRow(node.id);
    } catch (error) {
      console.error(error.message);
    }
  },[])

  return {
    rowData,
    colDefs,    
    selectedGuide,
    onCellClicked
  }
}

export default useGuideGrid;