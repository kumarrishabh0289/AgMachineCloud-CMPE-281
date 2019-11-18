import React, { Component } from 'react'



class MonitorComponent extends Component {


    constructor(props) {
        super(props)
        

        this.state = {
            welcomeMessage: 'Hey You Are Authorized'
        }
        
    }

    
   
    render() {
        const divStyle = {
            marginLeft: '10px',
            marginBottom: '10px'

          };
        return (
                  <div className="container" style={divStyle} >
                        <div  style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)"}}>

                <h3>Monitor Component!</h3>
                <div className="container">
              
                </div>
                </div>
                </div>
        )}

}

export default MonitorComponent
