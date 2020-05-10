import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';

class Login extends Component {
  
      constructor(props){
        super(props);

        this.state={
          uname:null,
          pwd:null,
          key:'1234567890',
          ok:false
        };

      }

      handleFormSubmit = e => {
        
        const API_PATH = "http://localhost:8012/php-data-analytics/api/api.php/getLogin";

        //const url = "http://localhost/php-data-analytics/api/api.php/getApi?key=1234567890";
        //const API_PATH = "http://localhost:80/api_load.php";

        e.preventDefault();
        axios({
          method: 'post',
          url: API_PATH,
          headers: {'content-type': 'application/json'},
          data:this.state
        }).then(result => {
            this.setState({
              ok: result.data.sent,
              uname:result.data.uname
            })

            console.warn(this.props.history.push('home')) /// to redirect list  pages

          })
          .catch(error => this.setState({ error: error.message }));
      };

  render(){
      return (
        <div className="App">

            <h2>LogIn</h2>

              <div>
              <form action="#" >

                <label>User Name</label>
                <input type="text" id="uname" name="uname" placeholder="Your user name.."
                  value={this.state.uname}
                  onChange={e => this.setState({ uname: e.target.value })}/>

                <label>Password</label>
                <input type="password" id="pwd" name="pwd" placeholder="Your password.."
                  value={this.state.pwd}
                  onChange={e => this.setState({ pwd: e.target.value })}/>
                
                
                <input type="submit" onClick={e => this.handleFormSubmit(e)} value="LogIn" />

              </form>
              </div>
        </div>
      );
  }
}

export default Login;
