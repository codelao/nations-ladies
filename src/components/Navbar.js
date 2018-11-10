import  Top from './topNavbar';
import Bottom from './botNavbar';
import React, {  Component } from 'react';
import api from '../functions/api';
import history from '../components/history';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css' 
import 'react-bootstrap'
import 'mdbreact/dist/css/style.css'
export default class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {logged: localStorage.getItem('logged')}
        this.Bot = (<div></div>)
        this.Top = (<div></div>)
        this.topRef = React.createRef()
    }
    login(){
        api.login()
    }
    logout(){
        api.logout()
        window.location.reload(true);
    }
    addReach(){
        history.push("/addreach")
        window.location.reload(true);
    }
    addChap(){
        history.push("/addmeeting");
        window.location.reload(true);
    }
    onScroll(){
        console.log('here')
    }
    update(){
        var links = document.getElementsByTagName("a");
        for(var i=0, max=links.length; i<max; i++) {
            if(links[i].href === window.location.href){
                links[i].active = true;
            }
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', (e)=>{
            if(window.scrollY > 90){

            }
        });
        this.setState({logged: localStorage.getItem('logged')});
        this.update()
    }
    componentWillMount(){
        this.setState({logged: localStorage.getItem('logged')});
        console.log('state', this.state)
        this.Bot = Bottom(this.state.logged, this.addChap, this.addReach)
        this.Top = Top(this.state.logged, this.login, this.logout)
        this.update()
    }
    render(){
        return(
            <div>
                {this.Top}
                {this.Bot}
            </div>
        )
    }
}