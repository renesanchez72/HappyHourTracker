import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import React, { Component } from 'react'
import Nav from './components/Nav'
import AllHappyHours from './pages/AllHappyHours'
import axios from 'axios'
import { BASE_URL } from './globals'
import AddHappyHour from './pages/AddHappyHour'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      happyhours: [],
      happyhourdeals: [],
      newhappyhour: '',
      newhappyhourdeal: ''
    }
  }

  deleteAllHappyHours = async () => {
    for (let i = 0; i < this.state.happyhours.length; i++) {
      this.deleteHappyHourHelper(this.state.happyhours[i]._id)
    }
    this.updateState()
  }

  deleteHappyHourHelper = async (id) => {
    for (let i = 0; i < this.state.happyhourdeals.length; i++) {
      if (this.state.happyhourdeals[i].happyHour_Id === id) {
        this.deleteHappyHourDealHelper(this.state.happyhourdeals[i]._id)
      }
    }
    const res = await axios.delete(`${BASE_URL}/happyhours/${id}`)
    this.updateState()
  }

  deleteHappyHourDealHelper = async (id) => {
    const res = await axios.delete(`${BASE_URL}/deals/${id}`)
    this.updateState()
  }

  createHappyHour2 = async (formData) => {
    const res = await axios.post(`${BASE_URL}/happyhours/all`, formData)
    this.updateState()
  }

  createHappyHour = async () => {
    const res = await axios.post(`${BASE_URL}/happyhours/all`)
    this.updateState()
  }

  createHappyHourDealHelper = async (id, formData) => {
    const res = await axios.post(`${BASE_URL}/happyhours/add/${id}`, formData)
    this.updateState()
  }

  updateHappyHourHelper = async (id, formData) => {
    const res = await axios.post(
      `${BASE_URL}/update/happyhours/${id}`,
      formData
    )
    this.updateState()
  }

  updateHappyHourDealHelper = async (id, formData) => {
    const res = await axios.post(`${BASE_URL}/update/deals/${id}`, formData)
    this.updateState()
  }

  updateState = async () => {
    const res = await axios.get(`${BASE_URL}/happyhours/all`)
    this.setState({ happyhours: res.data.happyhours })
    const res2 = await axios.get(`${BASE_URL}/deals/all`)
    this.setState({ happyhourdeals: res2.data.happyhourdeals })
  }

  async componentDidMount() {
    await this.updateState()
  }

  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/allhappyhours"
              component={(props) => (
                <AllHappyHours
                  {...props}
                  happyhours={this.state.happyhours}
                  happyhourdeals={this.state.happyhourdeals}
                  deleteHappyHourHelper={this.deleteHappyHourHelper}
                  deleteHappyHourDealHelper={this.deleteHappyHourDealHelper}
                  createHappyHourDealHelper={this.createHappyHourDealHelper}
                  updateHappyHourDealHelper={this.updateHappyHourDealHelper}
                  updateHappyHourHelper={this.updateHappyHourHelper}
                />
              )}
            />
            <Route
              path="/addhappyhour"
              component={(props) => (
                <AddHappyHour
                  {...props}
                  createHappyHour={this.createHappyHour}
                  createHappyHour2={this.createHappyHour2}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
