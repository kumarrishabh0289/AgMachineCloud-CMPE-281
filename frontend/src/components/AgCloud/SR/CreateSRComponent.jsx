import React, { Component } from 'react'
import axios from 'axios';
import { API_URL } from '../../../Constants'


class CreateSRComponent extends Component {


    constructor(props) {
        super(props)
        

        this.state = {
            welcomeMessage: 'Hey You Are Authorized',
            md:"",
            sr:""
        }
        
        this.submitSignUp = this.submitSignUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        console.log("logging info")

        console.log(sessionStorage.machineowner)
        console.log(sessionStorage.machine)

    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
     
    submitSignUp = (e) => {
        var eemail = sessionStorage.authenticatedUser

        if ( sessionStorage.role === 'ServiceCarrierStaff')
        {
            eemail = sessionStorage.machineowner
        }

        e.preventDefault();
        const data = {
            machineId: sessionStorage.machine,
            serviceRequestName: this.state.sr,
            email: eemail
        }
        
        console.log("creating sr", eemail, sessionStorage.machine)

        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post(API_URL + '/servicerequest/add', data)
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

        console.log("the data:", data)
    }
    
   
    render() {
        return (
                  <div className="container">
                        <div  style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)", borderRadius: '10px' }}>

                <h4>Create a new Service Request for Machine ID : {sessionStorage.machine} </h4>
                <div className="container">

                <form onSubmit={this.submitSignUp}>
     
                        <div className="row" >

                        <div className="col-sm-12 col-md-12">

                            <div className="form-group">
                                <label htmlFor="where"><h6>Service Request</h6></label>
                                <input type="text" required="required" className="form-control" name="sr" id="sr" placeholder="Service Request" value={this.state.sr} onChange={this.handleChange}/>

                            </div>

                        </div>

                        </div>
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
                            {this.state.hasFailed && <div className="alert alert-warning"> Failed</div>}
                            {this.state.showSuccessMessage && <div className="alert alert-warning"> Successful</div>}
                            <br />

                            </div>
                </form>
                </div>
                </div>
                </div>
        )}

}

export default CreateSRComponent
