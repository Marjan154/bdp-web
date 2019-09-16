import React, { Component } from "react";
import "../styles/donate.css";
import { Header } from "semantic-ui-react";

class Donate extends Component {
  state = {};
  render() {
    return (
      // <div className="row">
      //   <div className="col-75">
      <div>
        <Header
          as="h3"
          style={{
            fontSize: "3em",
            color: "rgb(47, 137, 60)",
            paddingTop: "20px"
          }}
        >
          Donate
        </Header>
        <div style={{ padding: "50px" }}>
          <div className="donate-container" style={{ height: "300px" }}>
            <Header
              as="h3"
              style={{
                fontSize: "1.2em",
                color: "rgb(47, 137, 60)",
                paddingTop: "30px"
              }}
            >
              Currently we are only accepting PayPal Donations. Please click the
              button below to donate and you will be redirected to a page where
              you can pay through credit or debit card. Other payment methods
              coming are coming soon!
            </Header>
            <Header
              as="h3"
              style={{
                fontSize: "1.2em",
                color: "rgb(47, 137, 60)",
                paddingBottom: "40px"
              }}
            >
              Thank you for your donation!
            </Header>

            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="UTXEM8J5VZEWU"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
        </div>

        <Header
          as="h3"
          style={{
            fontSize: "1.2em",
            color: "rgb(47, 137, 60)",
            padding: "20px"
          }}
        >
          Sorry! We do not accept donations directly from our website yet.
          Please donate through the secure Paypal option above.
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
    );
  }
}

export default Donate;
