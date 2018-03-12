import React from 'react'
export default class Dropdown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            optionsdata : [],
            dropDownVal: 0,
            result: 0,
            alertMsgAmount: false,
            alertMsgInterest: false,
        }
      }
      componentWillMount() {
          let optionArray = []
          for ( var i = 1; i <= 10; i ++) {
              optionArray.push(i)
          }
          this.setState({optionsdata: optionArray})
      }
      showResult = () => {
        this.setState({alertMsg: false})
            // eslint-disable-next-line
            let sliderVal =  parseInt(this.props.sliderValue);
            if (sliderVal === 0) {
                return this.setState({alertMsgAmount: true})
             } else {
                this.setState({alertMsgAmount: false})
             }
            // eslint-disable-next-line
            let dropDownVal =  parseInt ( this.state.dropDownVal )
            if (!dropDownVal) {
                return this.setState({alertMsgInterest: true})
            } else {
                this.setState({alertMsgInterest: false})
            }
           
            this.setState({result: sliderVal + (dropDownVal * sliderVal)})
      }
      handleChange = (e) => {
          this.setState({dropDownVal: e.target.value})
      }
    render () {
        let alertAmount = ''
        let alertInterest = ''
        if (this.state.alertMsgAmount) {
            alertAmount =  <div className="notification is-danger is-active">
            Please Select Amount From slider
            </div>
        }
        if (this.state.alertMsgInterest) {
            alertInterest =  <div className="notification is-danger is-active">
            Please Interest
            </div>
        }
        return (
            <span>
            {alertAmount}
                <div className="field">
                    <label className="label">Interest</label>
                    <div className="control">
                        <div className="select">
                            <select onChange={this.handleChange}>
                                <option value="0">--Please select--</option>
                                    {this.state.optionsdata.map(function(value, key){  
                                        return (<option key={key} value={value}>{value}</option> )
                                    })}
                            </select>
                        </div>
                    </div>
                </div>
                {alertInterest}                 
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link"  onClick={this.showResult}>Submit</button>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Result = {this.state.result} </label>
                    <label className="label"></label>
                </div>
            </span>
       )
    }
}