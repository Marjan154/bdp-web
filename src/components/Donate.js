import React, { Component } from "react";
import "../styles/donate.css";

class Donate extends Component {
  state = {};
  render() {
    return (
      <div class="row">
        <div class="col-75">
          <div class="container">
          <form action="/action_page.php">
            <div class="row">
              <div class="col-50">
                <h3>Billing Address</h3>
                <label for="fname"><i class="user icon"></i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
                <label for="email"><i class="envelope icon"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="john@example.com"></input>
                <label for="adr"><i class="address card icon"></i> Address</label>
                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
                <label for="city"><i class="university icon"></i>City</label>
                <input type="text" id="city" name="city" placeholder="New York"></input>
                <div class="row">
                  <div class="col-50">
                    <label for="state">State</label>
                    <input type="text" id="state" name="state" placeholder="NY"></input>
                  </div>
                  <div class="col-50">
                    <label for="zip">Zip</label>
                    <input type="text" id="zip" name="zip" placeholder="10001"></input>
                  </div>
                </div>
              </div>
              <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>

            <div class="icon-container">
              <i class="navy cc visa icon"></i>
              <i class="blue cc amex icon"></i>
              <i class="red cc mastercard icon"></i>
              <i class="orange cc discover icon"></i>
            </div>

            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>
            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"></input>
              </div>
            </div>
          </div>
            </div>
            <input type="submit" value="Continue to checkout" class="btn w3-black"></input>
          </form>
          </div>
        </div>
        <div class="col-25">
          <div class="container">
            <h4>Donation Amount <span class="price" > </span></h4>
            <p> <a>Donation</a> <span class="price">$15</span></p>
            <p>Total <span class="price" ><b>$15</b></span></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Donate;
