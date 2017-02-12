const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')
const request = require('superagent')
const PouchDB = require('pouchdb')
const db = require('../../../pouchDB')

class Register extends React.Component {

  handleSubmit () {
    const { dispatch, router } = this.props

    var newUser = {
      email: this.refes.email.value,
      userName, ///....
      password
    }
    db.register(newUser, (err, status) => {
      if (err) throw error
      if (status.register) {
        dispatch({type: 'LOG_IN', payload: status.user})
        router.push(`/users/${status.user._id}`)
      } else {
        dispatch({type: 'AUTH_ERR', payload: status.error})
      }
    })
    // var opts = {live: true};
    // db.sync(remoteCouch, opts, syncError)
    //
    // function syncError() {
    //   syncDom.setAttribute('data-sync-state', 'error');
    // }
  }

  render () {
    return (
      <form>
        <div>
          User Name:
          <input className='homePageButton' type='text' ref='userName' placeholder='User Name' /><br />
          Email:
          <input className='homePageButton' type='text' ref='email' placeholder='Email' /><br />
          Password:
          <input className='homePageButton' type='password' ref='password' placeholder='Password' /><br />
          Confirm Password:
          <input className='homePageButton' type='password' ref='confirmPassword' placeholder='Password' />
        </div>
        <button onClick={this.handleSubmit.bind(this)}>Sign Up</button>
      </form>
    )
  }
}

module.exports = connect((state) => state)(Register)
