import React, { Component } from 'react'



class SensorUpdateComponent extends Component {


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

                <h3>Sensor update!</h3>
                <div className="container">
              
                </div>
                </div>
                </div>
        )}

}

export default SensorUpdateComponent
