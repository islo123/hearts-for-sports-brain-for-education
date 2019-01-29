import React, {Component} from "react";
import Fade from 'react-reveal/Fade';

export default class Tarvitset extends Component{
    render(){
        return(
            <div className="tarvitset-style"> 
            <Fade left>
                <h3>Mitä tarvitset:</h3>
                <ul>
                    <li>Käännetyt todistukset USA:han sopiviksi</li>
                    <li>Urheiluvideo sinusta lajissasi </li>
                    <li>Viisumi</li>
                    <li>Vakuutus</li>
                    <li>Vaadittavat kansainväliset kokeet (mm. SAT/TOEFL)</li>
                    <li>Yliopistoon hakeminen</li>
                    <li>Asuminen</li>
                    <li>Stipendi</li>
                    <li>Valmistautuminen lähtöön (lentojen varaus)</li>
                </ul>
            </Fade>
            </div>
        );
    }
}