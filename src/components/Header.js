import React from 'react';
import {API_BASE_URL} from '../config';
import Alert from 'react-s-alert';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
handleScanClick(){
  fetch(`${API_BASE_URL}/initiate-scan`).then((result)=>{
    if(result.statusText === 'OK'){
      Alert.success(`Scan Initiated - Est. Time to Complete: 5 Mins`, {
        position: 'top-right',
        effect: 'slide',
        timeout: 3000,
        offset: 100,
      });
  }
  else{
    Alert.warning(`Scan Already Running`, {
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
        <div className='header'>

            <h1 className='header__h1'>HR DATA MONITOR</h1>

            <div className='header__scan-section'>  
              <h3 className='header__last-scan'>Last Scan: {this.props.lastScan}</h3>
              <button onClick={()=>{this.handleScanClick()}} className='header__scan-btn'>Scan</button>
            </div>

        </div>
    );
  }
}