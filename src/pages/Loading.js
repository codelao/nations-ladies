import React, {Component} from 'react'
import ReactLoading from 'react-loading';
import ReactDOM from 'react-dom';

export default class Loading extends Component{
    constructor(props){
        super(props)
        this.state = {loading:true}
        ReactDOM.render(<div></div>, document.getElementById('footer'))
    }
    render(){
        return (
            <div style={{"padding-left":"35vh"}}>
                <ReactLoading height="50vh" width="50vw" color="black" type="bars"/>
            </div>
        )
    }
} 