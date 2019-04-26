import React from 'react';
import {
  API_BASE_URL
} from '../config';
import io from "socket.io-client";
import Alert from 'react-s-alert';
import moment from 'moment';

export default class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        scanData: {
          running: false
        }
      };

    }
    componentDidMount() {
      this.scanSocket = io(API_BASE_URL);
      this.scanSocket.on("scan-update", msg => {
        this.setState({
          scanData: msg
        })
      })
    }

    handleScanClick() {
      if (this.state.scanData.running) {

        Alert.warning('Scan Already Running', {
          position: 'top-right',
          effect: 'slide',
          timeout: 3000,
          offset: 100
        });
        return;
      }
      this.scanSocket.emit('test', 'test message')
    }

  render() {

    return (
        <div className='header'>

            <h1 className='header__h1'>HR DATA MONITOR</h1>

            <div className='header__scan-section'>

              <div> 
                <div><b>Last Scan: </b> {moment(Number(this.props.lastScan)).format('M/DD LTS')}</div>
                <div><b>Scan Status: </b>{this.state.scanData.running ? `Running - ${this.state.scanData.scanLength - this.state.scanData.scansLeft}/${this.state.scanData.scanLength} sheets` : 'Inactive'}</div>
              </div>
            
           <button onClick={()=>{this.handleScanClick()}} className='header__scan-btn'>Scan</button>
            
            </div>

        </div>
    );
  }
}