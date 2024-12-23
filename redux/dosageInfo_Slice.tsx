import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DosageData {
    [key: string]: string | number | boolean | object;
  }
  
  

// Define the shape of your state
interface DosageState {
  dosageData: DosageData;
  isLoading: boolean;
}

// Define initial state
const initialState: DosageState = {
  dosageData: {},
  isLoading: false,
};

const DosageSlice = createSlice({
  name: 'Dosage',  // Fixed typo in name
  initialState,
  reducers: {
    Add(state: DosageState, action: PayloadAction<DosageData>) {
      state.dosageData = {
        ...state.dosageData,
        ...action.payload,
      };
      state.isLoading = false;
      console.log('dosageData : ', state.dosageData);
    },
    // Remove(state: DosageState, action: PayloadAction<{ name: string }>) {
    //   state.dosageData = state.dosageData.filter(item => item.name !== action.payload.name);
    //   console.log(state.dosageData);
    // },
  },
});

export const { Add } = DosageSlice.actions;
export default DosageSlice.reducer;