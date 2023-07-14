import { combineReducers, createStore } from 'redux';

import issuePageReducer from './issuePage';
import loadDiscriminationReducer from './loading';

const rootReducer = combineReducers({
  page: issuePageReducer,
  isLoading: loadDiscriminationReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
