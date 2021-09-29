import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Menu = lazy(() => import('./Menu'));
const routes = [
  { path: '/1', component: lazy(() => import('./Day1')) },
  { path: '/2', component: lazy(() => import('./Day2')) },
];

const App = () => (
  <Router>
    <Switch>
      <Suspense fallback={null}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact
          />
        ))}
        <Route path="/">
          <Menu />
        </Route>
      </Suspense>
    </Switch>
  </Router>
);

export default App;
