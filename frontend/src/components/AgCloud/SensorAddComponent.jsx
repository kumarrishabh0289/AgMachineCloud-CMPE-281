import React, { Component } from 'react'

import axios from 'axios';
import { API_URL } from '../../Constants'

class SensorAddComponent extends Component {


    constructor(props) {
        super(props)
        

        this.state = {
            welcomeMessage: 'Hey You Are Authorized',
            name:"",
            sensortype:"",
            machineid:"",
            provider:"",
            edgestationid:"",
            dsc: "",

            hasFailed: false,
            showSuccessMessage: false
        }
        this.submitSignUp = this.submitSignUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }
    submitSignUp = (e) => {
        
        
        e.preventDefault();
        const data = {
            name: this.state.name,
            sensorType: this.state.sensortype ,
            machineId: this.state.machineid,
            provider: this.state.provider,
            edgeStationId: this.state.edgestationid,
            desc: this.state.dsc,
        }
          

        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post(API_URL + '/sensor/add', data)
            .then((response) => {
                console.log("Status Code : ", response.status);
                if (response.status === 200) {

                    console.log(response.data);
                    this.setState({

                        signup_status: response.data.message,
                        showSuccessMessage: true
                    })
                } else {
                    console.log(response.data.error);
                    this.setState({

                        
                        signup_status: response.data.error,
                        hasFailed: true
                    })
                }
            });
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
                  <div className="container">
                        <div>

                        <h4>
                                 Add Sensor
                                </h4>

                            <form onSubmit={this.submitSignUp}>
                            <div className="row" >

                                    <div className="col-sm-12 col-md-12">
                                    
                                        <div className="form-group">
                                            <label htmlFor="where"><h6>Sensor Type</h6></label>
                                            <input type="text" className="form-control" name="sensortype" id="sensortype" placeholder="Sensor Type" value={this.state.sensortype} onChange={this.handleChange}/>

                                        </div>

                                    </div>

                                    </div>
                                    <div className="row" >

                                        <div className="col-sm-12 col-md-12">

                                            <div className="form-group">
                                                <label htmlFor="where"><h6>Sensor Name</h6></label>
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Sensor Name" value={this.state.name} onChange={this.handleChange}/>

                                            </div>

                                        </div>

                                        </div>
                                        <div className="row" >

                                            <div className="col-sm-12 col-md-12">

                                                <div className="form-group">
                                                    <label htmlFor="where"><h6>Machine ID</h6></label>
                                                    <input type="text" className="form-control" name="machineid" id="machineid" placeholder="Machine ID" value={this.state.machineid} onChange={this.handleChange}/>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="row" >

                                            <div className="col-sm-12 col-md-12">

                                                <div className="form-group">
                                                    <label htmlFor="where"><h6>Provider</h6></label>
                                                    <input type="text" className="form-control" name="provider" id="provider" placeholder="Provider" value={this.state.provider} onChange={this.handleChange}/>

                                                </div>

                                            </div>

                                        </div>
                                     
                                        <div className="row" >

                                            <div className="col-sm-12 col-md-12">

                                                <div className="form-group">
                                                    <label htmlFor="where"><h6> Edge Station Id </h6></label>
                                                    <input type="text" className="form-control" name="edgestationid" id="edgestationid" placeholder="Enter" value={this.state.edgestationid} onChange={this.handleChange}/>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="row" >

                                            <div className="col-sm-12 col-md-12">

                                                <div className="form-group">
                                                    <label htmlFor="where"><h6> Description </h6></label>
                                                    <input type="text" className="form-control" name="dsc" id="dsc" placeholder="Enter" value={this.state.dsc} onChange={this.handleChange}/>

                                                </div>

                                            </div>

                                            </div>
                                        <div className="row" >


                                        <div className="row" >

                                            <div className="col-sm-12 col-md-12">
                                                <div className="form-group">
                                                
                                                    <br/>
                                                    <input type="submit" className="form-control btn btn-danger" />
                                                    <br/>
                                                    <br/>
                                                </div>
                                            </div>

                                            <br />
                                            {this.state.hasFailed && <div className="alert alert-warning">Sensor addition Failed</div>}
                                            {this.state.showSuccessMessage && <div className="alert alert-warning">Sensor Added Successfully</div>}
                                            <br />

                                            </div>

                                        </div>
                                </form>
                <div className="container">
              
                </div>
                </div>
                </div>
        )}

}

export default SensorAddComponent
