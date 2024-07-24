import Table from "./Table";
import { useState} from "react";


export default function ContainerTable() {
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

      <Table showLastColumn={showLastColumn}/>
    </main>
  );
}
