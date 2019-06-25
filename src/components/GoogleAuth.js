import React from 'react';

class GoogleAuth extends React.Component {

  componentDidMount() {
    const clientId = '324932038643-03bfg4gpmdl8aqpe7co0nbchm0l3uoh8.apps.googleusercontent.com'

    window.gapi.load('client:auth2', () => {
       window.gapi.client.init({
           clientId,
           scope: 'email'
       }).then(()=> {

          this.auth = window.gapi.auth2.getAuthInstance();
        
       })
    })
  }
    
   render() {
       return <div>Google Auth</div>
   }
}

export default GoogleAuth;