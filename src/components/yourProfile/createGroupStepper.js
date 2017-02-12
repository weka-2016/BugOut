import React from 'react'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent
  } from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
const { connect } = require('react-redux')
const Group = require('./createGroup')
const KeyLocations = require('./groupKeyLocations')

class Stepper extends React.Component {

  handleNext () {
    const {dispatch} = this.props
    dispatch({type: 'GROUP_STEP_FORWARD', payload: 1})
  }

  handlePrev () {
    const {groupStepIndex, dispatch} = this.props
    if (groupStepIndex > 0) {
      dispatch({type: 'GROUP_STEP_BACK', payload: 1})
    }
  }

  render () {
    const finished = false
    const {groupStepIndex} = this.props

    return (
      <div style={{maxWidth: 500, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={groupStepIndex} orientation='vertical'>
          <Step>
            <StepLabel>Setup Your Group</StepLabel>
            <StepContent>
              < Group />
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Key Locations</StepLabel>
            <StepContent>
              < KeyLocations />
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create Your Cache</StepLabel>
            <StepContent>
              <p>
                Lucas will guide you through making your cache
             </p>
              <StepActions label={} isDisabled={} handeClick={} step={2} />
            </StepContent>
          </Step>
        </Stepper>
        {finished}
      </div>
    )
  }
}



function StepActions (step) {
    const {groupStepIndex} = this.props
    const label = groupStepIndex === 2 ? 'Finish' : 'Next'
    const isDisabled = groupStepIndex === 0

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={label}
          disableTouchRipple
          disableFocusRipple
          primary
          onClick={this.handleNext.bind(this)}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label='Back'
            disabled={isDisabled}
            disableTouchRipple
            disableFocusRipple
            onClick={this.handlePrev.bind(this)}
         />
       )}
      </div>
    )
  }

module.exports = connect((state) => state)(HalfStepper)
