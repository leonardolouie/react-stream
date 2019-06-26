import React from 'react';

class GoogleAuth extends React.Component {
  
   constructor()
   {
      super();
      this.state =  { 
         isSignedIn: false 
      };


   
   }
   onAuthChange = () => {
      this.setState({ isSignedIn: this.auth.isSignedIn.get() })
   }
   
  componentDidMount() {
    const clientId = '324932038643-03bfg4gpmdl8aqpe7co0nbchm0l3uoh8.apps.googleusercontent.com'

    window.gapi.load('client:auth2', () => {
       window.gapi.client.init({
           clientId,
           scope: 'email'
       }).then(()=> {

          this.auth = window.gapi.auth2.getAuthInstance();
          this.auth.isSignedIn.listen(this.onAuthChange)
      
        
       })
    })
  }

  renderAuthButton() {
   if (this.state.isSignedIn === null) {
      return null;
  } else if (this.state.isSignedIn) {
      return (
         <button className='ui red google button' 
        onClick={ () => this.auth.signOut()}>
      </button> )
      
  } else {
      return (
          <button className='ui red google button'>
              <i className='google icon' /> Sign In with Google
          </button>
      );
   }
}
    
  render() {
       return <div>{this.renderAuthButton()}</div>
   }

}

export default GoogleAuth;