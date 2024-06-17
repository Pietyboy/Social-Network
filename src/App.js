import React from 'react';
// Components
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home';
import { initializeApp } from './redux/appReducer';
import { connect, Provider } from "react-redux";
import { compose } from 'redux';
import withParams from './hoc/withParams';
import Preloader from './components/Common/Preloader/Preloader';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import store from './redux/reduxStore';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <section className='wrapper'>
            <SideBar />
            <Home />
          </section>
        </div>
      );
    }
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(withParams, connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
  return (
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </HashRouter>
    </React.StrictMode>
  )
}

export default MainApp;