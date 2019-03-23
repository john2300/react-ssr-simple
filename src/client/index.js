import React from 'react'
import ReacDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from './../Routes'
import {getClientStore} from '../store'

const store = getClientStore();
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {routes.map(route => (<Route {...route}/>))}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReacDom.hydrate(<App />, document.getElementById('root'))
