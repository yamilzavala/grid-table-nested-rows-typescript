import Table from "./Table";
import { useState, useEffect } from "react";
import { dataLevelsNested, columns } from "../../data/data";
import { RowProps } from "../../types/types";

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function ContainerTable() {
  const data = useSelector((state: RootState) => state.rows.data);
  console.log('data: ', data)

  //const [rows, setData] = useState<RowProps | null>(null); //this state fetch levels from endpoint
  const [showLastColumn, setShowLastColumn] = useState<boolean>(true)
  
  const toggleLastColumn = () => {
    setShowLastColumn(!showLastColumn);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setData(dataLevelsNested);
  //   }, 1500)
  // }, []);

  return (
    <main>
      <button onClick={toggleLastColumn}>
        {showLastColumn ? 'hide last column' : 'show last column'}
      </button>

      {/* <Table rows={rows} columns={columns} showLastColumn={showLastColumn}/> */}
      <Table rows={data} columns={columns} showLastColumn={showLastColumn}/>
    </main>
  );
}
