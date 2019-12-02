import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../Constants'
import axios from 'axios';
import Draggable from 'react-draggable';
class Sensordata extends Component {

    constructor(props) {
        super(props)

        this.state = {
            welcomeMessage: 'Hey You Are Authorized',
            sensordata: [],
        }


    }

    componentDidMount() {

        axios.get(API_URL + '/sensordata/sensoronmachine', { params: {machineId: sessionStorage.machine } })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    sensordata: this.state.sensordata.concat(response.data)
                });
            });
    }


    render() {



        return (
            <div class="container" >
                    <br /><br />

                <div style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=80)", borderRadius: '10px' }}>
                    <br />
                    <h2>Machine Sensor Data</h2><br />
                    
                    <table className="table">
                                            <tr>
                                                <th>
                                                    Data at
                                                </th>
                                                <th>
                                                    Data
                                                </th>
                                                <th>
                                                    Name
                                                </th>
                                                <th>
                                                    Sensor Type
                                                </th>
                                                <th>
                                                    Description
                                                </th>
                                                <th>
                                                    Provider
                                                </th>
                                                <th>
                                                    Status
                                                </th>
                                                <th>
                                                    Sensor Id
                                                </th>


                                            </tr>
                        {
                            this.state.sensordata.map(sensordata => {
                                if (sensordata.sensorId==47){
                                    return (

                                        <>
                                            <tr>
                                                <td>
                                                    {sensordata.startDate}
                                                </td>
                                                
                                                <td>
                                                <a href= {sensordata.data}><img src={sensordata.data} height="50" width="50" /></a>
                                                
                                                 
                                                </td>
                                                <td>
                                                {sensordata.name}
                                                </td>
                                                <td>
                                                {sensordata.sensorType}
                                                </td>
                                                <td>
                                                {sensordata.desc}
                                                </td>
                                                <td>
                                                {sensordata.provider}
                                                </td>
                                                <td>
                                                {sensordata.status}
                                                </td>
                                                <td>
                                                {sensordata.sensorId}
                                                </td>
                                            </tr>
    
                                            
                                        </>
    
                                    )

                                }
                                else{
                                    return (

                                        <>
                                            <tr>
                                                <td>
                                                    {sensordata.startDate}
                                                </td>
                                                
                                                <td>
                                                {sensordata.data}
                                                 
                                                </td>
                                                <td>
                                                {sensordata.name}
                                                </td>
                                                <td>
                                                {sensordata.sensorType}
                                                </td>
                                                <td>
                                                {sensordata.desc}
                                                </td>
                                                <td>
                                                {sensordata.provider}
                                                </td>
                                                <td>
                                                {sensordata.status}
                                                </td>
                                                <td>
                                                {sensordata.sensorId}
                                                </td>
                                            </tr>
    
                                            
                                        </>
    
                                    )

                                }
                               

                                
                            })
                        }
                        </table>


                    
                </div>


            </div>
        )

    }



}


export default Sensordata