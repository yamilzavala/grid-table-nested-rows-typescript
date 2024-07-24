import { RowProps } from "../../types/types";
import { getRowClassContainer, rotateArrows, toggleAllContainersChildren, toggleSingleContainerChildren, updateLevel4Cells, updateRootCells } from "../../utils/utils";
import Cell from "./Cell";
import { useState, useEffect } from "react";

export default function Row({
  wbsElement,
  level,
  levelDescription,
  description,
  legalDescription,
  children,
  collapse,
  id,
  showLastColumn
}: RowProps) {

  const [expanded, setExpanded] = useState<boolean>(!collapse);
  const [currentContainerChildrenId, setCurrentContainerChildrenId] = useState<string | null>(null);
 
  const renderedChildren = children?.map((child, idx) => {    
    return (     
        <Row key={idx} {...child} showLastColumn={showLastColumn}/>
    )
  });

  const handleShowChildren = (idContainer: string | null = null) => {
    setCurrentContainerChildrenId(idContainer)
    setExpanded(!expanded);
  };

  //effect to collapse or expand a single container from click in cell (arrow icon)
  useEffect(() => {   
    toggleSingleContainerChildren(currentContainerChildrenId, expanded)
  }, [expanded]);   

  //effect to collapse or expand children container from "Expand all" / "Collapse all" button
  useEffect(() => {      
      setExpanded(!expanded);
      toggleAllContainersChildren(expanded)
      updateRootCells(expanded);
      updateLevel4Cells();
      rotateArrows(expanded);
  }, [collapse]);

  useEffect(() => {           
      //updateRootCells(expanded);
      updateLevel4Cells();
  }, [showLastColumn]);

  return (
    <>
      {/* row */}
      <div id={id} className={getRowClassContainer(level, showLastColumn)} >  
          {/* cell 1 */}
          <Cell
            value={wbsElement}
            position={0}
            level={level}
            handleShowChildren={handleShowChildren}
            expanded={id === '0' ? true : expanded}
            id={id}
            idContainer={`children-container-${id}`}
          />

          {/* cell 2 */}
          <Cell value={levelDescription} position={1} expanded={expanded} id={id} level={level} />

          {/* cell 3 */}
          <Cell value={description} position={2} expanded={expanded} id={id} level={level} showLastColumn={showLastColumn}/>

          {/* cell 4 */}
         {showLastColumn && <Cell value={legalDescription} position={3} expanded={expanded} id={id} level={level}/>}
      </div>     

      {/* children container*/}      
      {children?.length ? 
        (          
          <div id={`children-container-${id}`} className='collapsed'>            
            {renderedChildren}        
          </div>
        ) : null
      }           
    </>
  );
}
