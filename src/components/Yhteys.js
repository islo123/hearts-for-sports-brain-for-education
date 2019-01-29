import React,{Component} from "react";
import axios from "axios";


const API_PATH = 'http://localhost:1992/react-contact-form/api/contact/index.php';

export default class Yhteys extends Component{
    constructor(props) {
        super(props);
        this.state = {
          fname: '',
          lname: '',
          email: '',
          message: '',
          mailSent: false,
          error: null
        }
      }

      handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
          })
        .then(result => {
          this.setState( { 
            mailSent: result.data.sent
          })
          console.log(this.state);
        })
        .catch(error => this.setState( { error: error.message } ));
      };
    

    render(){
        return(
            <div className="yhteys-style">
                <h3>Ota Yhteyttä</h3>
                 {/* https://blog.bitsrc.io/how-to-build-a-contact-form-with-react-js-and-php-d5977c17fec0*/}
                    <form action="#" >
                        <label>Etunimi</label>
                        <input type="text" id="fname" name="firstname" placeholder="..."
                            value={this.state.fname}
                            onChange={e => this.setState({ fname: e.target.value })}/>

                        <label>Sukunimi</label>
                        <input type="text" id="lname" name="lastname" placeholder="..."
                            value={this.state.lname}
                            onChange={e => this.setState({ lname: e.target.value })}/>


                        <label>Säköpostiosoite</label>
                        <input type="email" id="email" name="email" placeholder="..."
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}/>


                        <label>Viesti</label>
                        <textarea id="message" name="message" placeholder="..."
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}></textarea>
                            
                        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Lähetä" />
                        <div> 
                            {this.state.mailSent  &&
                            <div className="sucsess">Viestisi on vastanotettu. Kiitos, että otit meihin yhteyttä! </div>
                            }
                            {this.state.error  &&
                            <div className="error">Viesti ei mennyt perille. Voitte soitatte meille numeron +358468119512</div>
                            }
                        </div>
                        
                    </form >
                    
            </div>
        );
    }
}
