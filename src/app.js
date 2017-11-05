
require("./styles/app.scss")

///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom')

import RootComponent from './scripts/components/RootComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'
import StartComponent from './scripts/components/start/StartComponent'
import PositionComponent from './scripts/components/start/Position/PositionComponent'
import NewComponent from './scripts/components/new/NewComponent'
import ServeComponent from './scripts/components/serve/ServeComponent'
import ExperComponent from './scripts/components/exper/ExperComponent'
import MineComponent from './scripts/components/mine/MineComponent'
import PopComponent from './scripts/components/start/Content/PopComponent'

// 详情页
import IntalComponent from './scripts/components/intal/IntalComponent'
import PageComponent from './scripts/components/intal/PageComponent'
import TuComponent from './scripts/components/intal/TuComponent'
import PingComponent from './scripts/components/intal/PingComponent'
import ArguComponent from './scripts/components/intal/ArguComponent'



// {/* <IndexRedirect to="/main"/> */}
// 引入 react-redux
import {Provider} from 'react-redux'
import store from './scripts/redux/store'


ReactDOM.render(
    <Provider store={store}> 
        <Router history={hashHistory}>
            <Route path="/" component={RootComponent}>

                <IndexRedirect to='/start'/>
                <Route path="/start" component={StartComponent}></Route>
                <Route path="/new" component={NewComponent}></Route>
                <Route path="/serve" component={ServeComponent}></Route>
                <Route path="/exper" component={ExperComponent}></Route>
                <Route path="/mine" component={MineComponent}></Route>
                <Route path="/position" component={PositionComponent}></Route>
                <Route path="/intal" component={IntalComponent}></Route>
                <Route path="/start" component={PopComponent}></Route>
                <Route path="/page" component={PageComponent}>
                    <Route path="/tu" component={TuComponent}></Route>
                    <Route path="/ping" component={PingComponent}></Route>
                    <Route path="/argu" component={ArguComponent}></Route>
                </Route>
                <Route path="*" component={StartComponent}></Route>

            </Route>
        </Router>
    </Provider>
    
    ,document.getElementById("app"))