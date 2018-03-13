import React from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import Dropdown from './components/dropdown'
import {initStore, addSliderValue } from './stores'
class Sliders extends React.Component{
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 0,
      showAmountAlert: false
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
  render () {
    const { value } = this.state
    const def = this.props.sohag
    
    return (
      <span>
        <div className="box has-text-centered">
          Simple React js Project Using Redux and Bulma css
        </div>
        <div className="columns">
          <div className="column is-6 is-offset-3">
          <div className="box">
          <div className="field">
            <label className="label">Select Amount</label>
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
          </div>
          <Dropdown sliderValue={this.props.slidedVal}/>
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