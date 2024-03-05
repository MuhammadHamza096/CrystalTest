import { createStore } from 'redux';
import rootReducer from '../reducers/meal';

const store = createStore(rootReducer);

export default store;