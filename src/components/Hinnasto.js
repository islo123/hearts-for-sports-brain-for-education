import React, {Component} from "react";
import Fade from 'react-reveal/Fade';

export default class Hinnasto extends Component{
    render(){
        return(
            <div class="hinnasto-style">
               <Fade left> <h2>Hinnasto</h2>
                <ul>
                    <li>Meidän kokemuksen sekä kontaktien avulla saat parhaimman mahdollisen opiskelupaikan itsellesi erittäin kilpailukykyisellä hinnalla.<br/> Säästät rahaa, jotka mahdollisesti käytät koulun lukukausimaksuihin.</li>
                    
                    <li>700e palvelumaksu </li>
                    <li>700e (kun lähdet Yhdysvaltoihin)</li>
                    
                    <li>Autamme sinua myös kun olet Yliopistossa, eli saat tukea sekä apua sielläkin meidän kautta.</li>
                </ul>
                </Fade>
            </div>
        );
    }
}