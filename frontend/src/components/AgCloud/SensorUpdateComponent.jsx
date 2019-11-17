import React, { Component } from 'react'
import axios from 'axios';
import { API_URL } from '../../Constants'


class SensorUpdateComponent extends Component {


    constructor(props) {
        super(props)
        

        this.state = {
            welcomeMessage: 'Hey You Are Authorized',
            allSensors: []
        }
        
    }
    
    loadSensors() {
        //loads topics to show on left side of home screen
        axios.get(API_URL + '/sensor/edgeStation?edgeStationId=9511301&machineId=1')
            .then((response) => {
                //update the state with the response data
                console.log(response.data)
                this.setState({
                    allSensors: response.data
                });
            });
    }

    componentDidMount() {
        console.log("hi update!")
        this.loadSensors();
    }
    
   
    render() {
        const divStyle = {
            marginLeft: '10px',
            marginBottom: '10px'
          };
        let allSensors = this.state.allSensors.map(topic => {
            return (

                <tr>
                <td>{topic.name}</td>
                <td> {topic.sensorType} </td>
                <td>{topic.provider}</td>
                <td>              
                      <button class="btn btn-default" type="button" style={divStyle} onClick={this.onClick} >View Data</button> 
                <button class="btn btn-default" type="button" style={divStyle} onClick={this.onClick} >Delete </button> 
                </td>
                </tr>
            )
        })

        return (
                  <div className="container">

              
                <div className="container">
                <table class="table">
                            <thead>
                            <tr>
                                <th> Sensor  </th>
                                <th>Type</th>
                                <th>Provider</th>
                                <th>  </th>
                            </tr>
                            </thead>
                            <tbody>
                            {allSensors}
                            </tbody>
                        </table>
                </div>
                </div>
            
        )}

}

export default SensorUpdateComponent
