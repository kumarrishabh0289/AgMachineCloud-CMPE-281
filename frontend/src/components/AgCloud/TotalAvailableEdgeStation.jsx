import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../Constants'
import axios from 'axios';

class TotalAvailableEdgeStation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            welcomeMessage: 'Hey You Are Authorized',
            edgestation: [],
            edgestations:[]
        }
    }

    componentDidMount() {
        let email = sessionStorage.authenticatedUser;
        console.log("Role is", sessionStorage.getItem('role'));
        axios.get(API_URL + '/edgestation/email', { params: { email } })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    edgestation: this.state.edgestation.concat(response.data)
                });
            });
            
        axios.get(API_URL + '/edgestation', { params: { email } })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    edgestations: this.state.edgestations.concat(response.data)
                });
            })
            
    }
    ProgressButton = (edgestation) => {
        sessionStorage.setItem('edgeStation', edgestation.edgeStationId);
        this.props.history.push(`/edgestation`)
    }

    render() {
       
      
        if (sessionStorage.role === 'Farmer') {
            return (
                <div class="container">
                    

                    <div class="body-div">
                        <br />
                        <h2>Farmer Dashboard</h2><br />
                        <h4>Welcome, {sessionStorage.name}</h4>
                          <div class="card-columns">
                            {
                                this.state.edgestation.map(edgestation => {

                                    return (

                                       
                                            <div>

                                                <div class="card bg-info text-white">
                                                    <div class="card-header">
                                                        {edgestation.name}
                                                    </div>
                                                    <div class="card-body ">
                                                        <p class="card-text">
                                                        <iframe src={"https://maps.google.com/maps?q="+edgestation.latitude+","+edgestation.longitude+"&z=15&output=embed"} width="300" height="270" frameborder="0" style={{border:0}}></iframe>
                                                        <div class="table-responsive">
                                                            <table class="table">
                                                                <tr>
                                                                    <th>EdgeStation ID</th><td>{edgestation.edgeStationId}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Latitude</th>
                                                                    <td>{edgestation.latitude}</td>
                                                                </tr>


                                                                <tr>
                                                                    <th>Longitude</th><td>{edgestation.longitude}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Address</th> <td>{edgestation.address}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>City</th><td>{edgestation.city}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Country</th><td>{edgestation.country}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>State</th><td>{edgestation.state}</td>
                                                                </tr>
                                                               

                                                            </table>
                                                            </div>

                                                        </p>
                                                    </div>
                                                    <div class="card-footer">
                                                    <button onClick={() => this.ProgressButton(edgestation)} class="btn btn-primary">Goto EdgeStation</button>
                                                    </div>

                                                </div>
                                            </div>
                                        

                                    )
                                })
                            }


                        </div>
                    </div>

                    <Link to="/edgestationadd"><button class="btn btn-success">Create new Edge Station</button></Link>
                </div>
            )
        }
        else if (sessionStorage.role === 'MachineController' ) {
            return (
                <div class="container">
                    

                    <div class="body-div">
                        <br />
                        <h2>Machine Controller Dashboard</h2><br />
                        <h4>Welcome, {sessionStorage.name}</h4>
                          <div class="card-columns">
                            {
                                this.state.edgestations.map(edgestation => {

                                    return (

                                       
                                            <div>

                                                <div class="card bg-info text-white">
                                                    <div class="card-header">
                                                        {edgestation.name}
                                                    </div>
                                                    <div class="card-body ">
                                                        <p class="card-text">
                                                        <iframe src={"https://maps.google.com/maps?q="+edgestation.latitude+","+edgestation.longitude+"&z=15&output=embed"} width="300" height="270" frameborder="0" style={{border:0}}></iframe>
                                                        <div class="table-responsive">
                                                            <table class="table">
                                                                <tr>
                                                                    <th>EdgeStation ID</th><td>{edgestation.edgeStationId}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Latitude</th>
                                                                    <td>{edgestation.latitude}</td>
                                                                </tr>


                                                                <tr>
                                                                    <th>Longitude</th><td>{edgestation.longitude}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Address</th> <td>{edgestation.address}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>City</th><td>{edgestation.city}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Country</th><td>{edgestation.country}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>State</th><td>{edgestation.state}</td>
                                                                </tr>
                                                               

                                                            </table>
                                                            </div>

                                                        </p>
                                                    </div>
                                                    <div class="card-footer">
                                                    <button onClick={() => this.ProgressButton(edgestation)} class="btn btn-primary">Goto EdgeStation</button>
                                                    </div>

                                                </div>
                                            </div>
                                        

                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div class="container">
                    <div class="body-div">
                        <h3>Hmm, you are not authorized to view this page.</h3>
                    </div>
                </div>
            )
        }
    }



}


export default TotalAvailableEdgeStation