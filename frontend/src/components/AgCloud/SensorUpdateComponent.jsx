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

        
        this.onClickDelete = this.onClickDelete.bind(this);
        
    }
    
    loadSensors() {
        let machineId = sessionStorage.machine;
        //loads topics to show on left side of home screen
        
        axios.get(API_URL + '/sensor/sensoronmachine', { params: { machineId } })
            .then((response) => {
                //update the state with the response data
                console.log(response.data)
                this.setState({
                    allSensors: response.data
                });
            });
    }

    componentDidMount() {
        this.loadSensors();
    }

    onClickDelete = param => e =>{
        
        console.log("delete ",param)
        e.preventDefault();
        const data = {
            sensorId: param
        }
        console.log(data)
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.put(API_URL + '/sensor/delete', data)
            .then((response) => {
                console.log("Status Code : ", response.status);
                if (response.status === 200) {

                    console.log(response.data);
                    this.setState({

                        signup_status: response.data.message,
                        showSuccessMessage: true
                    })
                    
                    this.loadSensors();
                } else {
                    console.log(response.data.error);
                    this.setState({
                        
                        signup_status: response.data.error,
                        hasFailed: true
                    })
                }
            });
    }
    
   
    render() {
        const divStyle = {
            marginLeft: '10px',
            marginBottom: '10px'
          };
        let allSensors = this.state.allSensors.map(topic => {
            var status_text =""
            var color = ""
            if(topic.status == 1){
                status_text = "Active"
                color = "green"
            }
            else if(topic.status == 2){
                status_text = "Paused"
                color = "yellow"
            }
            else{
                status_text = "Disabled"
                color ="red"
            }
            return (

                <tr>
                <td>{topic.name}</td>
                <td> {topic.sensorType} </td>
                <td>{topic.provider}</td>
                <td>{topic.desc}</td>
                <td>{topic.edgeStationId}</td>
                <td bgColor={color}>{status_text}</td>
                <td>              
                      <button class="btn btn-default" type="button" style={divStyle} onClick={this.onClick} >View Data</button> 
                <button class="btn btn-default" type="button" style={divStyle} onClick={this.onClickDelete(topic.sensorId)} >Delete </button> 
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
                                <th>Description</th>
                                <th>Edge Station ID</th>
                                <th>Status</th>
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
