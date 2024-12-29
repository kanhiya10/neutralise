import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DosageLog {
  time: string;
  dose: number;
  taken: boolean;
  medicationName: string;
}

interface DosageData {
  [date: string]: DosageLog[];
}

interface DosageState {
  dosageData: DosageData;
  isLoading: boolean;
}

interface AddDosagePayload {
  date: string;
  log: DosageLog;
}

const initialState: DosageState = {
  dosageData: {},
  isLoading: false,
};

const DosageSlice = createSlice({
  name: 'Dosage',
  initialState,
  reducers: {
    Add(state: DosageState, action: PayloadAction<AddDosagePayload>) {
      const { date, log } = action.payload;
      
      if (!state.dosageData[date]) {
        state.dosageData[date] = [];
      }
      
      state.dosageData[date].push(log);
      state.isLoading = false;
      console.log('dosageData : ', state.dosageData);
    },
  },
});

export const { Add } = DosageSlice.actions;
export default DosageSlice.reducer;







// dispatch(Add({
//   date: '2024-03-20',
//   log: {
//     time: '09:00 AM',
//     dose: 1,
//     taken: false,
//     medicationName: 'Med A'
//   }
// }));