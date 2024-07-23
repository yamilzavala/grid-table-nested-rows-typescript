import Table from "./Table";
import { useState, useEffect } from "react";
import { dataLevelsNested, columns } from "../../data/data";
import { RowProps } from "../../types/types";

export default function ContainerTable() {
  const [rows, setData] = useState<RowProps | null>(null); //this state fetch levels from endpoint
  const [showLastColumn, setShowLastColumn] = useState<boolean>(true)
  
  const toggleLastColumn = () => {
    setShowLastColumn(!showLastColumn);
  };

  useEffect(() => {
    setTimeout(() => {
      setData(dataLevelsNested);
    }, 1500)
  }, []);

  return (
    <main>
      <button onClick={toggleLastColumn}>
        {showLastColumn ? 'hide last column' : 'show last column'}
      </button>

      <Table rows={rows} columns={columns} showLastColumn={showLastColumn}/>
    </main>
  );
}
