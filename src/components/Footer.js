import React from "react";
import { Link } from "react-router-dom";
import { Segment, Container, Grid, Header, List } from "semantic-ui-react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div>
        <Segment
          inverted
          vertical
          style={{ padding: "5em 0em", background: "rgb(165, 18, 18)" }}
        >
          <Container>
            <Grid>
              <Grid.Row>
                {/* <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item as="a">Banana Pre-Order</List.Item>
                    <List.Item as="a">DNA FAQ</List.Item>
                    <List.Item as="a">How To Access</List.Item>
                    <List.Item as="a">Favorite X-Men</List.Item>
                  </List>
                </Grid.Column> */}
                <Grid.Column width={50}>
                  <Header as="h2" inverted>
                    Follow us on social media
                  </Header>
                  <List horizontal>
                    <List.Item>
                      <a
                        href="https://www.facebook.com/bangladeshdevelopmentproject/"
                        target="_blank"
                      >
                        <i class="facebook square icon" />
                      </a>
                    </List.Item>
                    <List.Item>
                      <a
                        href="https://twitter.com/deshdevelopment"
                        target="_blank"
                      >
                        <i class="twitter square icon" />
                      </a>
                    </List.Item>
                    <List.Item>
                      <i class="instagram icon" />
                    </List.Item>
                    <List.Item>
                      <a
                        href="https://twitter.com/deshdevelopment"
                        target="_blank"
                      >
                        <i class="linkedin square icon" />
                      </a>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    </footer>
  );
}
export default Footer;
