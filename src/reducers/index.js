import { combineReducers } from 'redux'
import { friendReducer } from './friend'
import { personReducer } from './person'
import * as types from '../constants/actionTypes';

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
    habitList: [
    ]
  }
};

export const rootReducer = combineReducers({
  person: personReducer,
  friend: friendReducer,
})

// export default function rootReducer(state = initialState, action = {}) {
//   switch (action.type) {

//     case types.ADD_HABIT:
//       const newId = state.habitList[state.habitList.length-1] + 1;
//       return {
//         habitList: {
//           ...state.habitList,
//           [newId]: {
//             id: newId,
//             name: action.name
//           }
//         }
//       }

//     case types.DELETE_HABIT:
//       return {
//         ...state,
//         habitList: state.habitList.filter(habit => habit.id !== action.id)
//       }

//     case types.WARN_HABIT:
//       return {
//         ...state,
//         habitList: state.habitList.map(habit => {
//           return habit.id === action.id ?
//             Object.assign({}, habit, { warned: !habit.warned }) :
//             habit
//         })
//       }

//     default:
//       return state;
//   }
// }
