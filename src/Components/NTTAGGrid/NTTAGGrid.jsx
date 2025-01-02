import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import styles from './nttAGGrid.module.css';

const defaultOptions = {
  onGridReady: () => {

  },
  onCellClicked: (e) => {
    return e.node.id;
  },
  onCellValueChanged: (e) => {
    console.log(`New Cell Value: ${e.value}`);
  },
  theme: 'ag-theme-quartz-dark',
  defaultColDef: {...{}},
  columnTypes: {...{}},
  editType:"fullRow",
  animatedRows:true,
  getRowStyle:params => {
    
    if (params.node.rowIndex % 2 === 0){
      return {background:"red"}
    }
  }
}

const NTTAGGrid = ({ rowData,columnDefs,options=defaultOptions,theme='ag-theme-quartz-dark',...props }) => {
  let gridOptions = {...defaultOptions,...options};
  const {columnTypes,defaultColDef} = gridOptions;
  
  return (
    <div className={`${styles.grid_container} ${theme}`} style={{height:"100%"}} {...props}>      
        <AgGridReact   
          modules={[ClientSideRowModelModule]}       
          rowData={rowData}
          columnDefs={columnDefs}
          columnTypes={columnTypes}
          defaultColDef={defaultColDef}
          {...gridOptions}
        /> 
      </div>
  );
}

export default NTTAGGrid;