import React from 'react'
import { Route, BrowserRouter as Routers, Switch } from 'react-router-dom'

import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'

const Routes = () => {
    
    return  (
        <Routers>
            <Switch>
                <Route component={ Login } path="/login" />
                <Route component={ ResetPassword } path="/forgot-password" />

                {/* <Auth component={ Profile } path="/profile" exact /> */}
            </Switch>
        </Routers>
    )
}
export default Routes
