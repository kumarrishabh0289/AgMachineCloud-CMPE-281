import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../Constants'
import axios from 'axios';
import Draggable from 'react-draggable';
class EdgeStation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            welcomeMessage: 'Hey You Are Authorized',
            machine: [],
        }


    }

    componentDidMount() {
        let edgeStationId = sessionStorage.edgeStation;
        axios.get(API_URL + '/machine/edgeStationId', { params: { edgeStationId } })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    machine: this.state.machine.concat(response.data)
                });
            });
    }
    ProgressButton = (machine) => {
        sessionStorage.setItem('machine', machine.machineId);
        this.props.history.push(`/sensor`)
    }

    Sensor = () => {
       
        this.props.history.push(`/sensordata`)
    }

    render() {
       
      
        if (sessionStorage.role === 'Farmer'|| sessionStorage.role === 'MachineController') {
            return (
                <div class="container">
                    

                    <div class="body-div">
                        <br />
                        <h2>EdgeStation Dashboard, Edge Station Id: {sessionStorage.edgeStation}</h2><br />
                        <h4>Welcome, {sessionStorage.name}</h4>
                        <div class="card-columns">
                            {
                                this.state.machine.map(machine => {

                                    return (

                                        <Draggable>
                                            <div>

                                                <div class="card bg-info text-white">
                                                    <div class="card-header">
                                                        {machine.name}
                                                    </div>
                                                    <div class="card-body ">
                                                        <p class="card-text">
                                                        <img src={machine.image}/>
                                                            <table>
                                                          
                                                                <tr>
                                                                    <th>machine ID</th><td>{machine.machineId}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Machine Type</th>
                                                                    <td>{machine.machineType}</td>
                                                                </tr>


                                                                <tr>
                                                                    <th>Description</th><td>{machine.desc}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>provider</th> <td>{machine.provider}</td>
                                                                </tr>
                                                                                                                             

                                                            </table>

                                                        </p>
                                                    </div>
                                                    <div class="card-footer">
                                                    <button onClick={() => this.ProgressButton(machine)} class="btn btn-primary">Goto Machine Dashboard</button><br/> <br/> <button onClick={() => this.Sensor()} class="btn btn-danger">Display Machine's Sensor Data</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </Draggable>

                                    )
                                })
                            }


                        </div>
                    </div>

                    <Link to="/edgestationcreate"><button class="btn btn-success">Create new Machine</button></Link>
                </div>
            )
        }
        else {
            return (
                <div class="container">
                    <div class="body-div">
                        <h3>Looks like you are not authorized to view this page.</h3>
                    </div>
                </div>
            )
        }
    }



}


export default EdgeStation