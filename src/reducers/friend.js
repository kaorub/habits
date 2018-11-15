import * as types from "../constants/actionTypes";

const initialState = {
  friendList: [
    {
      id: 1,
      name: 'верстка'
    }
  ],
}

export function friendReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND_HABIT:
      const newId = state.friendList[state.friendList.length-1].id + 1;
      return {
        friendList: [
          ...state.friendList,
          {
            id: newId,
            name: action.name
          }
        ]
      };

    case types.WARN_HABIT:
      return {
        friendList: state.friendList.map(habit => {
          return habit.id === action.id ?
            Object.assign({}, habit, { warned: !habit.warned }) :
            habit
        })
      };

    default:
      return state;
  }
}