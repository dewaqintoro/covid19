import React, { useEffect, useState } from "react";

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout;
import SideCompDew from './components/SideCompDew';
 import Kasus from './kasus'
import { connect } from 'react-redux';
import { useRouter } from 'next/router'
import Sidedua from "./coba/sidedua";

const AdminPage = ({ dispatch, isSignedIn, userId }) => {
  const router = useRouter()
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
      console.log("berhasil logout v2");
    }
  };

 

  const onSignOutClick = () => {
    router.push('/')
    auth.signOut();
    console.log("berhasil logout v1");
    
  };
 
  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null; 
    } else if (isSignedIn) {
      console.log("sudah login")
      // router.push('/admin')
    } else {
      console.log("Belum login")
      router.push('/')
      // return <button onClick={onSignInClick}>Sign In with Google</button>;
    }
  }; 
  
 
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidedua/>
      {/* <div className="logoutDew">
        <button className="btnLogoutDew" onClick={onSignOutClick}>
        <img className="imgBawah" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596626011/icon/mdi_power_settings_new_z0g0h1.png"/>
        </button>
      </div> */}
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

          <Kasus/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};
export default connect(mapStateToProps) (AdminPage)