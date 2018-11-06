import ReactDOM from 'react-dom';
import footer from './components/Footer.js'
import './css/index.css';
import './css/calendar.css';
import './css/react-datetime.css';
import 'normalize.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import registerServiceWorker from './registerServiceWorker';
import {makeMainRoutes} from "./Routes"
import history from './components/history'

console.log('history', history.location)
const path = history.location.pathname
console.log(path)
require('normalize.css')
const routes = makeMainRoutes()


ReactDOM.render(routes, document.getElementById('root'))
ReactDOM.render(footer, document.getElementById('footer'))





registerServiceWorker();
