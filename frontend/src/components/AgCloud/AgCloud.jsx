import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'

import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import FrontPage from './FrontPage.jsx'
import SensorComponent from './SensorComponent.jsx'
import SRDashboardComponent from './SRDashboardComponent.jsx'
import EdgeStation from './EdgeStation'
import TotalAvailableEdgeStation from './TotalAvailableEdgeStation'


class AgCloud extends Component {
    render() {
        return (
            <div className="AgCloudApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={FrontPage}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/sensor" component={SensorComponent}/>
                            <Route path="/srdashboard" component={SRDashboardComponent}/>
                            <Route path="/edgestation" component={EdgeStation}/>
                            <Route path="/totaledgestation" component={TotalAvailableEdgeStation}/>
                            

                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                                                      
                            <Route component={ErrorComponent}/>
                        </Switch>
                        
                    </>
                </Router>
               
            </div>
        )
    }
}

export default AgCloud