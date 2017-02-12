const { combineReducers } = require('redux')
const authErr = require('./authErr')
const group = require('./group')
const groupStepIndex = require('./groupStepIndex')
const loggedIn = require('./loggedIn')
const messages = require('./messages')
const planComplete = require('./planComplete')
const planStepIndex = require('./planStepIndex')
const setLocations = require('./setLocations')
const showRegisterForm = require('./showRegisterForm')
const showLoginForm = require('./showLoginForm')
const showCreateGroup = require('./showCreateGroup')
const showCreatePlan = require('./showCreatePlan')
const showJoinGroup = require('./showJoinGroup')

module.exports = combineReducers({
  authErr,
  group,
  groupStepIndex,
  loggedIn,
  messages,

  // either 
  plan
    Complete,
    StepIndex,
    ShowCreate  // could nest show under each resource type?

  setLocations,
  showLoginForm,
  showRegisterForm,
  showCreateGroup,
  showJoinGroup,
  showCreatePlan

  // or collect all the shows into one area... 
  show
    LoginForm,
    RegisterForm,
    CreateGroup,
    JoinGroup,
    CreatePlan
})
