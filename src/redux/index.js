import { createStore, combineReducers } from "redux";

const reducer = combineReducers({
	// state in store
});

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;