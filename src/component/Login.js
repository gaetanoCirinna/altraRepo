import React, { Component } from 'react';
import Tot from './Tot'
import img from './logo.png';




  
  class LoginForm extends Component {
    
    // Using a class based component here because we're accessing DOM refs
   
    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      this.props.onSignIn(username, password);
    }
    
    render() {
      return (
        <form onSubmit={this.handleSignIn.bind(this)}>
          <div className="login">

            <h3>SIGN IN</h3>
            <input className="login__name" type="text" ref="username" placeholder="enter you username" />
            <input className="login__name" type="password" ref="password" placeholder="enter password" />
            <input className="login__name bottoneone" type="submit" value="Login" />
          </div>   
        </form>
      )
    }
  
  }
  
  
  class Login extends Component {
    
    constructor(props) {
      super(props)
      // the initial application state
      this.state = {
        user: null
      }
    }
    
    // App "actions" (functions that modify state)
    signIn(username, password) {
      // This is where you would call Firebase, an API etc...
      // calling setState will re-render the entire app (efficiently!)
      this.setState({
        user: {
          username,
          password,
        }
      })
    }
    
    signOut() {
      // clear out user from state
      this.setState({user: null})
    }
    
    render() {
      // Here we pass relevant state to our child components
      // as props. Note that functions are passed using `bind` to
      // make sure we keep our scope to App
      return (
        <div>
          <div className="header">
            <div className="logo">
              <img src={img}></img>
            </div>
              <h1>Waifu material!</h1>
          </div>
          { 
            (this.state.user) ? 
              <Tot 
               user={this.state.user}  
              />
            :
              <LoginForm 
               onSignIn={this.signIn.bind(this)} 
              />
          }
        </div>
      )
      
    }
    
  }
  
export default Login;

    
