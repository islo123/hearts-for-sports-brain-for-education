import React,{Component} from "react";
import Fade from 'react-reveal/Fade';

export default class Meistä extends Component{
    render(){
        return(
            <div className="meistä-style">
            <Fade left>
                <h3>TIETOA MEISTÄ:</h3>
                <p> Yrityksemme on rehellinen sekä luotettava. Me emme vain auta sinua yliopistoon, autamme sinua pääsemään parhaimpaan mahdolliseen yliopistoon mikä sopii sinulle parhaiten! 
                    Sinun ei tarvitse olla lajisi huipulla tai parhaimmistoa, saamme sinut silti USA:han Yliopistourheilijaksi kontaktiemme avulla. Jos sinulla on kysymyksiä tai tarvitset apua jossain asiassa, 
                    älä huoli, meidän kokenut henkilökunta auttaa sinua parhaansa mukaan! </p>
            </Fade>
            </div>
        );
    }
}