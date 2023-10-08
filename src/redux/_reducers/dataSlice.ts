import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  name: string;
  hobby: string;
}

const initialState: DataState = {
  name: '',
  hobby: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setNameAndHobby: (
      state,
      action: PayloadAction<{
        name: string;
        hobby: string;
      }>,
    ) => {
      state.name = action.payload.name;
      state.hobby = action.payload.hobby;
    },
  },
});

export const { setNameAndHobby } = dataSlice.actions;

export default dataSlice.reducer;
