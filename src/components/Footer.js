import React, {Component} from "react";
import Fade from 'react-reveal/Fade';

export default class Footer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="footer-style"> 
              <Fade left>  <h4>
                    Heart for Sports and Brains for Education</h4>
                <h4>
                    p. +358468119512
                </h4></Fade>
            </div>
        );
    }

}