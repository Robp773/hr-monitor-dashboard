import React from 'react';

export default class DataSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);

    }

    componentWillUnmount() {
      window.removeEventListener('keydown');
    }

    handleKeyDown(e) {
      if (e.keyCode === 27) {
        if(this.props.modalStatus){
          this.props.toggleModal()
        }
      }
    }

  render() {
    console.log(this.props.data)
    let data;
  if(this.props.data.data){  
       data = this.props.data.data.map((item, index)=>{
        return  (     
          <tr className={`data-section__tr ${index % 2 === 0 ? 'even': 'odd'}`} key={index}>   
            <td className='data-section__td data-section__td--url'><a onClick={(e)=>{e.stopPropagation()}} target='#' href={item.value ? item.value : null}>{item.value ? item.value : 'N/A'}</a></td>
            <td className='data-section__td'>{item.status.toUpperCase()}</td>
            <td className='data-section__td'>Row {item.row} Col {item.col}</td>
          </tr>
        )
      })
    if(this.props.modalStatus){
    return (
      <div onClick={()=>{this.props.toggleModal()}} className={`data-section__modal-bg`}>
        <div onClick={(e)=>{e.stopPropagation()}}  className={`data-section--active`}>
          <h2 className='data-section__h2'>{this.props.data.state} - Invalid Cells ({this.props.data.data.length})</h2>
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
      </div>
    );
    }
    else{
      return  (
              <div className={`data-section`}>
                <h2 className='data-section__h2'>Invalid Cells ({this.props.data.data.length})</h2>
                <button className='data-section__expand-btn' onClick={()=>{this.props.toggleModal()}}>Expand</button>
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
              )
       }
  }
  else{
    return null;
  }
}
}