import React, { Component } from 'react'
import AddHappyHourForm from '../components/AddHappyHourForm'

export default class AddHappyHour extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Add a Happy Hour Here</h1>

        <AddHappyHourForm
          {...this.props}
          createHappyHour={this.props.createHappyHour}
          createHappyHour2={this.props.createHappyHour2}
        />
      </div>
    )
  }
}
