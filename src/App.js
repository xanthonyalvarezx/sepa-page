import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { Button, Icon, } from "semantic-ui-react";
import FormPage from './pages/FormPage'
import Nav from './components/Nav'
import Main from './pages/Main'
import VideoPage from './pages/VideoPage'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
    }
  }
  render() {
    return (
      <div className="App">
        <Router>

          <Nav />
          <Switch>
            <Route exact path='/' component={Main} />

            <Route path='/Videos' component={VideoPage} />

            <Route path='/Subscribe' component={FormPage} />
          </Switch>

        </Router>
        <footer>
          <div className='socialButtonDiv'>
            <h4>Find us on Facebook and Instagram!</h4>
            <Button color='facebook'>
              <Icon name='facebook' /> <a href='https://www.facebook.com/SePaMountainBiking' target='_blank'>SEPA Mountsin Biking</a>
            </Button>

            <Button color='instagram'>
              <Icon name='instagram' /> <a href='https://www.instagram.com/sepa_mountain_biking/' target='_blank'>SEPA Mountsin Biking</a>
            </Button>
          </div>¸
                </footer>
      </div>

    );
  }
}

export default App;
