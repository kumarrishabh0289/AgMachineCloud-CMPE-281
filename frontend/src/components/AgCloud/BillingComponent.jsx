import React, { Component } from 'react'

import { API_URL } from '../../Constants'
import axios from 'axios';
import { PayPalButton } from "react-paypal-button-v2";

class BillingComponent extends Component {


  constructor(props) {
    super(props)


    this.state = {
      welcomeMessage: 'Hey You Are Authorized',
      allSensors: [],
      total: 0
    }

  }



  loadBilling() {
    console.log("called")
    //loads topics to show on left side of home screen
    axios.get(API_URL + '/profile/bill?email=' + sessionStorage.authenticatedUser)
      .then((response) => {
        //update the state with the response data
        console.log("logs data", response.data)
        this.setState({
          allSensors: response.data,
          total: response.data.length * 10
        });
      }).then(
        console.log("done")
      )
  }

  componentDidMount() {
    this.loadBilling();
  }


  render() {

    let allSensors = this.state.allSensors.map(topic => {
      return (

        <tr>

          {topic.serviceRequestName != null ? (
            <td>  {topic.serviceRequestName} Service Request </td>) : (
              <td>{topic.machineType} Machine </td>)}

          <td> {topic.date} </td>
          <td> 10 </td>
        </tr>
      )
    })

    return (
      <div className="container">
        <div style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)" }}>

          <div className="container">

          </div>

          <div class="container span12" >

            <div class="leftPadding180 text-center " style={{ backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)" }}>

              <section id="content">
                <div class="container">


                  <div class="row">
                    <div class="span12">
                      <div class="row">
                        <div class="span12">
                          <div class="aligncenter">
                            <h3> Contract and Billing <strong>Management </strong></h3>
                            <p>Choose from ready made packs below.
                              </p>
                          </div>
                        </div>
                      </div>


                      <div class="row">

                        <div class="span3">
                          <div class="pricing-box-wrap animated-fast flyIn">
                            <div class="pricing-heading">
                              <h3> <strong>Basic</strong></h3>
                            </div>
                            <div class="pricing-terms">
                              <h6>&#36;15.00 / Month</h6>
                            </div>
                            <div class="pricing-content">
                              <ul>
                                <li><i class="icon-ok"></i> 1 edge station</li>
                                <li><i class="icon-ok"></i> Schedule support on payment</li>
                                <li><i class="icon-ok"></i> Sensor add ons</li>
                                <li><i class="icon-ok"></i> Sensor data analytics add on</li>
                                <li><i class="icon-ok"></i> Admin dashboard </li>
                              </ul>
                            </div>
                            <div class="pricing-action">
                              <a href="#" class="btn btn-medium btn-theme whiteText"> Add </a>
                            </div>
                          </div>
                        </div>

                        <div class="span3">
                          <div class="pricing-box-wrap animated-fast flyIn">
                            <div class="pricing-heading">
                              <h3> Tier <strong>Choice</strong></h3>
                            </div>
                            <div class="pricing-terms">
                              <h6>&#36;20.00 / Month</h6>
                            </div>
                            <div class="pricing-content">
                              <ul>
                                <li><i class="icon-ok"></i> 50 edge stations</li>
                                <li><i class="icon-ok"></i> Partial support available</li>
                                <li><i class="icon-ok"></i> Sensor add ons</li>
                                <li><i class="icon-ok"></i> Sensor data analytics add on</li>
                                <li><i class="icon-ok"></i> Admin dashboard </li>
                              </ul>
                            </div>
                            <div class="pricing-action">
                              <a href="#" class="btn btn-medium btn-theme whiteText whiteText"><i class="icon-chevron-down"></i> Add </a>
                            </div>
                          </div>
                        </div>

                        <div class="span3">
                          <div class="pricing-box-wrap special animated-slow flyIn">
                            <div class="pricing-heading">
                              <h3> Enterprise <strong>Choice</strong></h3>
                            </div>
                            <div class="pricing-terms">
                              <h6>&#36;15.00 / Month</h6>
                            </div>
                            <div class="pricing-content">
                              <ul>
                                <li><i class="icon-ok"></i> 100 edge stations</li>
                                <li><i class="icon-ok"></i> 24x7 support available</li>
                                <li><i class="icon-ok"></i> Sensor analytics and add ons</li>
                                <li><i class="icon-ok"></i> 20 free service requests</li>
                                <li><i class="icon-ok"></i> Scale fast </li>
                              </ul>
                            </div>
                            <div class="pricing-action">
                              <a href="#" class="btn btn-medium btn-theme whiteText"><i class="icon-chevron-down"></i> Add </a>
                            </div>
                          </div>
                        </div>

                        <div class="span3">
                          <div class="pricing-box-wrap animated flyIn">
                            <div class="pricing-heading">
                              <h3>Lifetime <strong>Choice</strong></h3>
                            </div>
                            <div class="pricing-terms">
                              <h6>&#36; Quoted on request </h6>
                            </div>
                            <div class="pricing-content">
                              <ul>
                                <li><i class="icon-ok"></i> 100+ edge stations</li>
                                <li><i class="icon-ok"></i> 24x7 support available</li>
                                <li><i class="icon-ok"></i> Regular servicing of edge stations </li>
                                <li><i class="icon-ok"></i> Free software sensor updates </li>
                                <li><i class="icon-ok"></i> All services from other plans </li>
                              </ul>
                            </div>
                            <div class="pricing-action">
                              <a href="#" class="btn btn-medium btn-theme whiteText"><i class="icon-chevron-down"></i> Add</a>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>


                  </div>



                  <div class="row">

                    <div class="table-responsive">

                      <h6 class="title">


                        <table class="table">
                          <thead>
                            <tr>
                              <th>Service &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
                              <th>Service Duration &nbsp; </th>
                              <th>Amount</th>

                            </tr>
                          </thead>
                          <tbody>
                            {allSensors}
                          </tbody>


                        </table>
                      </h6>
                      <h3 class="aligncenter">
                        Due amount: <strong>$ {this.state.total}</strong>   </h3>

                      <PayPalButton
                        amount={this.state.total}
                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                        onSuccess={(details, data) => {
                          alert("Transaction completed by " + details.payer.name.given_name);

                          // OPTIONAL: Call your server to save the transaction
                          return fetch("/paypal-transaction-complete", {
                            method: "post",
                            body: JSON.stringify({
                              orderId: data.orderID
                            })
                          });
                        }}
                        options={{
                          clientId: "AcYldjbypGfr52zY09jJkl0W2fHFbM0ssI5f0HFxXWfiTdboyGxVsMS8nfPvK587A38a2UAldnHYf-Sr&currency=USD"
                        }}
                      />




                    </div>
                  </div>

                </div>
              </section>


              <section id="works">
                <div class="container">
                  <div class="row">
                    <div class="span12">
                      <div class="row">

                        <div class="grid cs-style-4">
                          <div class="span3">
                            <div class="item">
                              <figure>
                                <div><img src="img/dummies/works/1.jpg" alt="" /></div>
                                <figcaption>
                                  <div>
                                    <span>
                                      <a href="img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i class="icon-plus icon-circled icon-bglight icon-2x"></i></a>
                                    </span>
                                    <span>
                                      <a href="#"><i class="icon-file icon-circled icon-bglight icon-2x"></i></a>
                                    </span>
                                  </div>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                          <div class="span3">
                            <div class="item">
                              <figure>
                                <div><img src="img/dummies/works/2.jpg" alt="" /></div>
                                <figcaption>
                                  <div>
                                    <span>
                                      <a href="img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i class="icon-plus icon-circled icon-bglight icon-2x"></i></a>
                                    </span>
                                    <span>
                                      <a href="#"><i class="icon-file icon-circled icon-bglight icon-2x"></i></a>
                                    </span>
                                  </div>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                          <div class="span3">
                            <div class="item">
                              <figure>
                                <div><img src="img/dummies/works/3.jpg" alt="" /></div>
                                <figcaption>
                                  <div>
                                    <span>
                                      <a href="img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i class="icon-plus icon-circled icon-bglight icon-2x"></i></a>
                                    </span>
                                    <span>
                                      <a href="#"><i class="icon-file icon-circled icon-bglight icon-2x"></i></a>
                                    </span>
                                  </div>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                          <div class="span3">
                            <div class="item">
                              <figure>
                                <div><img src="img/dummies/works/4.jpg" alt="" /></div>
                                <figcaption>
                                  <div>
                                    <span>
                                      <a href="img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i class="icon-plus icon-circled icon-bglight icon-2x"></i></a>
                                    </span>
                                    <span>
                                      <a href="#"><i class="icon-file icon-circled icon-bglight icon-2x"></i></a>
                                    </span>
                                  </div>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default BillingComponent
