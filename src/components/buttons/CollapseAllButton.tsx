import { CgArrowsScrollV } from "react-icons/cg";
import { TbArrowsDiagonal } from "react-icons/tb";
import { CollapseAllButtonProps } from "../../types/types";

export default function CollapseAllButton({ allCollapse, handleCollapse }: CollapseAllButtonProps) {
  return (
    <>   
      {allCollapse ? (
        <div className="container-btn" >
          <button className="collapse-all-btn" onClick={handleCollapse}>
            Expand all items
            <TbArrowsDiagonal className="collapse-icon"/>
          </button>        
        </div>
      ) : (
        <div className="container-btn" >
          <button className="collapse-all-btn" onClick={handleCollapse}>
            Collapse all items
            <CgArrowsScrollV className="collapse-icon collapse-rotate-icon"/>
          </button>
        </div>
      )}
    </>
  );
}
