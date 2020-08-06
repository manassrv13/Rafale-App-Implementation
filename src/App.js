import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Rafale Delivery System
            <div>Paris to Ambala</div>
        </p>
          <a
            className="App-link"
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help For Maps
        </a>
        </header>
        <Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
 
 </InfoWindow>
</Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCCHz0FOBHCYDbwBpE9xq-OUcpCs85nROE")
})(App)
