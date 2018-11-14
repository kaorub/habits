import * as types from '../constants/actionTypes';
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
      const newId = state.habitList[state.habitList.length-1] + 1;
      return {
        habitList: {
          ...state.habitList,
          [newId]: {
            id: newId,
            name: action.name
          }
        }
      }

    case types.DELETE_HABIT:
      console.log(state.habitList.filter(habit => habit.id !== action.id));
      return {
        ...state,
        habitList: state.habitList.filter(habit => habit.id !== action.id)
      }

    case types.WARN_HABIT:
      return {
        ...state,
        habitList: state.habitList.map(habit => {
          return habit.id === action.id ?
            Object.assign({}, habit, { warned: !habit.warned }) :
            habit
        })
      }

    default:
      return state;
  }
}