import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
  <Router>
    <Layout>
      <Switch>BrowserRouter
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
    
    </Router>
  );
}

export default App;
