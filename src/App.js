import React from 'react';
import Header from './components/Header';
import DataDisplay from './components/DataDisplay';
import SummaryList from './components/SummaryList';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header/>

        <div className='app__info-parent'>   
          <DataDisplay/>
          <SummaryList/>
        </div>
     
      </div>
    );
  }
}