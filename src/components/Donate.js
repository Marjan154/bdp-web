import React, { Component } from "react";
import "../styles/donate.css";
import { Header } from "semantic-ui-react";

class Donate extends Component {
  state = {};
  render() {
    return (
      // <div className="row">
      //   <div className="col-75">
      <div style={{ padding: "50px" }}>
        <Header as="h3" style={{ fontSize: "3em", color: "rgb(165, 18, 18)" }}>
          Donate
        </Header>
        <div className="donate-container">
          <form>
            <div className="row">
              <div className="col-50">
                <h3>Billing Address</h3>
                <label for="fname">Full Name</label>
                <div className="row">
                  <div className="col-50">
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-50">
                    <input
                      type="text"
                      id="lname"
                      name="lastname"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <label for="adr">Billing Address</label>
                <div className="row">
                  <div className="col-50">
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="Street Address"
                    />
                  </div>
                  <div className="col-50">
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="Apt #"
                    />
                  </div>
                </div>

                <label for="city">City</label>
                <input type="text" id="city" name="city" placeholder="City" />
                <div className="row">
                  <div className="col-50">
                    <label for="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="State"
                    />
                  </div>
                  <div className="col-50">
                    <label for="zip">Zip</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
                <label for="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-50">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>

                <div className="icon-container">
                  <i className="navy cc visa icon" />
                  <i className="blue cc amex icon" />
                  <i className="red cc mastercard icon" />
                  <i className="orange cc discover icon" />
                </div>

                <label for="cname">Name on card</label>
                <div className="row">
                  <div className="col-50">
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-50">
                    <input
                      type="text"
                      id="lname"
                      name="lastname"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* <label for="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input> */}

                <div className="row">
                  <div className="col-25">
                    <label for="ccnum">Credit card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="Card #"
                    />
                  </div>
                  <div className="col-25">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="CVV" />
                  </div>
                  <div className="col-25">
                    <label for="expmonth">Expiration Month</label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      placeholder="Month"
                    />
                  </div>
                  <div className="col-25">
                    <label for="expyear">Expiration Year</label>
                    <input
                      type="text"
                      id="expyear"
                      name="expyear"
                      placeholder="Year"
                    />
                  </div>
                </div>

                {/* <label for="expmonth">Exp Month</label>
              
              <div className="row">
                <div className="col-50">
                  <label for="expyear">Exp Year</label>
                  <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
                </div>
                <div className="col-50">
                  <label for="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="352"></input>
                </div>
              </div> */}
              </div>
            </div>
            <input
              type="submit"
              value="Continue to checkout"
              className="btn w3-black"
            />
          </form>
        </div>
      </div>
      // {/* <div className="col-25">
      //   <div className="donate-container">
      //     <h4>Donation Amount <span className="price" > </span></h4>
      //     <p> <a>Donation</a> <span className="price">$15</span></p>
      //     <p>Total <span className="price" ><b>$15</b></span></p>
      //   </div>
      // </div> */}
      // </div>
    );
  }
}

export default Donate;
