import * as types from "../constants/actionTypes";

const initialState = {
  habitList: [
  	{
  		id: '1',
  		name: 'Сноубординг'
  	},
  	{
  		id: '2',
  		name: 'Бег трусцой'
  	}
  ],
}

export function personReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_HABIT:
      const newId = state.habitList[state.habitList.length-1].id + 1;
      return {
        habitList: [
          ...state.habitList,
          {
            id: newId,
            name: action.name
          }
        ]
      }

    case types.DELETE_HABIT:
      return {
          habitList: state.habitList.filter(habit => habit.id !== action.id)
      }

    default:
      return state;
  }
}