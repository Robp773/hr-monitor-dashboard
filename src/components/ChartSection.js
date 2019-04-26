import React from 'react';
import { Doughnut, Pie, Bar } from 'react-chartjs-2';
import states from 'us-state-codes';

export default class ChartSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

  render() {

let dataThree, optionsThree;
    if (this.props.data.isSummary) {
      optionsThree = {
        scales: {
          xAxes: [{
             
              ticks: {
                  autoSkip: false
              }
          }]
      },
        title: {
          display: true,
          text: 'Invalid Cells by State',
          fontSize: '25'
        }
      }
      dataThree = {
        datasets: [{
          label: 'State Spreadsheet Data',
          data: this.props.data.chartData,
          backgroundColor: [
            '#031A6B', '#5C6B70','#007EA7','#35B5E8','#8C96BB','#2784A9', '#003459', 'rgba(0, 181, 204, 1)', 'rgb(135,206,235)',
            '#031A6B', '#5C6B70','#007EA7','#35B5E8','#8C96BB','#2784A9', '#003459', 'rgba(0, 181, 204, 1)', 'rgb(135,206,235)',
            '#031A6B', '#5C6B70','#007EA7','#35B5E8','#8C96BB','#2784A9', '#003459', 'rgba(0, 181, 204, 1)', 'rgb(135,206,235)',
            '#031A6B', '#5C6B70','#007EA7','#35B5E8','#8C96BB','#2784A9', '#003459', 'rgba(0, 181, 204, 1)', 'rgb(135,206,235)',
            '#031A6B', '#5C6B70','#007EA7','#35B5E8','#8C96BB','#2784A9', '#003459', 'rgba(0, 181, 204, 1)', 'rgb(135,206,235)',
            '#031A6B', '#5C6B70','#007EA7','#35B5E8','#8C96BB','#2784A9', '#003459', 'rgba(0, 181, 204, 1)', 'rgb(135,206,235)',
            '#031A6B', '#5C6B70','#007EA7','#35B5E8','#8C96BB','#2784A9', '#003459', 'rgba(0, 181, 204, 1)', 'rgb(135,206,235)'
          ],
        }],
        labels: this.props.data.chartLables
       }
    }

      let options={       
        // maintainAspectRatio: false,
         title: {
          display: true,
          text: 'Data Status',
          fontSize: '25'
         }
      }

      let data = {
      datasets: [{   
          data: [this.props.data.brokenLinks, this.props.data.blankSpaces, ((this.props.data.rowCount * 3) - (this.props.data.blankSpaces + this.props.data.brokenLinks))],
          backgroundColor: [
            'red',
            'rgba(0,0,0,.075)',
            'lightgreen',
        ],
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Broken Links',
          'Blanks',
          'Valid Cells'
      ]
  };

  let  optionsTwo={     
    // maintainAspectRatio: false,
   
    title: {
     display: true,
     text: 'Data Categories',
     fontSize: '25'
    }
 }
 let dataArray = [];
for(let key in this.props.data.typeCount){
    dataArray.push(this.props.data.typeCount[key])
}
 let dataTwo = {

 datasets: [{
   data: dataArray,
   backgroundColor: [
     '#031A6B', '#5C6B70','#007EA7','#35B5E8','#8C96BB','#2784A9', '#003459', 'rgba(0, 181, 204, 1)', 'rgb(135,206,235)'
   ],
 }],
 labels: Object.keys(this.props.data.typeCount)
}

      return (
        <div className={`chart-section ${this.props.data.isSummary ? 'chart-section--summary' : ''}`}>

        <h2 className='chart-section__h2'>{(states.getStateNameByStateCode(this.props.data.state) || this.props.data.state) || 'Database Summary'}</h2>
        
        <div className='chart-section__chart-container'>
            <Doughnut options={options} width={50} height={45} data={data} />
        </div>
          
        <div className='chart-section__chart-container'>
            <Pie options={optionsTwo} width={50} height={45} data={dataTwo} />
        </div>

          {this.props.data.isSummary ?   
              <Bar options={optionsThree} width={100} height={37.5} data={dataThree} />
          : null}
      
        </div>
    );
  }
}        