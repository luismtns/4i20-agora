import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import layoutReducer from './layout/LayoutReducer';
import notificationReducer from './notification/NotificationReducer';

const createRootReducer = (history) => combineReducers({
  form: formReducer,
  router: connectRouter(history),
  layout: layoutReducer,
  notification: notificationReducer,
});

export default createRootReducer;
