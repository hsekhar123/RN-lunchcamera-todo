import {createSlice} from '@reduxjs/toolkit';
export interface DataType {
  id: number;
  title: string;
  imageUri: string;
}
interface ReduxState {
  data: DataType[];
}
const initialState: ReduxState = {
  data: [],
};
const AddDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    selectData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteItem: (state, action) => {
      const existignData = state.data.filter(
        item => item.id !== action.payload,
      );
      state.data = existignData;
    },
  },
});
export const {selectData, deleteItem} = AddDataSlice.actions;
export default AddDataSlice.reducer;
