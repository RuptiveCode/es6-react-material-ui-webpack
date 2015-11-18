import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/pages/Home';
import VendorReport from './components/pages/VendorReport';
import { Router, Route, IndexRoute, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import './styles/main.css';
import AppTheme from './styles/AppTheme';

import mui from 'material-ui';

let ThemeManager         = new mui.Styles.ThemeManager.getMuiTheme(AppTheme),
    AppBar               = mui.AppBar,
    LeftNav              = mui.LeftNav,
    MenuItem             = mui.MenuItem,
    SvgIcon              = mui.SvgIcon,
    FlatButton           = mui.FlatButton,
    IconButton           = mui.IconButton,
    FloatingActionButton = mui.FloatingActionButton,
    FontIcon             = mui.FontIcon;

let injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

export default class App extends React.Component {

    constructor(props) {
        super(props);    
    }
    
    render() {
        var key = this.props.location.pathname;

        return (
            <div className="app-container"> 
                <ReactCSSTransitionReplace component="div" transitionName="page" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                   {React.cloneElement(this.props.children || <div />, { key: key })}
                </ReactCSSTransitionReplace>
            </div>
        );
    }
}

class AppContainer extends React.Component {

    static childContextTypes = {
        mui: React.PropTypes.object.isRequired
    };    

    getChildContext() {
        return {
          mui: mui
        };
    }      

    render() {
        return (
          <Router>
            <Route path="/" component={App}>
              <IndexRoute component={Home}/>
              <Route path="vendor-report" component={VendorReport} />
            </Route>
          </Router>
        );
    }
}


ReactDOM.render(<AppContainer />, document.getElementById('app'));