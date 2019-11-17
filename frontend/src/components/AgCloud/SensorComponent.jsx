import React, { Component } from 'react'



class SensorComponent extends Component {


    constructor(props) {
        super(props)
        

        this.state = {
            welcomeMessage: 'Hey You Are Authorized'
        }
        
    }

    render() {
        return (
                  <div className="container">
                <h1>Welcome!</h1>
                </div>
        )}

}

export default SensorComponent
