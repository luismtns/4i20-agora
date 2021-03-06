import React, { Suspense }  from 'react';
import { ConnectedRouter } from 'connected-react-router';

import {
  Switch,
  Route,
} from 'react-router-dom';

import history from './History';
import ScrollToTop from './ScrollToTop';

import ApplicationLayout from '@views/layouts/ApplicationLayout';

const HomeView = React.lazy(() => import('@views/home'));
const NotFoundView = React.lazy(() => import('@views/errors/NotFound'));

import Loader from '@components/loader';

export default () => {
  return (
    <ConnectedRouter history={history}>
      <ApplicationLayout>
        <ScrollToTop />

        <Suspense fallback={<Loader visible />}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="*" component={NotFoundView} />
          </Switch>
        </Suspense>
      </ApplicationLayout>
    </ConnectedRouter>
  );
};
