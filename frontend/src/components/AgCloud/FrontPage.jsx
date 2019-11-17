import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationForApiService from './AuthenticationForApiService.js'
import axios from 'axios';
import { API_URL } from '../../Constants'

class FrontPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.submitSignUp = this.submitSignUp.bind(this);
    }

    componentWillMount() {

    }

    usernameChangeHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    submitSignUp = (e) => {

        console.log("submit login called")
        var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.emailPassword,
            name: this.state.name,
            role: this.state.role

        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post(API_URL + '/user/register', data)
            .then((response) => {
                console.log("Status Code : ", response.status);
                if (response.status === 200) {

                    console.log(response.data);
                    this.setState({

                        signup_status: response.data.message,
                    })
                } else {
                    this.setState({

                        signup_status: response.data.message
                    })
                }
            });
    }




    render() {
        return (
            <div>
                <div class="container-fluid">
                    <br />
                    <br />
                    <div class="row" >
                        <div class="col-sm-1 col-md-1"></div>

                        <div class="col-sm-5 col-md-5" style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)", borderRadius: '10px' }}>

                            <h1>
                                 Sign Up
                                </h1>

                            <form onSubmit={this.submitLogin}>
                                <div class="row" >

                                    <div class="col-sm-12 col-md-12">
                                        <br />
                                        <div class="form-group">
                                            <label for="where"><h5>Email ID</h5></label>
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" />

                                        </div>

                                    </div>
                                    <div class="col-sm-1 col-md-1">

                                    </div>

                                </div>
                                <div class="row" >

                                    <div class="col-sm-12 col-md-12">
                                       
                                        <div class="form-group">
                                            <label for="where"><h5>Name</h5></label>
                                            <input type="text" class="form-control" name="name" id="name" placeholder="Your Name" />

                                        </div>

                                    </div>
                                    <div class="col-sm-1 col-md-1">

                                    </div>

                                </div>
                                <div class="row" >

                                    <div class="col-sm-6 col-md-6">

                                        <div class="form-group">
                                            <label for="where"><h5>Password</h5></label>
                                            <input type="password" class="form-control" name="password" id="password" placeholder="password" />
                                        </div>

                                    </div>
                                    <div class="col-sm-6 col-md-6">

                                        <div class="form-group">
                                            <label for="where"><h5>Role</h5></label>
                                             <select id = "role" class="form-control" name="role">
                                            <option value = "Farmer">Farmer</option>
                                            <option value = "MachineController">Machine Controller</option>
                                            <option value = "ServiceCarrierStaff">Service Carrier Staff</option>
                                            </select>
                                        </div>
                                    </div>
                                     

                                </div>

                               
                                <div class="row" >

                                    <div class="col-sm-12 col-md-12">
                                        <div class="form-group">
                                        
                                            <br/>
                                            <input type="submit" class="form-control btn btn-danger" />
                                            <br/>
                                            <br/>
                                        </div>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>

                        </div>


                    </div>
                </div>
                )
            }
        }
        
export default FrontPage