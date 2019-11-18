import React, { Component } from 'react'



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
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
     
    submitSignUp = (e) => {
        
        
        e.preventDefault();
        const data = {
            machineId: this.state.md,
            serviceRequestName: this.state.sr,
            date: Date(Date.now()),
            status: "pending"
        }
        
        console.log("hihihhi", data)
    }
    
   
    render() {
        return (
                  <div className="container">
                        <div  style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)", borderRadius: '10px' }}>

                <h4>Create a new Service Request </h4>
                <div className="container">

                <form onSubmit={this.submitSignUp}>
                <div className="row" >

                        <div className="col-sm-12 col-md-12">

                            <div className="form-group">
                                <label htmlFor="where"><h6>Machine Details</h6></label>
                                <input type="text" className="form-control" name="md" id="md" placeholder="Machine Details" value={this.state.md} onChange={this.handleChange}/>

                            </div>

                        </div>

                        </div>
                        <div className="row" >

                        <div className="col-sm-12 col-md-12">

                            <div className="form-group">
                                <label htmlFor="where"><h6>Service Request</h6></label>
                                <input type="text" className="form-control" name="sr" id="sr" placeholder="Service Request" value={this.state.sr} onChange={this.handleChange}/>

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
