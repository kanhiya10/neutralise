import { createSlice } from '@reduxjs/toolkit';

// Define the shape of your state
interface DosageState {
  count: number;
 
}

// Define initial state
const initialState: DosageState = {
  count: 1,
  
};

const PlatformSlice = createSlice({
  name: 'countPlatform',
  initialState,
  reducers: {
    // Increase count by 1
    ReInitialize(state){
        state.count=1;
    },
    Increase(state) {
      state.count += 1;
      

      console.log('countValue :' ,state.count);
    },

    // Decrease count by 1 (if count is greater than 0)
    Decrease(state) {
      if (state.count > 1) {
        state.count -= 1;
        
      }
      console.log('countValue :',state.count);
    },
  },
});

// Export the actions and the reducer
export const { Increase, Decrease,ReInitialize } = PlatformSlice.actions;
export default PlatformSlice.reducer;
