import { renderToString } from 'react-dom/server'

import { StaticRouter, Route } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
// import { promises } from 'fs';


export const render = (store,routes,req) => {
  // const reducer = (state = {name: 'dell'} , action) => {
  //   return state;
  // }
  // const store = createStore(reducer,applyMiddleware(thunk))
  

  
  
  

    const content = renderToString(
      // context用作数据的传递,在服务器端,使用StaticRouter不会知道自己处于哪个路径下,需要传递一个路径让它知道,服务器下的broswerRouter能感知到浏览器的路径
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          {/* {Routes} */}
          <div>
          {routes.map(route=>(<Route {...route}/>))}
          </div>
        </StaticRouter>
      </Provider>
    )
    return `
    <html>
      <head>
        <title>hello</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state:${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `
}
