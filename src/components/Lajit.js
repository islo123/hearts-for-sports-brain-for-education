import React,{Component} from "react";
import Fade from 'react-reveal/Fade';

export default class Lajit extends Component{
    render(){
        return(
            <div className="lajit-style"> 
                <Fade left>
                    <h3>
                        Lajit
                    </h3>
                    <ul>
                        <li>Baseball</li>
                        <li>Am. jalkapallo</li>
                        <li>Jääkiekko</li>
                        <li>Jalkapallo</li>
                        <li>Lentopallo</li>
                        <li>Vesipallo</li>
                        <li>Koripallo</li>
                        <li>Golf</li>
                        <li>Keilaus</li>
                        <li>Miekkailu</li>
                        <li>Maastojuoksu</li>
                        <li>Voimistelu</li>
                        <li>Ammunta</li>
                        <li>Maastohiihto</li>
                        <li>Uinti</li>
                        <li>Tennis</li>
                        <li>Yleisurheilu</li>
                        <li>Paini</li>
                        <li>Nyrkkeily</li>
                        <li>Lacrosse</li>
                    </ul>
                </Fade>
            </div>
        );
    }
}
