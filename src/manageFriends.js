// const initialState = { numberOfFriends: 0 };


export function manageFriends(currentState = {friends: []}, action){

  switch(action.type) {
    case 'friends/add':
      return {
        ...currentState,
        friends: [
          ...currentState.friends, action.payload
        ]
      }
    case 'friends/remove':
      return {...currentState, friends: currentState.friends.filter(friend =>friend.id !== action.payload)}
    default:
      return currentState
  }
}