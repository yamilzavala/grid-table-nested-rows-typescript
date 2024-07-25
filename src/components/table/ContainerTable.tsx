import Table from "./Table";
import { useEffect, useState} from "react";


export default function ContainerTable() {
  const [showLastColumn, setShowLastColumn] = useState<boolean>(true)
  
  const toggleLastColumn = () => {
    setShowLastColumn(!showLastColumn);
  };

  return (
    <main>
      <button onClick={toggleLastColumn}>
        {showLastColumn ? 'hide last column' : 'show last column'}
      </button>

      <Table showLastColumn={showLastColumn}/>
    </main>
  );
}
