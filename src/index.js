import ReactDOM from 'react-dom';
import React from 'react';
import footer from './components/Footer.js'
import './css/index.css';
import './css/calendar.css';
import './css/react-datetime.css';
import 'normalize.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import registerServiceWorker from './registerServiceWorker';
import {makeMainRoutes} from "./Routes"
import {isLoading} from "./functions/utils";
import history from './components/history'

console.log('history', history.location)
const path = history.location.pathname
require('typeface-josefin-sans')
require('normalize.css')
const routes = makeMainRoutes()
const newDiv = (<div></div>)

ReactDOM.render(routes, document.getElementById('root'))
if(!isLoading()){
    ReactDOM.render(footer, document.getElementById('footer'))
}
else{
    ReactDOM.render(newDiv, document.getElementById('footer'))
}

registerServiceWorker();