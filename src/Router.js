// MARK: React
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// MARK: Layout
import MainLayout from './layout/MainLayout'

// MARK: Pages
import { Home, About, Login, Register } from './pages'

// Router Export
const Router = () => (
  <Switch>
    {/* MARK: MainLayout */}
    <Route path="/" exact component={Home} />
    <Route path="/sobre" exact component={About} />
    {/* MARK: Auth */}
    <Route path="/login" exact component={Login} />
    <Route path="/registro" exact component={Register} />
  </Switch>
)

export default Router
