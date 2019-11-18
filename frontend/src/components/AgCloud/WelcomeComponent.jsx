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
            edgestation: [],
        }


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
            ['Year', 'Sales', 'Expenses'],
            ['2004', 1000, 400],
            ['2005', 1170, 460],
            ['2006', 660, 1120],
            ['2007', 1030, 540]
        ];

        var data1 = [
            ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ];

        var options = {
            title: 'Company Performance',
            curveType: 'function',
            legend: { position: 'bottom' },
            backgroundColor: { fill:'transparent' }
        };

        var options1 = {
            title: 'Sensor Performance',
            curveType: 'function',
            legend: { position: 'bottom' },
            backgroundColor: { fill:'transparent' }
        };


        if (sessionStorage.role === 'Farmer') {
            return (
                <div  style={{ backgroundColor: "lightblue", opacity: .8, filter: "Alpha(opacity=80)" , borderRadius: '10px' }}>
                    <div class="container">


                        <div class="body-div">
                            <br />
                            <h2>Farmer Dashboard</h2><br />
                            <h4>Welcome, {sessionStorage.name}</h4>
                            <div class="card-columns">

                                <div class="card bg-warning text-white" >
                                    <div class="card-body">
                                        <h4 class="card-title">Total Edge Stations  <h1>2</h1></h4>
                                        <p class="card-text">Total .</p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div>

                                <div class="card bg-danger text-white" >
                                    <div class="card-body">
                                        <h4 class="card-title">Total Machines  <h1>5</h1></h4>
                                        <p class="card-text">Some example text. Some example text.</p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div>

                                <div class="card bg-success text-white" >
                                    <div class="card-body">
                                        <h4 class="card-title">Total Available Sensor <h1>15</h1></h4>
                                        <p class="card-text">Some example text. Some example text.</p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
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