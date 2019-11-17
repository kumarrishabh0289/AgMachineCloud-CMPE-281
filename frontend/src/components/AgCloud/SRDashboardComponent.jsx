import React, { Component } from 'react'
import SensorUpdateComponent from './SensorUpdateComponent.jsx'
import SensorDeleteComponent from './SensorDeleteComponent.jsx'
import SensorAddComponent from './SensorAddComponent.jsx'


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
        return (
                  <div className="container">
                        <div  style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)", borderRadius: '10px' }}>

                <h1>Sensor!</h1>
                <div className="container">
                <button class="btn btn-primary" type="button"  onClick={this.onClick} >Service Management</button> 
                <button class="btn btn-primary" type="button"  onClick={this.onClickUpdate} > Contract and Billing Management  </button> 
                <button class="btn btn-primary" type="button"  onClick={this.onClickDelete}   > Monitor and Track </button>
                
                { this.state.showResultsDelete ? <SensorDeleteComponent /> : null }
                { this.state.showResultsAdd ? <SensorAddComponent /> : null }
                { this.state.showResultsUpdate ? <SensorUpdateComponent /> : null }

                </div>
                </div>
                </div>
        )}

}

export default SRDashboardComponent
