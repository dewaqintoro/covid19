import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as AuthorizationAction from "./framework/redux/module/Authorization";
import { Redirect,BrowserRouter as Router } from 'react-router-dom'

const GoogleAuth = ({ dispatch, isSignedIn, userId }) => {
  const [auth, setAuth] = useState(null);

  // if(isSignedIn){ 
  //   console.log("berhasil sign")
  //   return <Redirect to='/target' />
  // }
 
//   loadGapiAndAfterwardsInitAuth() {
//     const script = document.createElement("script");
//     script.src = "https://apis.google.com/js/platform.js";
//     script.async = true;
//     script.defer = true;
//     script.onload=this.initAuth;
//     const meta = document.createElement("meta");
//     meta.name="google-signin-client_id";
//     meta.content="%REACT_APP_GOOGLE_ID_OF_WEB_CLIENT%";
//     document.head.appendChild(meta);
//     document.head.appendChild(script);
// }

const loadGapiAndAfterwardsInitAuth = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    script.defer = true;
    script.onload=this.initAuth;
    const meta = document.createElement("meta");
    meta.name="google-signin-client_id";
    meta.content="%REACT_APP_GOOGLE_ID_OF_WEB_CLIENT%";
    document.head.appendChild(meta);
    document.head.appendChild(script);
    console.log("wadudududu");
    
};

// loadGapiAndAfterwardsInitAuth()

  
  const initAuth = () => {
    
    const params = {
      clientId:
        "665583303856-dee0npijq291ee7iq30og902mkg1bc7a.apps.googleusercontent.com",
      scope: "email",
    };

    window.gapi.load("client:auth2", () => {
      window.gapi.client.init(params).then(() => {
        setAuth(window.gapi.auth2.getAuthInstance());
        onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
      });
    });
  };

  useEffect(() => {
    initAuth()
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.dispatch(
        signIn(
          window.gapi.auth2.getAuthInstance().currentUser.get().getId()
        )
      );
    } else {
      this.props.dispatch(signOut());
    }
  };

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        // <Redirect to="/somewhere/else" />
        <div>
          <span>{userId}</span>
          <button onClick={onSignOutClick}>Signout</button>
        </div>
      );
    } else {
      return <button onClick={onSignInClick}>Sign In with Google</button>;
    }
  };
 
  // return <div>{renderAuthButton()}</div>;

  return(
    <Router>
       {isSignedIn ? <Redirect to="/dashboard" /> : <div>{renderAuthButton()}</div>}
    </Router>
  )
};

const mapStateToProps = (state) => {
  console.log("ini state login google",state);
  
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps)(GoogleAuth);
