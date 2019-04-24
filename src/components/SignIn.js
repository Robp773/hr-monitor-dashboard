import React from 'react';
import {API_BASE_URL} from '../config';
import Alert from 'react-s-alert';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

  handleSubmit(e) {
    e.preventDefault();
    e.preventDefault();
    fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({code: this.passwordInput.value})
    })
    .then((res)=>{
        if(res.statusText === 'OK'){
            this.props.clearModal()
        }
        else{
          Alert.error(`Incorrect Password`, {
            position: 'top-right',
            effect: 'slide',
            timeout: 3000,
            offset: 100,
          });
        }
    })
  }

  render() {

    return (
        <div className='sign-in'>
          <img className='sign-in__banner' alt='Humanity Road logo' src='../images/hr-logo-horizontal.png' />
          <h1 className='sign-in__h1'>Database Monitor</h1>
          <form onSubmit={(e)=>{this.handleSubmit(e)}} className='sign-in__form'>
            <input ref={(input)=>{this.passwordInput = input}} type='password' placeholder='Enter Password'/>
            <button>Submit</button>
          </form>

        </div>
    );
  }
}