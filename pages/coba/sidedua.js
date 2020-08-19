import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,EnvironmentOutlined,DashboardOutlined
} from '@ant-design/icons';
import { connect } from 'react-redux';
import { useRouter } from 'next/router'
import Link from 'next/link'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class Sidedua extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  


  render() {
    // console.log("props side dua",this.props)
    // const router = useRouter()

    return (
      <>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu mode="inline" defaultSelectedKeys={this.props.aktif}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link href="/admin">
                Dashboard 
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<EnvironmentOutlined />}>
              <Link href="/persebaran">
                Persebaran
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<EnvironmentOutlined />}>
              <Link href="/profile">
                Profile
              </Link>
            </Menu.Item>

            <div className="bawahContainer">
            {/* <Link href="/setting">
              <div className="bawah" id="setting">
                  <img className="imgBawah" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596626011/icon/mdi_settings_hvxc7l.png"/>
              </div>
            </Link> */}

            {/* <Link href="/">
              <div className="bawah" id="logout">
                  <img className="imgBawah" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596626011/icon/mdi_power_settings_new_z0g0h1.png"/>
              </div>
            </Link> */}
            </div>
          </Menu>
        </Sider>
        </>
    )
  }
}

export default connect() (Sidedua)