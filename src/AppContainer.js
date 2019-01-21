import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home';
import NotFound from './Notfound';
import About from './About';
import Form from './Form';
import Login from './Login';

class AppContainer extends Component {
   logout() {
      localStorage.clear();
      window.location.href = '/';
   }
   render() {
      const { location } = this.props;
      return (
         <div className="container">
         
            {location.pathname !== '/' && <section className="col-sm-12"> <Links /></section>}
            <section className="col-sm-12">
               <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/content" component={Content} />
                  <Route path="/form" component={Form} />
                  <Route component={NotFound} />
                  
                  {/*<Route  render={() => <h1>NotFound page</h1>}/> use this if u want to 404 error msg large*/} 
               </Switch>
            </section>
            {location.pathname !== '/' && <button className="btn btn-primary log-btn" onClick={() => this.logout()}>Logout</button>}
         </div>
      );
   }
}

export function Links() {
  
   return (
      <nav className="navbar navbar-inverse navbar-fixed-top container">
         <ul className="nav nav-tabs col-10">
            <li className="nav-item"><NavLink exact activeClassName="active" className="nav-link" to="/home">Home</NavLink></li>
            <li className="nav-item"><NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink activeClassName="active" className="nav-link" to="/content">Content</NavLink></li>
            <li className="nav-item"> <NavLink activeClassName="active" className="nav-link" to="/form">Form</NavLink></li>
         </ul>
      </nav>
   );
} 

export function Content() {
   return (
      <div className="col-6">
	     <ul className="nav navbar-nav d-inline-block list-inline">
            <li className="list-inline-item"><NavLink className="list-group-item" exact activeClassName="active" to="/content/city">City</NavLink></li>
            <li className="list-inline-item"><NavLink className="list-group-item" activeClassName="active" to="/content/sports">Sports</NavLink></li>
	     </ul>
         <div className="content-update">
            <Route path="/content/:contentName" component={contentDetails} />
         </div>
      </div>
   );
}

export function contentDetails(props) {
   return (
      <div>{props.match.params.contentName ? <div><img src={'http://lorempixel.com/400/200/' + props.match.params.contentName + '/1/'} alt={props.match.params.contentName} /></div> : null}</div>
   );
}

contentDetails.propTypes = {
   match: PropTypes.string
};

export default AppContainer;
