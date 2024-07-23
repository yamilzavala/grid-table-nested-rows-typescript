import {
  //MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { CollapseButtonProps } from "../../types/types";

export default function CollapseButton({ handleShowChildren = () => {}, expanded, id, idContainer}: CollapseButtonProps) {

  return (
    <>
      {expanded ? (
        <button id={id} disabled={id === '0'} onClick={(e) => {e.preventDefault();handleShowChildren(idContainer)}} className="btn-arrow ">
          <MdOutlineKeyboardArrowUp />
        </button>
      ) : (
        <button id={id} disabled={id === '0'} onClick={(e) => {e.preventDefault();handleShowChildren(idContainer)}} className="btn-arrow btn-arrow-rotated">
          <MdOutlineKeyboardArrowUp /> 
        </button>
      )}    
    </>
    
  );
}
