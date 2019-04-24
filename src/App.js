import React from 'react';
import Header from './components/Header';
import SummaryList from './components/SummaryList';
import ChartSection from './components/ChartSection';
import DataSection from './components/DataSection';
import SignIn from './components/SignIn';
import {API_BASE_URL} from './config';
import {connect} from 'react-redux'
import {setState} from './actions';

import './App.css';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signedIn: true,
      indexToDisplay: null,
    }
    this.changeSummary = this.changeSummary.bind(this);
    this.clearModal = this.clearModal.bind(this);
  }
  componentWillMount(){

    fetch(`${API_BASE_URL}/data`).then((response)=>{
      return response.json()
      .then((result)=>{
        this.props.dispatch(setState(result))
      })
    })
  }

  changeSummary(index){
    this.setState({indexToDisplay: index})
  }

  clearModal(){
    this.setState({signedIn: true})
  }

  render() {

      let summaryObj = {
        isSummary: true,
        rowCount: 0,
        blankSpaces: 0,
        brokenLinks: 0,
        chartLables: [],
        chartData: [],
        typeCount: {
          "State Government": 0,
          "Largest Cities": 0,
          County: 0,
          Utilities: 0,
          Airport: 0,
          "News Stations": 0,
          Ports: 0,
          Colleges: 0
        }
      };

      this.props.validationList.map((item) => {
        summaryObj.chartLables.push(item.state);
        summaryObj.chartData.push(item.brokenLinks + item.blankSpaces)
        summaryObj.rowCount += item.rowCount;
        summaryObj.blankSpaces += item.blankSpaces;
        summaryObj.brokenLinks += item.brokenLinks;
        for (let key in item.typeCount) {
          if (key in summaryObj.typeCount) {
            summaryObj.typeCount[key] += item.typeCount[key]
          }
        }
      })

    if(!this.state.signedIn){
      return <SignIn clearModal={this.clearModal}/>
    }

    else{
    return (
      <div className="app">

        <Header lastScan={this.props.lastScan} />

        <div className='app__info-parent'>

          <div className='app__data-display'>        
            <ChartSection data={this.props.validationList[this.state.indexToDisplay] || summaryObj} />
            <DataSection data={this.props.validationList[this.state.indexToDisplay] || this.props.fullState.validationList}/>
          </div>

            <SummaryList changeSummary={this.changeSummary} summaryTotals={summaryObj} validationList={this.props.validationList}/>

        </div>
     
      </div>
    );
  }
}
}

const mapStateToProps = state => ({
  fullState: state,
  validationList: state.validationList,
  lastScan: state.validationList[0].time
})

export default connect(mapStateToProps)(App)