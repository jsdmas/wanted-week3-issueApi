import { combineReducers, createStore } from 'redux';

import issueDataReducer from './issueData';
import issuePageReducer from './issuePage';
import loadDiscriminationReducer from './loading';

const rootReducer = combineReducers({
  page: issuePageReducer,
  isLoading: loadDiscriminationReducer,
  data: issueDataReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
