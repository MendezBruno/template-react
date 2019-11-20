import React, {Component, ReactNode} from 'react';
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import './App.css';
import routes from "./routes";

interface IProps {
  children: ReactNode;
  path: string;
}

class App extends Component  {

   AllRoutes = () => {
    // if ( !isAuthenticated() ) return <Redirect to="/login" />
    return (<div>
      {routes.map((route, index) => {
        return (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={( props: any )=> {
                  return (
                        <route.component {...props} />
                  );
                }}
            />
        );
      })}
    </div>)
  };

  // A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
   PrivateRoute({ children, ...rest }: IProps) {
     function isAuthenticated() {
       return true;
     }

       return (
          <Route
              {...rest}
              render={({ location }) =>
                  isAuthenticated() ? (
                      children
                  ) : (
                      <Redirect
                          to={{
                            pathname: "/login",
                            state: { from: location }
                          }}
                      />
                  )
              }
          />
      );
    }


  render() {
    return (
      <Router>
        <this.PrivateRoute path="*">
         <this.AllRoutes/>
        </this.PrivateRoute>
      </Router>
    );
  }
}

export default App;
