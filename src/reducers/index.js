import { combineReducers } from 'redux'
import { friendReducer } from './friend'
import { personReducer } from './person'

export const initialState = {
  person: {
    habitList: [
      {
        id: 1,
        name: "хоккей"
      },
      {
        id: 2,
        name: 'гитара'
      }
    ]
  },
  friend: {
    friendList: [
      {
        id: 1,
        name: "баскетбол"
      },
    ]
  }
};

export const rootReducer = combineReducers({
  person: personReducer,
  friend: friendReducer,
});
