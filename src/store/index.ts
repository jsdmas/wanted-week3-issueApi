import { combineReducers, createStore } from 'redux';

import issuePageReducer from './issuePage';

const rootReducer = combineReducers({ page: issuePageReducer });

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
