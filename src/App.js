import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppContainer from './AppContainer';

class App extends Component {
  
   render() {
      
      return (
         <Router>              
            <Switch>
               <Route path="/" component={AppContainer} />
               {/*<Route  render={() => <h1>NotFound page</h1>}/> use this if u want to 404 error msg large*/} 
            </Switch>
         </Router>
      );
     
   }
}


export default App;
