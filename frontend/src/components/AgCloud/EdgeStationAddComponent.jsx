import React, { Component } from 'react'

import axios from 'axios';
import { API_URL } from '../../Constants'

class EdgeStationAddComponent extends Component {


    constructor(props) {
        super(props)
        

        this.state = {
            welcomeMessage: 'Hey You Are Authorized',
            name:"",
            machineType:"",
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
            machineType: this.state.machineType ,
            machineId: this.state.machineid,
            provider: this.state.provider,
            edgeStationId: sessionStorage.edgeStation,
            desc: this.state.dsc,
            email: sessionStorage.authenticatedUser
        }
        console.log("data is",data)  

        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post(API_URL + '/machine/setupMachine', data)
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
                  <div className="container" class="leftPadding180">
                                              <div class="" style={{  "padding-left": "30px",  backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)" }}>

                        <div>

                        <h4>
                                 Add Machine
                                </h4>

                            <form onSubmit={this.submitSignUp}>
                            <div className="row" >

                                    <div className="col-sm-12 col-md-12">
                                    
                                        <div className="form-group">
                                            <label htmlFor="where"><h6>Machine Type</h6></label>
                                            <input type="text" className="form-control" name="machineType" id="machineType" placeholder="Type Drone or tractor" value={this.state.machineType} onChange={this.handleChange}/>

                                        </div>

                                    </div>

                                    </div>
                                    <div className="row" >

                                        <div className="col-sm-12 col-md-12">

                                            <div className="form-group">
                                                <label htmlFor="where"><h6>Machine Name</h6></label>
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
                                            {this.state.hasFailed && <div className="alert alert-warning">Machine addition Failed</div>}
                                            {this.state.showSuccessMessage && <div className="alert alert-warning">Machine Added Successfully</div>}
                                            <br />

                                            </div>

                                        </div>
                                </form>
         
                </div>
                </div>
                </div>
        )}

}

export default EdgeStationAddComponent
