import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'

import MachineAddComponent from './MachineAddComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import FrontPage from './FrontPage.jsx'
import SensorComponent from './SensorComponent.jsx'
import SRDashboardComponent from './SRDashboardComponent.jsx'
import EdgeStation from './EdgeStation'
import TotalAvailableEdgeStation from './TotalAvailableEdgeStation'
import SensorData from './SensorData'
import BillingComponent from './BillingComponent'

import SMDashboardComponent from './SR/SMDashboardComponent.jsx'

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
                            <Route path="/machineadd" component={MachineAddComponent}/>
                            <Route path="/totaledgestation" component={TotalAvailableEdgeStation}/>
                            <Route path="/sensordata" component={SensorData}/>
                            <Route path="/billing" component={BillingComponent}/>
                            <Route path="/servicerequest" component={SMDashboardComponent}/>
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