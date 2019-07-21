import React, { Component } from "react";
import { Link } from "react-router-dom";

class BigCard extends Component {
  state = {};
  render() {
    const { image, description, title, linkroute } = this.props;
    return (
      <div style={{ padding: "50px" }}>
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={image}
                className="card-img"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <Link to={`/issues${linkroute}`}>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigCard;

{
  /* <Card>
<Image
  src="https://image.shutterstock.com/image-vector/social-member-vector-icon-person-260nw-1139787308.jpg"
  wrapped
  ui={false}
/>
<Card.Content>
  <Card.Header>Matthew</Card.Header>
  <Card.Meta>
    <span className="date">Joined in 2015</span>
  </Card.Meta>
  <Card.Description>
    Matthew is a musician living in Nashville.
  </Card.Description>
</Card.Content>
<Card.Content extra>
  <a>
    <Icon name="user" />
    22 Friends
  </a>
</Card.Content>
</Card> */
}
