import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import HeaderContainer from './components/Header/HeaderContainer';
import Cars from './components/Cars/Cars';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
    import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';

// React lazy load
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy( () => import('./components/Users/UsersContainer'));
    

class AppComponent extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="wrapper">
                <HeaderContainer />
                <Nav/>
                <div className='wrapper-content'>
                    <Route path="" exact={true} render={ () => <Redirect to="/profile"/> } />
                    <Route path="/profile/:userId?" render={ withSuspense(ProfileContainer) } />
                    <Route path="/dialogs" render={ withSuspense(DialogsContainer) } />
                    <Route path="/find-users" render={ withSuspense(UsersContainer) } />
                    <Route path="/login" render={ () => <Login />  } />
                    <Route path="/cars" render={ () => <Cars />  } />
                    <Route path="*" exact={true} render={ () => <div>404 not found</div>  } />
                </div>
            </div>
        );
    }   
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

const AppContainer = connect(mapStateToProps, {
    initializeApp,
})(AppComponent);

const App = (props) => {
    return (
        // <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}> 
                    <AppContainer />
                </Provider>
            </BrowserRouter>
        // </React.StrictMode>
    )
}

export default App;
