import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import './css/main.scss';
import {isLogin} from './utils';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as containers from './containers';

const requireAuth = (nextState, replace) => {
  if (!isLogin()) {
    replace('/login');
  }
};

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path="/" component={containers.App}>
          <IndexRoute component={containers.Main} onEnter={requireAuth}/>
          <Route path="/login" component={containers.Authentication}/>
          <Route path="/trip" component={containers.Trip}/>
          <Route path="/video" component={containers.Video}/>
          <Route path="/video/detail" component={containers.VideoDetail}/>
          <Route path="/video/play" component={containers.VideoPlay}/>
          <Route path="/shop" component={containers.Shop}/>
          <Route path="/shop/product" component={containers.ShopProduct}/>
          <Route path="/cart" component={containers.Cart}/>
          <Route path="/order" component={containers.Order}/>
          <Route path="/meal" component={containers.Meal}/>
          <Route path="/meal/detail/:id" component={containers.MealDetail}/>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>, document.getElementById('root')
);
