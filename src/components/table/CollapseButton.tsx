import {
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { CollapseButtonProps } from "../../types/types";

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { toggleRow } from '../../store/rowSlice';

export default function CollapseButton({ handleShowChildren = () => {}, id, idContainer}: CollapseButtonProps) {
  const dispatch: AppDispatch = useDispatch();
  const expandedRows = useSelector((state: RootState) => state.rows.expandedRows);
  const isExpanded = expandedRows.includes(id);

  const toggle = () => {
    dispatch(toggleRow(id));
  };
  
  return (
    <>
      {isExpanded ? (
        <button id={id} disabled={id === '0'} onClick={(e) => {e.preventDefault(); toggle(); handleShowChildren(idContainer)}} className="btn-arrow ">        
          <MdOutlineKeyboardArrowUp />
        </button>
      ) : (
        <button id={id} disabled={id === '0'} onClick={(e) => {e.preventDefault(); toggle(); handleShowChildren(idContainer)}} className="btn-arrow btn-arrow-rotated">
          <MdOutlineKeyboardArrowUp /> 
        </button>
      )}    
    </>
    
  );
}
