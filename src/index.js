import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Number from './components/Number'
import rootReducer from './reducers';

import './globals.css'
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <div className="container">
      <Number />
    </div>
  </Provider>, document.getElementById('root')
)