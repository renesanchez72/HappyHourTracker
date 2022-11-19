import React, { Component } from 'react'

export default class AddHappyHourDealForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: this.props.description || '',
      startTime: this.props.startTime || '',
      endTime: this.props.endTime || '',
      sunday: this.props.sunday || false,
      monday: this.props.monday || false,
      tuesday: this.props.tuesday || false,
      wednesday: this.props.wednesday || false,
      thursday: this.props.thursday || false,
      friday: this.props.friday || false,
      saturday: this.props.saturday || false
    }
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let formData = {
      description: this.state.description,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      sunday: this.state.sunday,
      monday: this.state.monday,
      tuesday: this.state.tuesday,
      wednesday: this.state.wednesday,
      thursday: this.state.thursday,
      friday: this.state.friday,
      saturday: this.state.saturday
    }
    this.props.createHappyHourDealHelper(this.props.happyhour_id, formData)
  }

  handleUpdate = async (e) => {
    e.preventDefault()
    let formData = {
      description: this.state.description,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      sunday: this.state.sunday,
      monday: this.state.monday,
      tuesday: this.state.tuesday,
      wednesday: this.state.wednesday,
      thursday: this.state.thursday,
      friday: this.state.friday,
      saturday: this.state.saturday
    }
    this.props.updateHappyHourDealHelper(this.props.happyhourdeal_id, formData)
  }

  render() {
    return (
      <div>
        {this.props.updateClicked === true ? (
          <div>
            <form className="dealForm">
              {/* <div className="dealDesc"> */}
              <h4>Deal Description:</h4>
              <input
                type="text"
                placeholder="Enter deal description here"
                onChange={(e) => this.handleInputChange(e)}
                value={this.state.description}
                name="description"
              ></input>
              {/* </div> */}

              <div className="timeAndDateInputs">
                {/* <div className="timeInputs"> */}
                <div className="timeInputContainer">
                  <h4>Start Time:</h4>
                  <input
                    type="text"
                    placeholder="6pm"
                    onChange={(e) => this.handleInputChange(e)}
                    value={this.state.startTime}
                    name="startTime"
                  ></input>
                </div>
                <div className="timeInputContainer">
                  <h4>End Time:</h4>
                  <input
                    type="text"
                    placeholder="9pm"
                    onChange={(e) => this.handleInputChange(e)}
                    value={this.state.endTime}
                    name="endTime"
                  ></input>
                </div>
                {/* </div> */}

                <div className="daysOfWeek-Box">
                  <input
                    name="sunday"
                    type="checkbox"
                    checked={this.state.sunday}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                  <input
                    name="monday"
                    type="checkbox"
                    checked={this.state.monday}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                  <input
                    name="tuesday"
                    type="checkbox"
                    checked={this.state.tuesday}
                    onChange={(e) => this.handleInputChange(e)}
                  />

                  <input
                    name="wednesday"
                    type="checkbox"
                    checked={this.state.wednesday}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                  <input
                    name="thursday"
                    type="checkbox"
                    checked={this.state.thursday}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                  <input
                    name="friday"
                    type="checkbox"
                    checked={this.state.friday}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                  <input
                    name="saturday"
                    type="checkbox"
                    checked={this.state.saturday}
                    onChange={(e) => this.handleInputChange(e)}
                  />

                  <h4>S</h4>
                  <h4>M</h4>
                  <h4>T</h4>
                  <h4>W</h4>
                  <h4>T</h4>
                  <h4>F</h4>
                  <h4>S</h4>
                </div>
              </div>

              <div className="dealFormButtonsContainer">
                <button
                  onClick={(e) => this.props.cancelUpdateDeal(e)}
                  className="dealSubmitBtn"
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => this.handleUpdate(e)}
                  className="dealSubmitBtn"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <form className="dealForm">
              {/* <div className="dealDesc"> */}
              <h4>Deal Description:</h4>
              <input
                type="text"
                placeholder="Enter deal description here"
                onChange={(e) => this.handleInputChange(e)}
                value={this.state.description}
                name="description"
              ></input>
              {/* </div> */}
              <div className="timeAndDateInputs">
                {/* <div className="timeInputs"> */}
                <div className="timeInputContainer">
                  <h4>Start Time:</h4>
                  <input
                    type="text"
                    placeholder="6pm"
                    onChange={(e) => this.handleInputChange(e)}
                    value={this.state.startTime}
                    name="startTime"
                  ></input>
                </div>
                <div className="timeInputContainer">
                  <h4>End Time:</h4>
                  <input
                    type="text"
                    placeholder="9pm"
                    onChange={(e) => this.handleInputChange(e)}
                    value={this.state.endTime}
                    name="endTime"
                  ></input>
                </div>
                {/* </div> */}

                <div className="daysOfWeek-Box">
                  <input
                    name="sunday"
                    type="checkbox"
                    checked={this.state.sunday}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                  <input
                    name="monday"
                    type="checkbox"
                    checked={this.state.monday}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                  <input
                    name="tuesday"
                    type="checkbox"
                    checked={this.state.tuesday}
                    onChange={(e) => this.handleInputChange(e)}
                  />

                  <input
                    name="wednesday"
                    type="checkbox"
                    checked={this.state.wednesday}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                  <input
                    name="thursday"
                    type="checkbox"
                    checked={this.state.thursday}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                  <input
                    name="friday"
                    type="checkbox"
                    checked={this.state.friday}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                  <input
                    name="saturday"
                    type="checkbox"
                    checked={this.state.saturday}
                    onChange={(e) => this.handleInputChange(e)}
                  />

                  <h4>S</h4>
                  <h4>M</h4>
                  <h4>T</h4>
                  <h4>W</h4>
                  <h4>T</h4>
                  <h4>F</h4>
                  <h4>S</h4>
                </div>
              </div>

              <div className="dealFormButtonsContainer">
                <button
                  onClick={(e) => this.props.cancelAddDeal(e)}
                  className="dealSubmitBtn"
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => this.handleSubmit(e)}
                  className="dealSubmitBtn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    )
  }
}
