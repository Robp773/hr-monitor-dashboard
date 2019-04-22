import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

  render() {

    return (
        <div className='header'>

            <h1 className='header__h1'>HR DATA MONITOR</h1>

            <div className='header__scan-section'>  
              <h3 className='header__last-scan'>Last Scan:</h3>
              <button className='header__scan-btn'>Scan</button>
            </div>

        </div>
    );
  }
}