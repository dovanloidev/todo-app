import {combineReducers} from '@reduxjs/toolkit';
import todoSlice from '../screens/Todo/todoSlice';

export default combineReducers({
  todoList: todoSlice,
});
