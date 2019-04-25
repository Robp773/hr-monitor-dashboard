import React from 'react';

export default class SummaryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

  render() {

    let summaryList = this.props.validationList.map((item, index)=>{
          return (
          <tr onClick={()=>{this.props.changeSummary(index)}} key={index} className={`summary-list__list-item ${index % 2 === 0 ? 'odd': 'even'}`}>
              <td className='summary-list__list-item-section'><b>Name:</b> {item.state}</td>
              <td className='summary-list__list-item-section'><b>Rows:</b> {item.rowCount}</td>
              <td className='summary-list__list-item-section'><b>Blanks:</b> {item.blankSpaces}</td>
              <td className='summary-list__list-item-section'><b>Broken Links: </b>{item.brokenLinks}</td>
          </tr>
          )
    })
    return (
        <div className='summary-list'>

        <h2 className='summary-list__h2'>Summaries ({this.props.validationList.length + 1})</h2>

        <table className='summary-list__table'> 
          <tbody>

            <tr className=''>
                <th className=''></th>
                <th className=''></th>
                <th className=''></th>
                <th className=''></th>
            </tr>

            <tr onClick={()=>{this.props.changeSummary(null)}} className='summary-list__list-item even'>   
                <td className='summary-list__list-item-section'><b>Name: </b>Summary</td>
                <td className='summary-list__list-item-section'><b>Rows:</b> {this.props.summaryTotals.rowCount}</td>
                <td className='summary-list__list-item-section'><b>Blanks:</b> {this.props.summaryTotals.blankSpaces}</td>
                <td className='summary-list__list-item-section'><b>Broken Links:</b> {this.props.summaryTotals.brokenLinks}</td>
            </tr>

            {summaryList}

          </tbody>
        </table>

        </div>
    );
  }
}