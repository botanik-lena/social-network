import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        {/* <Route path="/dialogs" component={Dialogs} /> //1 способ через component, но так не передать props
          <Route path="/profile" component={Profile} /> */}

        <Route path="/dialogs" render={() => <Dialogs store={props.store} />} />
        <Route path="/profile" render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
      </div>
    </div>
  );
}

export default App;
