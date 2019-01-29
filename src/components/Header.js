import React, {Component} from "react";
import Fade from 'react-reveal/Fade';

export default class Header extends Component{
    render(){
        return(
            <div className="header-style">
            {/*https://www.react-reveal.com/examples/common/flip/ */}
            <Fade left>Heart for Sports and Brains for Education</Fade></div>
        );
    }
}