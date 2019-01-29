import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Tabbar from "./components/Tabbar";
import Etusivu from "./components/Etusivu";
import Tarvitset from "./components/Tarvitset";
import Lajit from "./components/Lajit";
import Hinnasto from "./components/Hinnasto";
import Yhteys from "./components/Yhteys";
import Meistä from "./components/Meistä";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Tabbar/>
        <Switch>
              <Route exact path="/" component={Etusivu}/>
              <Route path="/Tarvitset" component={Tarvitset}/>
              <Route path="/Lajit" component={Lajit}/>
              <Route path="/Hinnasto" component={Hinnasto}/>
              <Route path="/Yhteys" component={Yhteys}/>
              <Route path="/Meistä" component={Meistä}/>
        </Switch>
       <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
