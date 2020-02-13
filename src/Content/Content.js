import React from 'react'
import { Route } from 'react-router-dom'
import Events from '../Data/Events'

import Browse from './Pages/Browse'
import Home from './Pages/Home'
import Confirmation from './Pages/Confirmation'
import Details from './Pages/Details'
import Signup from './Pages/Signup'

const Content = props => {
    return (
        <div>
            <Route exact path='/' render={
                () => <Home events={Events.data} nearEvents={Events.near_you} categories={Events.categories}/>
            }/>
            <Route path='/browse' render={
                () => <Browse events={Events.data}/>
            }/>
            <Route path='/confirmation' render={
                () => <Confirmation/>
            }/>
            <Route path='/details' render={
                () => <Details events={Events.data}/>
            }/>
            <Route path='/signup' render={
                () => <Signup/>
            }/>
        </div>
    )
}

export default Content