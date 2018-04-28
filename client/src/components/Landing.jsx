import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import {
  Container,
  Grid,
  Header,
  Image,
  List,
  Responsive,
  Segment
} from 'semantic-ui-react';

class Landing extends React.Component {

  componentDidMount() {
    const config = {
      origin: 'top',
      duration: 1000,
      delay: 150,
      distance: '50px',
      easing: 'ease'
    };
    ScrollReveal().reveal(this.refs.box1, config);
  }

  render() {
    return (
      <Responsive>
        <Segment
          vertical
          style={{
            minHeight: 700,
            padding: '1em 0em',
            backgroundSize: 'cover',
            backgroundImage: 'url(https://c1.staticflickr.com/1/820/39104766100_936bc7c75d_o.jpg)'
          }}
        >
          <Container
            text
            style={{ textAlign: 'right' }}
          >
            <Header
              as="h1"
              content="TEST"
              style={{
                fontSize: '5em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '2.0em',
                fontFamily: 'Hammersmith One',
                textAlign: 'left'

              }} />
            <h2
              ref="box1"
              style={{
                fontSize: '2em',
                fontFamily: 'Roboto Condensed',
                marginTop: '1em',
                textAlign: 'left',
                color: '#4183D9'
              }}
            >
            Decentralized Voting.
            </h2>
          </Container>
        </Segment>
        
        <Segment
          inverted
          vertical
          style={{
            padding: '5em 0em',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header style={{textAlign: 'left'}} inverted as="h4" content="About" />
                  
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header style={{textAlign: 'left'}} inverted as="h4" content="Actions" />
                  <List link inverted>
                    <Link to="/settings">
                      <List.Item as="a">Settings</List.Item>
                    </Link>
                    <br />
                    <Link to="/createpoll">
                      <List.Item as="a">Create Elections</List.Item>
                    </Link>
                    <br />
                    <Link to="/voter">
                      <List.Item as="a">Voter Page</List.Item>
                    </Link>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header style={{ textAlign: 'left' }} as="h4" inverted>Test</Header>
                  <p>Elections.</p>
                  
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Responsive>
    );
  }
}


export default Landing;
