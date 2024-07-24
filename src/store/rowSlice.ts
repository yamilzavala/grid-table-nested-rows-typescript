import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {dataLevelsNested} from '../data/data';
import { RowProps } from '../types/types';

interface RowState {
    expandedRows: string[];
    data: typeof dataLevelsNested;
}

const initialState: RowState = {
    expandedRows: ["0"],
    data: dataLevelsNested,
};

const getAllRowIds = (data: RowProps): string[] => {
    let ids: string[] = [];
    ids.push(data.id);

    data?.children?.forEach(item => {
      ids.push(item.id);
      if (item.children) {
        ids = [...ids, ...getAllRowIds(item)];
      }
    });
    return ids;
};

const rowSlice = createSlice({
    name: 'rows',
    initialState,
    reducers: {
      toggleRow: (state, action: PayloadAction<string>) => {
        const rowId = action.payload;
        if (state.expandedRows.includes(rowId)) {
          state.expandedRows = state.expandedRows.filter(id => id !== rowId);
        } else {
          state.expandedRows.push(rowId);
        }
      },

      expandAll: (state) => {
        state.expandedRows = getAllRowIds(state.data);
      },
      
      collapseAll: (state) => {
        state.expandedRows = ["0"];
      }
    }
  });

export const { toggleRow, expandAll, collapseAll } = rowSlice.actions;
export default rowSlice.reducer;