import CollapseButton from "./CollapseButton";
import { setClassLevel, setPaddingLevel } from "../../utils/utils";
import { CellProps } from "../../types/types";

export default function Cell({
  value,
  position,
  level,
  handleShowChildren,
  expanded,
  id,
  idContainer = null,
  showLastColumn
}: CellProps) {

    return (
      <div id={id}
        className={setClassLevel(level, expanded, position, +id, showLastColumn)}
        style={{ paddingLeft: setPaddingLevel(position, level) }}
      >
        {level < 4 && position === 0 && (
          <CollapseButton
            handleShowChildren={handleShowChildren}
            id={id}
            idContainer={idContainer}
          />
        )}
        <div className='standard-cell'>{value}</div>
      </div>
    );

}
