import { createBrowserHistory, createMemoryHistory } from 'history';
import { urls } from './urls.mock';

const isTest = process.env.NODE_ENV === 'test';

export const history = isTest ? createMemoryHistory({ initialEntries: [urls.Home] }) : createBrowserHistory();
