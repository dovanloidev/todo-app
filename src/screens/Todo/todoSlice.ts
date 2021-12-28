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
    removeTodo: (state, action: PayloadAction<string>) => {
      const todoIndex = state.findIndex(({id}) => id === action.payload);
      state.splice(todoIndex, 1);
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      const todoIndex = state.findIndex(({id}) => id === action.payload.id);
      state[todoIndex] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addTodo, toggleStatus, removeTodo, updateTodo} =
  counterSlice.actions;

export default counterSlice.reducer;
