import React, { Component } from 'react'
import SensorUpdateComponent from './SensorUpdateComponent.jsx'
import SensorDeleteComponent from './SensorDeleteComponent.jsx'
import SensorAddComponent from './SensorAddComponent.jsx'


class SensorComponent extends Component {


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
                      <br/>
                        <div  style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)" , borderRadius: '10px' }}>
                
        <h3 style={divStyle}>Sensor Dashboard for Machine ID:{sessionStorage.machine}</h3>
                <div className="container">
                <button class="btn btn-primary" type="button" style={divStyle} onClick={this.onClick} >Add Sensor</button> 
                <button class="btn btn-primary" type="button" style={divStyle}  onClick={this.onClickUpdate} > All Sensor  </button>                 

                </div>
                </div>
                <br/>
                 <div  style={{ backgroundColor: "lightblue", opacity: .9, filter: "Alpha(opacity=50)" , borderRadius: '10px' }}>

                { this.state.showResultsDelete ? <SensorDeleteComponent /> : null }
                { this.state.showResultsAdd ? <SensorAddComponent /> : null }
                { this.state.showResultsUpdate ? <SensorUpdateComponent /> : null }

                </div>
                
               
                </div>
        )}

}

export default SensorComponent
