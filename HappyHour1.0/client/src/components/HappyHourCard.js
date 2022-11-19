import React, { Component } from 'react'
import AddHappyHourDealForm from './AddHappyHourDealForm'
import AddHappyHourForm from './AddHappyHourForm'
import HappyHourDeal from './HappyHourDeal'

export default class HappyHourCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      happyhours: props.happyhours,
      happyhourdeals: props.happyhourdeals,
      clicked: false,
      updateClicked: false
    }
  }

  addDealToHappyHourCard = (e) => {
    e.preventDefault()
    this.setState({ clicked: !this.state.clicked })
  }

  updateHappyHour = async (e) => {
    e.preventDefault()
    this.setState({ updateClicked: !this.state.updateClicked })
  }

  removeHappyHour = async (e) => {
    e.preventDefault()
    this.props.deleteHappyHourHelper(e.target.attributes[0].value)
  }

  cancelAddDeal = (e) => {
    this.setState({ clicked: false })
  }

  cancelUpdateHappyHour = (e) => {
    this.setState({ updateClicked: false })
  }

  componentDidMount() {}

  render() {
    const { happyhour } = this.props
    let arrToMap = []

    for (let i = 0; i < happyhour.happyhourdeals.length; i++) {
      for (let j = 0; j < this.props.happyhourdeals.length; j++) {
        if (happyhour.happyhourdeals[i] === this.props.happyhourdeals[j]._id) {
          arrToMap.push(this.props.happyhourdeals[j])
        }
      }
    }

    let happyHourDeals = arrToMap.map((hhd, idx) => {
      return (
        <HappyHourDeal
          {...hhd.props}
          key={idx}
          description={hhd.description}
          startTime={hhd.startTime}
          endTime={hhd.endTime}
          dealId={hhd._id}
          sunday={hhd.sunday}
          monday={hhd.monday}
          tuesday={hhd.tuesday}
          wednesday={hhd.wednesday}
          thursday={hhd.thursday}
          friday={hhd.friday}
          saturday={hhd.saturday}
          deleteHappyHourDealHelper={this.props.deleteHappyHourDealHelper}
          createHappyHourDealHelper={this.props.createHappyHourDealHelper}
          updateHappyHourHelper={this.props.updateHappyHourHelper}
          updateHappyHourDealHelper={this.props.updateHappyHourDealHelper}
        />
      )
    })

    return (
      <div>
        {this.state.updateClicked === true ? (
          <div>
            <div>
              <AddHappyHourForm
                cancelUpdateHappyHour={this.cancelUpdateHappyHour}
                updateClicked={this.state.updateClicked}
                happyhourName={happyhour.name}
                happyhourLocation={happyhour.location}
                happyhourImage={happyhour.image}
                happyhour_id={happyhour._id}
                updateHappyHourHelper={this.props.updateHappyHourHelper}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="allHappyHoursDisplayCard">
              <div className="cardButtons">
                <button
                  happyhour_id={happyhour._id}
                  onClick={this.updateHappyHour}
                  className="updateBtn"
                  id="hhUpdateBtn"
                >
                  <img
                    happyhour_id={happyhour._id}
                    src="https://i.imgur.com/ADftVwr.png"
                    className="btnImg"
                    alt="update"
                    width="50"
                  />
                </button>
                <button
                  happyhour_id={happyhour._id}
                  onClick={this.removeHappyHour}
                  className="rightRoundBtn"
                  id="big"
                >
                  <img
                    happyhour_id={happyhour._id}
                    src="https://i.imgur.com/79wJ3Cr.png"
                    className="btnImg"
                    alt="delete1"
                    width="50"
                  />
                </button>{' '}
              </div>

              <div></div>
              <img src={`${happyhour.image}`} alt="hhimage" width="400" />
              <h3>{happyhour.name} </h3>
              <h4>{happyhour.location}</h4>
              {happyHourDeals.length > 0 ? (
                <div className="dealsList">{happyHourDeals}</div>
              ) : null}
              <button
                className="addDealBtn"
                happyhour_id={happyhour._id}
                onClick={this.addDealToHappyHourCard}
              >
                Add New Deal
              </button>
              {this.state.clicked === true ? (
                <div>
                  <AddHappyHourDealForm
                    cancelAddDeal={this.cancelAddDeal}
                    happyhour_id={happyhour._id}
                    createHappyHourDealHelper={
                      this.props.createHappyHourDealHelper
                    }
                  />
                </div>
              ) : null}
              <br></br>
            </div>
          </div>
        )}
      </div>
    )
  }
}
