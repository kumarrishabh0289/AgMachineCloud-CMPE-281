import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationForApiService from './AuthenticationForApiService.js'

class FrontPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <div class="container-fluid">
                    <br />
                    <br />
                    <div class="row" >
                        <div class="col-sm-1 col-md-1"></div>

                        <div class="col-sm-5 col-md-5" style={{ backgroundColor: "white", opacity: .7, filter: "Alpha(opacity=50)", borderRadius: '10px' }}>

                            <h1>
                                 Sign Up
                                </h1>

                            <form>
                                <div class="row" >

                                    <div class="col-sm-12 col-md-12">
                                        <br />
                                        <div class="form-group">
                                            <label for="where"><h5>Username</h5></label>
                                            <input type="text" class="form-control" id="where" placeholder="Your username" />

                                        </div>

                                    </div>
                                    <div class="col-sm-1 col-md-1">

                                    </div>

                                </div>
                                <div class="row" >

                                    <div class="col-sm-6 col-md-6">

                                        <div class="form-group">
                                            <label for="where"><h5>Password</h5></label>
                                            <input type="password" class="form-control" id="password" placeholder="password" />
                                        </div>

                                    </div>
                                    <div class="col-sm-6 col-md-6">

                                        <div class="form-group">
                                            <label for="where"><h5>Role</h5></label>
                                             <select id = "myList" class="form-control">
                                            <option value = "1">Farmer</option>
                                            <option value = "2">Machine Controller</option>
                                            <option value = "3">Service Carrier Staff</option>
                                            </select>
                                        </div>
                                    </div>
                                      <div class="col-sm-6 col-md-6">

                                        <div class="form-group">
                                            <label for="where"><h5>Edge Station ID</h5></label>
                                            <input type="text" class="form-control" id="role" placeholder="Choose an edge station ID" />
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