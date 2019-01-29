import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Tabbar extends Component{
    render(){ 
        return(
           
            <div className="tabbar-style">
                <div className="link-style">
                    <Link to="/" className="link">
                            <div className="in-link">
                                Etusivu 
                             </div>   
                    </Link>
               
                </div>
                <div className="link-style" >
                    <Link to="/Tarvitset" className="link">
                            <div className="in-link">
                               USA Yliopistourheilijaksi
                               </div> 
                    </Link>
                </div>
                <div className="link-style">
                    <Link to="/Lajit" className="link">
                            <div className="in-link">
                                Lajit
                            </div>
                    </Link>
                </div>
                <div className="link-style">
                    <Link to="/Hinnasto" className="link">
                             <div className="in-link">
                                Hinnasto
                                </div> 
                    </Link>
                </div> 
                <div className="link-style">
                    <Link to="/Meistä" className="link">
                                <div className="in-link">
                                Yritys
                                </div> 
                    </Link>
                </div>
                <div className="link-style" >   
                    <Link to="/Yhteys" className="link">
                             <div className="in-link">
                                Ota Yhteyttä
                                </div> 
                    </Link>
                 </div>     
            </div>
            
         
            
                
        );
    }
}