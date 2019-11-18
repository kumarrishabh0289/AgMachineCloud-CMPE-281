import React, { Component } from 'react'
import axios from 'axios';
import { API_URL } from '../../../Constants'



class ManageSRComponent extends Component {


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
                <td>{topic.provider}</td>
                <td>{topic.provider}</td>
                <td>              
                      <button class="btn btn-default" type="button" style={divStyle} onClick={this.onClick} >Cancel SR</button> 
                <button class="btn btn-default" type="button" style={divStyle} onClick={this.onClick} >Close SR </button> 
                </td>
                </tr>
            )
        })
        return (
                  <div className="container">
                        <div  style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)", borderRadius: '10px' }}>

                <h3>Manage service request</h3>
                <div className="container">
                <table class="table">
                            <thead>
                            <tr>
                                <th> ID  </th>
                                <th>Service Request</th>
                                <th>Machine ID</th>
                                <th> Date  </th>
                                <th> Status  </th>
                                <th>   </th>
                            </tr>
                            </thead>
                            <tbody>
                            {allSensors}
                            </tbody>
                        </table>
              
                </div>
                </div>
                </div>
        )}

}

export default ManageSRComponent
