import { useState } from "react";
import { CollapseAllButton, GoToTopButton } from "../buttons";
import { ShimmerSkeleton } from "../skeleton";
import RowList from "./RowList";
import { TableProps } from "../../types/types";

export default function Table({ showLastColumn }: TableProps) {
  const [allCollapse, setAllCollapse] = useState<boolean>(true);
  const [goToTop, setGoToTop] = useState<boolean>(false);

  const handleCollapse = () => {  
    setAllCollapse(prev => !prev);     
  };

  const handleSetGoToTop = () => {
    setGoToTop(!goToTop)
  }

  let loading = false;

  return (
    <section className="section-container-table">     
     {/* {rows ? ( */}
     {!loading ? (
       <div className="container-table">
        <CollapseAllButton
          allCollapse={allCollapse}
          handleCollapse={handleCollapse}
        />      
        <RowList goToTop={goToTop} allCollapse={allCollapse} showLastColumn={showLastColumn}/>
        <GoToTopButton handleSetGoToTop={handleSetGoToTop}/>
       </div> 
      ) : (
        <ShimmerSkeleton/>
      )}
      
    </section>
  );
}
