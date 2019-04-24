import React from 'react';

export default class DataSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

  render() {
    let data;
  if(this.props.data.data){  
       data = this.props.data.data.map((item, index)=>{
        return  (     
          <tr className='data-section__tr' key={index}>   
            <td className='data-section__td'><a target='#' href={item.value ? item.value : null}>{item.value ? item.value : 'N/A'}</a></td>
            <td className='data-section__td'>{item.status.toUpperCase()}</td>
            <td className='data-section__td'>Row {item.row} Col {item.col}</td>
          </tr>
        )
      })
    
    return (
        <div className='data-section'>
          <h2 className='data-section__h2'>Invalid Cells ({this.props.data.data.length})</h2>
          <table className='summary-list__table summary-list__table--data-section'> 
            <tbody>
              <tr className=''>
                  <th className=''>Value</th>
                  <th className=''>Status</th>
                  <th className=''>Location</th>
              </tr>
              {data}
            </tbody>
          </table>

        </div>
    );
  }
  else{
    return null;
  }
}
}