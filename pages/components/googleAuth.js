import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as AuthorizationAction from '../../actions'
import { useRouter } from 'next/router'

const DewGoogleAuth = ({ dispatch, isSignedIn, userId }) => {
  // console.log("ini props google", props);
  
  const [auth, setAuth] = useState(null);

  useEffect(() => {
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
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      dispatch(
        AuthorizationAction.signIn(
          window.gapi.auth2.getAuthInstance().currentUser.get().getId()
        )
      );
    } else {
      dispatch(AuthorizationAction.signOut());
    }
  };

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const router = useRouter()
  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null; 
    } else if (isSignedIn) {
      console.log("sudah login")
      router.push('/admin')
      // return (
      //   <div>
      //     <span>{userId}</span>
      //     <button onClick={onSignOutClick}>Signout</button>
      //   </div>
      // );
    } else {
      console.log("Belum login")
      return (
        <>
          <button className="btnGoogle" onClick={onSignInClick}>
            <img className="iconGoogle" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1597328370/icon/flat-color-icons_google_bbhrbd.png"/>
          </button>;
        </>
      )
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

const mapDispatchToProps = (dispatch) => {
  return{
    
  }
}

export default connect(mapStateToProps)(DewGoogleAuth);
