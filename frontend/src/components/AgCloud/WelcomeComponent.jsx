import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../Constants'
import axios from 'axios';
import Draggable from 'react-draggable';
import { Chart } from "react-google-charts";
class WelcomeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            welcomeMessage: 'Hey You Are Authorized',
            sensor: [],
        }


    }

    componentDidMount() {
        let edgeStationId = sessionStorage.edgeStation;
        axios.get(API_URL + '/sensor/', { params: { edgeStationId } })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    sensor: this.state.sensor.concat(response.data)
                });
            });
    }




    render() {

        var chartEvents = [
            {
                eventName: "select",
                callback({ chartWrapper }) {
                    console.log("Selected ", chartWrapper.getChart().getSelection());
                }
            }
        ];

        var data = [
            ['Year', 'Machine Usage', 'Sensor Usage'],
            ['2016', 1000, 400],
            ['2017', 1170, 460],
            ['2018', 660, 1120],
            ['2019', 1030, 540]
        ];

        var data1 = [
            ['Sensor', 'Hours per Day'],
            ['Humidity', 11],
            ['Camera', 2],
            ['GPS', 24],
            ['Moisture', 2],
            ['Temperature', 7]
        ];

        var options = {
            title: 'Machine and Sensor Usage',
            curveType: 'function',
            legend: { position: 'bottom' },
            backgroundColor: { fill: 'transparent' },
            is3D: true
        };

        var options1 = {
            title: 'Sensor Performance',
            curveType: 'function',
            legend: { position: 'bottom' },
            backgroundColor: { fill: 'transparent' },
            is3D: true
        };


        if (sessionStorage.role === 'Farmer') {
            return (
                <div style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=80)", borderRadius: '10px' }}>
                    <div class="container">


                        <div class="body-div">
                            <br />
                            <h2>Farmer Dashboard</h2><br />
                            <h4>Welcome, {sessionStorage.name}</h4>
                            <div class="row">
                            <div class="col-sm-6 col-md-3">
                            <div class="card bg-warning text-white" >
                                    <div class="card-body">
                                        <h4 class="card-title">Edge Stations</h4>
                                        <p class="card-text">Total <h1>2</h1></p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                            <div class="card bg-danger text-white" >
                                    <div class="card-body">
                                        <h4 class="card-title">Total Machines</h4>
                                        <p class="card-text">Total <h1>5</h1></p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                            <div class="card bg-success text-white" >
                                    <div class="card-body">
                                        <h4 class="card-title">Total Sensor </h4>
                                        <p class="card-text">Total <h1>15</h1></p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                            <div class="card bg-primary text-white" >
                                    <div class="card-body">
                                        <h4 class="card-title">Total Billing</h4>
                                        <p class="card-text">Total <h1>$105</h1></p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            

                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-md-6">
                                    <Chart
                                        chartType="LineChart"
                                        data={data}
                                        options={options}
                                        graphID="LineChart"
                                        width="100%"
                                        height="400px"
                                        chartEvents={chartEvents}
                                    />
                                </div>

                                <div class="col-sm-6 col-md-6">
                                    <Chart
                                        chartType="BarChart"
                                        data={data1}
                                        options={options1}
                                        graphID="BarChart"
                                        width="100%"
                                        height="400px"
                                        chartEvents={chartEvents}
                                    />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-sm-12 col-md-12">
                                    <table className="table">
                                        <tr>
                                            <th>
                                                Sensor ID
                                            </th>
                                            <th>
                                                Sensor Name
                                            </th>
                                            <th>
                                                Sensor Provider
                                            </th>
                                            <th>
                                                Sensor Utilization
                                            </th>
                                            <th>
                                                Sensor Status
                                            </th>

                                        </tr>
                                        {
                                            this.state.sensor.map(sensor => {
                                                var status_text = ""
                                                var color = ""
                                                if (sensor.status == 1) {
                                                    status_text = "Active"
                                                    color = "green"
                                                }
                                                else if (sensor.status == 2) {
                                                    status_text = "Paused"
                                                    color = "yellow"
                                                }
                                                else {
                                                    status_text = "Disabled"
                                                    color = "red"
                                                }
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>{sensor.sensorId}</td>
                                                            <td>{sensor.name}</td>
                                                            <td>{sensor.provider}</td>
                                                            <td>{55 + (Math.random() * (100 - 55))}%</td>
                                                            <td bgColor={color}>{status_text}</td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }

                                    </table>
                                </div>

                            </div>


                        </div>


                        <Link to="/totaledgestation"><button class="btn btn-success">Available Edge Station</button></Link>
                    </div>

                </div>
            )
        }
        else if (sessionStorage.role === 'MachineController') {
            return (
                <div style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=80)", borderRadius: '10px' }}>
                    <div class="container">


                        <div class="body-div">
                            <br />
                            <h2>Machine Controller Dashboard</h2><br />
                            <h4>Welcome, {sessionStorage.name}</h4>
                            <div class="row">
                            <div class="col-sm-6 col-md-3">
                            <div class="card bg-warning text-white" >
                                    <div class="card-body">
                                        <h4 class="card-title">Edge Stations</h4>
                                        <p class="card-text">Total <h1>2</h1></p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                            <div class="card bg-danger text-white" >
                                    <div class="card-body">
                                        <h4 class="card-title">Total Machines</h4>
                                        <p class="card-text">Total <h1>5</h1></p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                            <div class="card bg-success text-white" >
                                    <div class="card-body">
                                        <h4 class="card-title">Total Sensor </h4>
                                        <p class="card-text">Total <h1>15</h1></p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            

                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-md-6">
                                    <Chart
                                        chartType="LineChart"
                                        data={data}
                                        options={options}
                                        graphID="LineChart"
                                        width="100%"
                                        height="400px"
                                        chartEvents={chartEvents}
                                    />
                                </div>

                                <div class="col-sm-6 col-md-6">
                                    <Chart
                                        chartType="BarChart"
                                        data={data1}
                                        options={options1}
                                        graphID="BarChart"
                                        width="100%"
                                        height="400px"
                                        chartEvents={chartEvents}
                                    />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-sm-12 col-md-12">
                                    <table className="table">
                                        <tr>
                                            <th>
                                                Sensor ID
                                            </th>
                                            <th>
                                                Sensor Name
                                            </th>
                                            <th>
                                                Sensor Provider
                                            </th>
                                            <th>
                                                Sensor Utilization
                                            </th>
                                            <th>
                                                Sensor Status
                                            </th>

                                        </tr>
                                        {
                                            this.state.sensor.map(sensor => {
                                                var status_text = ""
                                                var color = ""
                                                if (sensor.status == 1) {
                                                    status_text = "Active"
                                                    color = "green"
                                                }
                                                else if (sensor.status == 2) {
                                                    status_text = "Paused"
                                                    color = "yellow"
                                                }
                                                else {
                                                    status_text = "Disabled"
                                                    color = "red"
                                                }
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>{sensor.sensorId}</td>
                                                            <td>{sensor.name}</td>
                                                            <td>{sensor.provider}</td>
                                                            <td>{55 + (Math.random() * (100 - 55))}%</td>
                                                            <td bgColor={color}>{status_text}</td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }

                                    </table>
                                </div>

                            </div>


                        </div>


                        <Link to="/totaledgestation"><button class="btn btn-success">Available Edge Station</button></Link>
                    </div>

                </div>
            )
        }
        else {
            return (
                <>
                    <div class="container">
                        <div class="body-div">
                            <h3>You are not authorized to view this page.</h3>
                        </div>
                    </div>

                </>
            )
        }
    }



}


export default WelcomeComponent