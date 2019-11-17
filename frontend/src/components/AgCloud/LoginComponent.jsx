import React, { Component } from 'react'
import AuthenticationForApiService from './AuthenticationForApiService.js'
import GoogleLogin from 'react-google-login';
import { API_URL } from '../../Constants'

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            role:'',
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
            .authenticate(this.state.username, this.state.password, this.state.role)
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
                <br />
                <div class="container-fluid">
                    <div class="col-sm-5 col-md-5 container" style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=90)", borderRadius: '10px' }}>
                        <br />
                        <h1>Login</h1>
                        {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                        {this.state.showSuccessMessage && <div className="alert alert-warning">Login Successful</div>}
                        <form onSubmit={this.loginClicked}>
                            <div class="row" >

                                <div class="col-sm-12 col-md-12">
                                    <br />
                                    <div class="form-group">
                                        <label for="where"><h5>Email</h5></label>
                                        <input type="text" class="form-control" id="where" placeholder="Your Email" name="email" />

                                    </div>

                                </div>
                                <div class="col-sm-1 col-md-1">

                                </div>

                            </div>

                            <div class="row" >

                                <div class="col-sm-6 col-md-6">

                                    <div class="form-group">
                                        <label for="where"><h5>Password</h5></label>
                                        <input type="password" class="form-control" id="password" placeholder="password" name="email" />
                                    </div>

                                </div>
                                <div class="col-sm-6 col-md-6">

                                    <div class="form-group" >
                                        <label for="where"><h5>Role</h5></label>
                                        <select id="role" className="form-control" name="role">
                                        <option value="">Select Role</option>
                                            <option value="Farmer">Farmer</option>
                                            <option value="MachineController">Machine Controller</option>
                                            <option value="ServiceCarrierStaff">Service Carrier Staff</option>
                                        </select>
                                    </div>
                                </div>


                            </div>

                            <div class="row" >

                                <div class="col-sm-12 col-md-12">
                                    <div class="form-group">

                                        <br />
                                        <input type="submit" class="form-control btn btn-danger" />
                                        <br />
                                        <br />
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>


                </div>
            </div>
        )
    }
}

export default LoginComponent