import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import * as FontAwesome from 'react-icons/lib/fa';
//import logo from './logo.svg';
import './App.css';

class Input extends Component{
    render(){
        return(
            <div className="Input">
                <input id={this.props.name} autoComplete="true" required type={this.props.type} placeholder={this.props.placeholder}/>
                <label className ={this.props.name}>

                </label>
            </div>
        );
    }
}
class Modal extends Component{
    render(){
        return(
            <div className="Modal">
                <form onSubmit={this.props.onSubmit} className="Modal-Form">
                    <Input id="name" type="text" placeholder="John Doe"/>
                    <Input id="email" type="email" placeholder="johndoe@here.com"/>
                    <Input id="password" type="password" placeholder="password"/>
                    <button>LOG IN<i className="fa fa-chevron-right fa-fw"> </i> </button>
                </form>
            </div>
        );
    }
}
class App extends Component {
    /** @namespace this.state.mounted */

    constructor(props){
        super(props);
        this.state={mounted:true};
    }
    static componentDidMount(){
       this.setState=({mounted:true});
        }
        handleSubmit(e){
        this.setState=({mounted:false});
        e.preventDefault();
        }
    render(){
        let child;
            //let {mounted}=this.props;
        if(this.state.mounted){
            child=(<Modal onSubmit={this.handleSubmit}/>);
        }
        return(<div className="App">
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {child}
                </ReactCSSTransitionGroup>
                </div>

        );



    }

}
  /*render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/
export default App;
