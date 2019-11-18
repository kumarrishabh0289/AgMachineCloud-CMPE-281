import React, { Component } from 'react'
import ManageSRComponent from './ManageSRComponent.jsx'
import CreateSRComponent from './CreateSRComponent.jsx'


class SMDashboardComponent extends Component {


    constructor(props) {
        super(props)
        

        this.state = {
            welcomeMessage: 'Hey You Are Authorized',
            showResultsAdd: false,
            showResultsDelete: false,
            showResultsUpdate: false

        }

        this.onClick = this.onClick.bind(this);
        this.onClickUpdate = this.onClickUpdate.bind(this);


        
    }

    onClick() {
        this.setState({ showResultsAdd: true , showResultsDelete: false  });
    }
    onClickUpdate() {
        this.setState({ showResultsDelete: true ,  showResultsAdd: false  });
    }

    render() {
        const divStyle = {
            marginTop: '10px',
            marginLeft: '10px',
            marginBottom: '10px'
          };
        return (
                  <div className="container">
                        <div  style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)", borderRadius: '10px' }}>

                
                <div className="container">
                <button class="btn btn-default" type="button" style={divStyle} onClick={this.onClick} >Create Service Request</button> 
                <button class="btn btn-default" type="button" style={divStyle}  onClick={this.onClickUpdate} > Manage Service Request </button> 
                
                { this.state.showResultsDelete ? <ManageSRComponent /> : null }
                { this.state.showResultsAdd ? <CreateSRComponent /> : null }

                </div>
                </div>
                </div>
        )}

}

export default SMDashboardComponent
