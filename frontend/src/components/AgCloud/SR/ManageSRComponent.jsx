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
        this.onClickStatus = this.onClickStatus.bind(this);

        
    }
    
    loadSensors() {
        //loads topics to show on left side of home screen
        //axios.get(API_URL + '/servicerequest?machineId=1233')
        var appendemail = sessionStorage.authenticatedUser

        if ( sessionStorage.role === 'ServiceCarrierStaff')
        {
            appendemail = sessionStorage.machineowner
        }

        axios.get(API_URL + '/servicerequest/user?email='+ appendemail)
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

    onClickStatus = (param, param2)  => e => {
    
        e.preventDefault();
        const data = {
            serviceRequestId: param,
            status: param2
        }
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.patch(API_URL + '/servicerequest/update', data)
            .then((response) => {
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
            return (

                <tr>
                 <td> {topic.serviceRequestId} </td>
                <td>{topic.serviceRequestName}</td>
                <td>{topic.machineId}</td>
                <td>{topic.date}</td>
                <td>{topic.status}</td>
                <td>              
                      <button class="btn btn-default" type="button" style={divStyle} onClick={this.onClickStatus(topic.serviceRequestId,"cancel" )} >Cancel SR</button> 
                <button class="btn btn-default" type="button" style={divStyle} onClick={this.onClickStatus(topic.serviceRequestId, "close" )} >Close SR </button> 
                </td>
                </tr>
            )
        })
        return (
                  <div className="container">
                        <div  style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)", borderRadius: '10px' }}>

                <h3>Manage service request</h3>
                <div class="table-responsive">
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
