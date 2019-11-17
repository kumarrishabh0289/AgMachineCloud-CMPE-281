import React, { Component } from 'react'
import AuthenticationForApiService from './AuthenticationForApiService.js'
import GoogleLogin from 'react-google-login';

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'Rishabh',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        this.responseGoogle = this.responseGoogle.bind(this)
    }

    handleChange(event) {

        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }



    loginClicked() {

        AuthenticationForApiService
            .authenticate(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationForApiService.registerSuccessfulLogin(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })

    }

    responseGoogle = (response) => {
        console.log(response);
    }

    render() {
        return (
            <div>
                
                <div class="container-fluid">
                <div class="col-sm-5 col-md-5 container" style={{ backgroundColor: "white", opacity: .7, filter: "Alpha(opacity=50)", borderRadius: '10px' }}>

                <h1>Login</h1>
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    
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
                                            <select id = "myList">
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
               
                </div>
              
                </div>
            </div>
        )
    }
}

export default LoginComponent