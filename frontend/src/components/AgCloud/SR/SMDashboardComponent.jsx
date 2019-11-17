import React, { Component } from 'react'



class SMDashboardComponent extends Component {


    constructor(props) {
        super(props)
        

        this.state = {
            welcomeMessage: 'Hey You Are Authorized'
        }
        
    }

    render() {
        return (
                  <div className="container">
                        <div  style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)", borderRadius: '10px' }}>

                <h1>SM Dashboard!</h1>
                <div className="container">
              
                </div>
                </div>
                </div>
        )}

}

export default SMDashboardComponent
