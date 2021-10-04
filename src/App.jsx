import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Menu = lazy(() => import('./Menu'));
const routes = [
  { path: '/1', component: lazy(() => import('./Day1')) },
  { path: '/2', component: lazy(() => import('./Day2')) },
  { path: '/3', component: lazy(() => import('./Day3')) },
  { path: '/4', component: lazy(() => import('./Day4')) },
];

const App = () => (
  <Router>
    <Suspense fallback={null}>
      <Switch>
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
      </Switch>
    </Suspense>
  </Router>
);

export default App;
