import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings'
//import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
// import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './Components/Common/Preloader';
import Counter from './counter';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import ('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import ('./Components/Profile/ProfileContainer'))

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("some erorr")
    // console.error(promiseRejectionEvent)
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
            <Route path="/users" render={ () => <UsersContainer /> }/>
            <Route path="/news" render={ () => <News /> }/>
            <Route path="/music" render={ () => <Music /> }/>
            <Route path="/settings" render={ () => <Settings /> }/>
            <Route path="/login" render={ () => <Login /> }/>
            <Route path="/counter" render={() => <Counter /> }/>
          </Switch>
        </div>
      </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}



let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

  const SamuraiJSApp = (props) => {
    return <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  }
export default SamuraiJSApp