const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
import {List, ListItem} from 'material-ui/List'
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors'

const db = require('../../../pouchDB')

function updateMessages(group, dispatch){
  db.getMessages(group, (err, responses) => {
    if(err) throw err
    dispatch({type: 'UPDATE_MESSAGES', payload: getMessages(responses)})
  })
}

function getMessages (responses) {
  return responses.map(response => {
    const {text, userName} = response.doc
    return {text, userName}
  })
}

class Messages extends React.Component {

  componentDidMount () {
    const { dispatch, group } = this.props
    updateMessages(group, dispatch)

    db.getMessages(group, (err, responses) => {
      if (err) throw (err)
      dispatch({type: 'UPDATE_MESSAGES', payload: getMessages(responses)})
    })
  }

  render () {
    const { dispatch, group, messages } = this.props

    setInterval(function (){
      db.syncGroup(group, (err, status) => {
        if(err) throw err
        updateMessages(group, dispatch)
      })
    }, 5000)


    return (
      <div>
        {messages.map(renderMessage)}
      </div>
    )
  }
}

function renderMessage({userName, text})
  return (
    <ListItem
      primaryText={
        <p>
          <span style={{color: darkBlack}} key={userName} >{userName}</span> -- {text}
        </p>
    }
    />
  )
}


module.exports = connect((state) => state)(Messages)
