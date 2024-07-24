import { useState } from "react";
import { CollapseAllButton, GoToTopButton } from "../buttons";
import { ShimmerSkeleton } from "../skeleton";
import RowList from "./RowList";
import { TableProps } from "../../types/types";

export default function Table({ rows, columns, showLastColumn }: TableProps) {
  const [allCollapse, setAllCollapse] = useState<boolean>(true);
  const [goToTop, setGoToTop] = useState<boolean>(false);

  const handleCollapse = () => {  
    setAllCollapse(prev => !prev);     
  };

  const handleSetGoToTop = () => {
    setGoToTop(!goToTop)
  }

  return (
    <section className="section-container-table">
      {rows ? (
       <div className="container-table">
        <CollapseAllButton
          allCollapse={allCollapse}
          handleCollapse={handleCollapse}
        />      
        <RowList goToTop={goToTop} rows={rows} allCollapse={allCollapse} columns={columns} showLastColumn={showLastColumn}/>
        <GoToTopButton handleSetGoToTop={handleSetGoToTop}/>
       </div> 
      ) : (
        <ShimmerSkeleton/>
      )}
      
    </section>
  );
}
