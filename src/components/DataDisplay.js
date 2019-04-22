import React from 'react';
import ChartSection from './ChartSection';
import DataSection from './DataSection';

export default class DataDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

  render() {

    return (
        <div className='data-display'>

        <ChartSection/>
        <DataSection/>

        </div>
    );
  }
}