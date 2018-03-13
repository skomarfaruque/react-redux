import React from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import Dropdown from './dropdown'
import {initStore, addSliderValue } from '../stores'
class Sliders extends React.Component{
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 0,
      showAmountAlert: false,
      interestVal: 0,
      result: 0,
      alertMsgAmount: false,
      alertMsgInterest: false,
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };
 

  handleChangeComplete = () => {
    this.props.addSliderValue(this.state.value)
    console.log(this.props)
    console.log('Change event completed')
  };
  handleChangeDropDown = (val) => {
    console.log(val)
    this.setState({interestVal: val})
  }
  showResult = () => {
        // eslint-disable-next-line
        let sliderVal =  parseInt(this.props.slidedVal);
        if (sliderVal === 0) {
            return this.setState({alertMsgAmount: true})
         } else {
            this.setState({alertMsgAmount: false})
         }
        // eslint-disable-next-line
        let interestVal =  parseInt ( this.state.interestVal )
        if (!interestVal) {
            return this.setState({alertMsgInterest: true})
        } else {
            this.setState({alertMsgInterest: false})
        }
       
        this.setState({result: sliderVal + (interestVal * sliderVal)})
  }
  render () {
    const { value } = this.state
    let alertAmount = ''
    let alertInterest = ''
    if (this.state.alertMsgAmount) {
        alertAmount =  <div className="notification is-danger is-active">
        Please Select Amount From slider
        </div>
    }
    if (this.state.alertMsgInterest) {
        alertInterest =  <div className="notification is-danger is-active">
        Please select interest
        </div>
    }
    return (
      <span>
        <div className="box has-text-centered">
          Simple React js Project Using Redux and Bulma css
        </div>
       
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <div className="box">
              <div className="field">
                <label className="label">Amount</label>
                <div className="control">
                  <div className='slider'>
                    <Slider
                      min={0}
                      max={100}
                      value={value}
                      onChangeStart={this.handleChangeStart}
                      onChange={this.handleChange}
                      onChangeComplete={this.handleChangeComplete}
                    />
                    <div className='value'>Selected Amount = {this.props.slidedVal}</div>
                  </div>
                  {alertAmount}
                </div>
              </div>
              <Dropdown onSelectInterest={this.handleChangeDropDown}/>
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
            </div>
          </div>
        </div>
        
      </span>
    )
  }
}
const mapStateToProps = ({ sliderVal }) => ({ slidedVal: sliderVal.value })
const mapDispatchToProps = (dispatch) => {
  return {
    addSliderValue: bindActionCreators(addSliderValue, dispatch)
  }
}
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Sliders)