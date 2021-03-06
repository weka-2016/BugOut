const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const TextField = require('material-ui/TextField').default
const request = require('superagent')
const PouchDB = require('pouchdb')
const db = require('../../../pouchDB')

class JoinGroup extends React.Component {

  handleSubmit () {
    const { dispatch } = this.props
    const groupName = this.refs.groupName.input.value
    const groupPlan = this.refs.groupPlan.input.value

    var newGroup = {
      groupName,
      groupPlan
    }

    db.createGroup(newGroup, (err, status) => {
      console.log('waterfall effect', status)
    })
  }

  render () {
    return (
      <div>
        <form>
          <div>
            <TextField
              hintText='Group Name'
              ref='groupName' />
            <br />
          </div>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(JoinGroup)
// <button onClick={this.handleSubmit.bind(this)}>Sign Up</button>
