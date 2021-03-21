import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { incrementNumber } from './actions';
import Number from './components/Number'

import rootReducer from './reducers';

const store = createStore(rootReducer);


console.log(store.getState())
export default function Home() {
  return (
    <Provider store={store}>
      <div className="container">
        <Number />
      </div>
    </Provider>
  )
}
