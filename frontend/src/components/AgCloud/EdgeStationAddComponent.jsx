import React, { Component } from 'react'

import axios from 'axios';
import { API_URL } from '../../Constants'
import { Link } from 'react-router-dom'

class EdgeStationAddComponent extends Component {


    constructor(props) {
        super(props)


        this.state = {
            welcomeMessage: 'Hey You Are Authorized',
            name: "",
            latitude: "",
            longitude: "",
            address: "",
            city: "",
            country: "",
            state: "",

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
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            address: this.state.address,
            userEmail: sessionStorage.authenticatedUser
        }
        console.log("data is", data)

        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post(API_URL + '/edgestation', data)
            .then((response) => {
                console.log("Status Code : ", response.status);
                if (response.status === 201) {

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
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="container" class="leftPadding180">
                <div class="" style={{ "padding-left": "30px", backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)" }}>

                    <div>

                        <h4>
                            Add Edge Station
                                </h4>

                        <form onSubmit={this.submitSignUp}>
                            
                            <div className="row" >

                                <div className="col-sm-12 col-md-12">

                                    <div className="form-group">
                                        <label htmlFor="where"><h6>Edge Station Name</h6></label>
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Edge Station Name" value={this.state.name} onChange={this.handleChange} />

                                    </div>

                                </div>

                            </div>
                            <div className="row" >

                                <div className="col-sm-12 col-md-12">

                                    <div className="form-group">
                                        <label htmlFor="where"><h6>Latitude</h6></label>
                                        <input type="text" className="form-control" name="latitude" id="latitude" placeholder="Latitude" value={this.state.latitude} onChange={this.handleChange} />

                                    </div>

                                </div>

                            </div>

                            <div className="row" >

                                <div className="col-sm-12 col-md-12">

                                    <div className="form-group">
                                        <label htmlFor="where"><h6>Longitude</h6></label>
                                        <input type="text" className="form-control" name="longitude" id="longitude" placeholder="Longitude" value={this.state.longitude} onChange={this.handleChange} />

                                    </div>

                                </div>

                            </div>

                            <div className="row" >

                                <div className="col-sm-12 col-md-12">

                                    <div className="form-group">
                                        <label htmlFor="where"><h6>Address</h6></label>
                                        <input type="text" className="form-control" name="address" id="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} />

                                    </div>

                                </div>

                            </div>





                            <div className="row" >

                                <div className="col-sm-12 col-md-12">

                                    <div className="form-group">
                                        <label htmlFor="where"><h6> City </h6></label>
                                        <input type="text" className="form-control" name="city" id="city" placeholder="City" value={this.state.city} onChange={this.handleChange} />

                                    </div>

                                </div>

                            </div>

                            <div className="row" >

                                <div className="col-sm-12 col-md-12">

                                    <div className="form-group">
                                        <label htmlFor="where"><h6>State</h6></label>
                                        <input type="text" className="form-control" name="state" id="state" placeholder="State" value={this.state.state} onChange={this.handleChange} />

                                    </div>

                                </div>

                            </div>
                            <div className="row" >

                                <div className="col-sm-12 col-md-12">

                                    <div className="form-group">
                                        <label htmlFor="where"><h6>Country</h6></label>
                                        <input type="text" className="form-control" name="country" id="country" placeholder="Country" value={this.state.country} onChange={this.handleChange} />

                                    </div>

                                </div>

                            </div>


                            <div className="row" >


                                <div className="row" >

                                    <div className="col-sm-12 col-md-12">
                                        <div className="form-group">

                                            <br />
                                            <input type="submit" className="form-control btn btn-danger" />
                                            <br />
                                            <br />
                                        </div>
                                    </div>

                                    <br />
                                    {this.state.hasFailed && <div className="alert alert-warning">Edge Station addition Failed</div>}
                                    {this.state.showSuccessMessage && <div className="alert alert-warning">Edge Station Added Successfully &nbsp;&nbsp;<Link to="/totaledgestation"><button class="btn btn-success">Available Edge Station</button></Link></div>}
                                    <br />

                                </div>



                                


                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }

}

export default EdgeStationAddComponent
