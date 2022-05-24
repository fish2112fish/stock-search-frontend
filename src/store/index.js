import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import MenuReducer from './menu';

const MainReducer = combineReducers({
  menu: MenuReducer
});


const store = configureStore({
    reducer: MainReducer
});

export default store