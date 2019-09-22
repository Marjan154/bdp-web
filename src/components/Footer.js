import React from "react";
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
                <Grid.Column width={50}>
                  <Header as="h2" inverted>
                    Follow us on social media
                  </Header>
                  <List horizontal>
                    <List.Item>
                      <a
                        href="https://www.facebook.com/bangladeshdevelopmentproject/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <i class="facebook square icon" />
                      </a>
                    </List.Item>
                    <List.Item>
                      <a
                        href="https://twitter.com/deshdevelopment"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <i class="twitter square icon" />
                      </a>
                    </List.Item>
                    <List.Item>
                      <a
                        href="https://www.instagram.com/bd.development/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <i class="instagram icon" />
                      </a>
                    </List.Item>
                    <List.Item>
                      <a
                        href="https://www.linkedin.com/company/bangladeshdevelopmentproject/about/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
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
