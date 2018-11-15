import * as types from '../constants/actionTypes';

export function addHabit(name) {
  return {
    type: types.ADD_HABIT,
    name
  };
}

export function addFriendHabit(name) {
  return {
    type: types.ADD_FRIEND_HABIT,
    name
  };
}

export function deleteHabit(id) {
  return {
    type: types.DELETE_HABIT,
    id
  };
}

export function warnHabit(id) {
  return {
    type: types.WARN_HABIT,
    id
  };
}