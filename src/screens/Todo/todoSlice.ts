import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ITodo {
  id: string;
  title: string;
  status: boolean;
}

const initialState: ITodo[] = [];

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.push(action.payload);
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const todoCurrent: ITodo | undefined = state?.find(
        ({id}) => id === action.payload,
      );

      if (todoCurrent) {
        todoCurrent.status = !todoCurrent.status;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {addTodo, toggleStatus} = counterSlice.actions;

export default counterSlice.reducer;
