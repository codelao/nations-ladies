
import React from 'react';
import { Route, Router, Switch} from 'react-router-dom';
import Home from './pages/Home';
import history from './components/history';
import NavBar from './components/Navbar'
import Calender  from './components/Calender';
import EventAdder from './pages/EventAdder';
import About from './pages/About'
import Meeting from './components/Meeting'
import MyMeetings from './components/MyMeetings';
import Profiles from './components/Profiles';
import Loading from './pages/Loading'
import MenteeAdder from './pages/MenteeAdder'
import api from './functions/api'
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css' 
import 'react-bootstrap'
import 'mdbreact/dist/css/style.css'
import MentorHome from './pages/MentorHome';
import SafeGuarding from './pages/SafeGuarding'
import Services from './pages/Services'
import Events from './pages/Events'
import Paydues from './pages/Paydues'
import ChapterExex from './pages/ChapterExec';
import Partners from './pages/Partners';
import ContactUs from './pages/ContactUs';
import DocumentsPage from './pages/DocumentsPage';

const UnAuthenticatedRoutes = (
<Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/loading" component={Loading}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Services}/>
        <Route exact path="/events" component={Events}/>
        <Route exact path="/partners" component={Partners}/>
        <Route exact path="/contactus" component={ContactUs}/>
        </Switch>
)

const AuthenticatedRoutes = (
  <Switch>
        <Route exact path="/calendar" component={Calender}/>
        <Route exact path="/addreach" component={MenteeAdder}/>
        <Route exact path="/meeting/:meeting_id" component={Meeting} />
        <Route exact path="/addmeeting" component={EventAdder} />
        <Route exact path="/meetings" component={MyMeetings}/>
        <Route exact path="/profiles" component= {Profiles}/>
        <Route exact path="/mentorhome" component={MentorHome}/>
        <Route exact path="/safeguarding" component={SafeGuarding}/>
        <Route exact path="/chapterexec" component={ChapterExex}/>
        <Route exact path="/paydues" component={Paydues}/>
        <Route exact path="/documents" component={DocumentsPage}/>
        </Switch> 
)


export const makeMainRoutes = () => {
  console.log('bool', localStorage.getItem('logged'))
  console.log('route', api.logged)
  var logged = localStorage.getItem('logged') === "true"
  const loading = history.location.pathname === "/loading"
  return (
    <Router history={history}>
      <div>
        {!loading && <NavBar/>}
          {UnAuthenticatedRoutes}
         {logged && AuthenticatedRoutes}  
      </div>
    </Router>
  );
}

