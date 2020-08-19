import React from 'react'
import { Layout, Menu } from 'antd';
import { EnvironmentOutlined,DashboardOutlined } from '@ant-design/icons';
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout;
import { connect } from 'react-redux';
import { useRouter } from 'next/router'

const SideCompDew = (props) => {
  console.log("props userid side =>", props.userId)

  const router = useRouter()
  const  onSignOutClick = () => {
    auth.signOut();
    // await router.push('/')
    console.log("berhasil logout v1");
    
  };

  return (
    <>
        <Sider
          breakpoint="lg" 
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
          }}
        >

          
          {/* <div className="logo" /> */}
          <div className="center profil">
            <div className="imgProfil">
                <img id="imgProfil" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596626011/icon/bx_bxs-user-circle_kfbclt.png"/>
            </div>
            <p id="username" style={{textalign: "center"}}>Dewa Qintoro</p>
            <p id="id" style={{textalign: "center"}}>{props.userId}</p>
          </div>
          <Menu mode="inline" defaultSelectedKeys={props.aktif}>
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

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps) (SideCompDew)


