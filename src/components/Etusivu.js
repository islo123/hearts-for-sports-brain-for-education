import React, {Component} from "react";
import Fade from 'react-reveal/Fade';


export default class Etusivu extends Component{
    render(){
        return(
            <div>
                <div className="etusivu-style">
                <Fade left>
                    <h3 >    
                       Heart for Sports and Brains for Education
                    </h3>
                    <h4>Helping You Become Great</h4>
                    <p>Oletko ikinä miettinyt, millaista elämä on USA:n Yliopistourheilijoilla? Ja Haluat samaa? Me autamme sinua unelmiesi saavuttamisessa! Sinun ei tarvitse olla lajisi huipulla sitä varten. Heart of Sports and Brains for Education auttaa sinua pääsemään Yliopistoon, joka sopii sinulle parhaiten. Meidän kokenut sekä osaava henkilökunta auttaa sinua parhaansa mukaan.</p>
                </Fade></div>
                    <div className="kuvat-style">
                            <img className="kuvat-style1" src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""/>
                            <img className="kuvat-style1" src="https://images.unsplash.com/photo-1480180566821-a7d525cdfc5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""/>
                            <img className="kuvat-style1" src="https://images.unsplash.com/photo-1530021485406-a5cf64d461ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""/>
                            <img className="kuvat-style1" src="https://images.unsplash.com/photo-1489898090484-053f011109e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""/>
                            <img className="kuvat-style1" src="https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""/>
                          
                    </div>
                
                
                
            </div>    
            
        );
    }
}