import { createStore } from 'redux'
import { rootReducer } from '../reducers'
import { initialState } from '../reducers';

export const store = createStore(rootReducer, initialState)

store.subscribe(() => {
  console.log(store.getState());
});