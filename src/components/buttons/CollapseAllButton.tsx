import { CgArrowsScrollV } from "react-icons/cg";
import { TbArrowsDiagonal } from "react-icons/tb";
import { CollapseAllButtonProps } from "../../types/types";

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { expandAll, collapseAll } from '../../store/rowSlice';

export default function CollapseAllButton({ allCollapse, handleCollapse }: CollapseAllButtonProps) {
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      {allCollapse ? (
        <div className="container-btn" >
          {/* <button className="collapse-all-btn" onClick={handleCollapse}> */}
          <button className="collapse-all-btn" onClick={() => {dispatch(expandAll()); handleCollapse()}}>
            Expand all items
            <TbArrowsDiagonal className="collapse-icon"/>
          </button>        
        </div>
      ) : (
        <div className="container-btn" >
          {/* <button className="collapse-all-btn" onClick={handleCollapse}> */}
          <button className="collapse-all-btn" onClick={() => {dispatch(collapseAll()); handleCollapse()}}>
            Collapse all items
            <CgArrowsScrollV className="collapse-icon collapse-rotate-icon"/>
          </button>
        </div>
      )}
    </>
  );
}
