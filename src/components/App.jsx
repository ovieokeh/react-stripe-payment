import React, { useState } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Products from './Products'
import Checkout from './Checkout'
import { products } from '../products'

const history = createBrowserHistory()

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Products
              products={products}
              selectProduct={setSelectedProduct}
              history={history}
            />
          )}
        />
        <Route
          path="/checkout"
          render={() => (
            <Checkout selectedProduct={selectedProduct} history={history} />
          )}
        />
      </Switch>
    </Router>
  )
}

export default App
