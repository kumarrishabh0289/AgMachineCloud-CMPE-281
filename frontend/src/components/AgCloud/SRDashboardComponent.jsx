import React, { Component } from 'react'
import MonitorComponent from './MonitorComponent.jsx'
import BillingComponent from './BillingComponent.jsx'
import SMDashboardComponent from './SR/SMDashboardComponent.jsx'

class SRDashboardComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            welcomeMessage: 'Hey You Are Authorized',
            showResultsAdd: false,
            showResultsDelete: false,
            showResultsUpdate: false

        }


        this.onClick = this.onClick.bind(this);
        this.onClickUpdate = this.onClickUpdate.bind(this);

        this.onClickDelete = this.onClickDelete.bind(this);

        
    }

    onClick() {
        this.setState({ showResultsAdd: true , showResultsUpdate:false   , showResultsDelete: false  });
    }
    onClickUpdate() {
        this.setState({ showResultsUpdate: true , showResultsDelete: false   ,  showResultsAdd: false  });
    }
    onClickDelete() {
        this.setState({ showResultsDelete: true ,  showResultsUpdate: false  , showResultsAdd: false });
    }

    render() {
        const divStyle = {
            marginLeft: '10px',
            marginBottom: '10px'

          };
        return (
                  <div className="container">
                        <div  style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)" }}>

                <h3>Service Request Dashboard</h3>
                <div className="container">
                <button class="btn btn-primary" type="button" style={divStyle} onClick={this.onClick} >Service Management</button> 
                <button class="btn btn-primary" type="button" style={divStyle}  onClick={this.onClickUpdate} > Contract and Billing Management  </button>                 
                </div>
                </div>
                <br/>
                <div  style={divStyle}    >
                { this.state.showResultsDelete ? <MonitorComponent /> : null }
                { this.state.showResultsAdd ? <SMDashboardComponent /> : null }
                { this.state.showResultsUpdate ? <BillingComponent /> : null }

                </div>
              
                </div>
        )}

}

export default SRDashboardComponent
