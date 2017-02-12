const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware, compose } = require('redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const injectTapEventPlugin = require('react-tap-event-plugin')

const reducer = require('./reducers')
const initialState = require('../state')

// Top Level Components
const App = require('./containers/app')
const Home = require('./containers/home')
const Group = require('./containers/group')
const Profile = require('./components/yourProfile')
const Users = require('./components/users')
const Plan = require('./components/plan')
const Login = require('./components/login')
const Register = require('./components/register')
const CreateGroup = require('./components/yourProfile/createGroup')

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
injectTapEventPlugin()

store.subscribe(() => {
  console.log('Index.js state log', store.getState())
})

const Root = ({store}) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />

          <Route path='/users' component={Users} />
          <Route path='/users/:id' component={Profile} />
          <Route path='/users/:id/edit' component={Profile} />

          <Route path='/groups' >
            <IndexRoute component={Group} />
            <Route path='new' component={CreateGroup} />
            <Route path=':id' component={Group} />
            <Route path=':id/setup' component={Group} />
            <Route path=':id/edit' component={Group} />
          </Route >

          <Route path='/plans/:id' component={Plan} />
          <Route path='/plans/:id/new' component={Plan} />
          <Route path='/plans/:id/edit' component={Plan} />

        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
)

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  const root = document.querySelector('#app')

  ReactDOM.render(
    <Root store={store} />,
    root
  )
})
