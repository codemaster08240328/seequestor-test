import React from 'react';
import {
  Route,
  Switch,
  useLocation,
  useHistory
} from 'react-router-dom';

import { PageHeader } from 'antd';

import './App.css';
import 'antd/dist/antd.css';

import ArticleList from './pages/article-list';
import ArticleDetail from './pages/article-detail';

function App() {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="App">
      <PageHeader
        data-testid="page-header__component"
        className="page-header__component"
        title={<span onClick={() => history.push('/')} style={{color: 'white', cursor: 'pointer'}}>{location.pathname === '/' ? 'All Articles' : 'Article Detail'}</span>}
      />
      <Switch>
        <Route path="/" exact component={ArticleList} />
        <Route path="/topic/:id" component={ArticleDetail} />
      </Switch>
    </div>
  );
}

export default App;
