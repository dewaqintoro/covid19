 
import React, { Component,useEffect, useState } from "react";

import { Layout, Menu ,Breadcrumb} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,EnvironmentOutlined,DashboardOutlined 
} from '@ant-design/icons';
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout;
import SideCompDew from './components/SideCompDew';
 import Kasus from './kasus'
import { connect } from 'react-redux';
import { useRouter } from 'next/router'
import Sidedua from "./coba/sidedua";


class AdminPage extends Component {


  
  render() {
    
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidedua/>
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
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};
export default connect(mapStateToProps) (AdminPage)