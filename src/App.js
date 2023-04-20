import logo from './logo.svg';
import './assets/App.scss';
import { ContactIndex } from './views/ContactIndex';
import { AppHeader } from './cmps/AppHeader';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { ContactDetails } from './views/ContactDetails';
import { ContactEdit } from './views/ContactEdit';
import { SignUp } from './views/SignUp';
import { Login } from './views/Login';
import { UserStats } from './views/UserStats';
import { HomePage } from './views/HomePage';
import { AppFooter } from './views/AppFooter';

function App() {
    return (
      <Router>
      <div className="App">
        <AppHeader />
        <hr className='main-hr'/>
        <main className='main-app'>
            <Switch>
              <Route path="/contact/edit/:id?" component={ContactEdit} />
              <Route path="/contact/:id" component={ContactDetails} />
              <Route path="/contact" component={ContactIndex}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/login" component={Login}/>
              <Route path="/statistics" component={UserStats}/>
              <Route path="/" component={HomePage}/>
          </Switch>
        </main>
          <AppFooter/>
      </div>
      </Router>

    );
  }

export default App;
