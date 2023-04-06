import { configureStore } from 'redux';

const initialState = { tasks: [] };

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, action.payload] };
    case 'REMOVE_TASK':
      return { tasks: state.tasks.filter(task => task.id !== action.payload) };
    default:
      return state;
  }
}

const store = configureStore(taskReducer);

export default store;