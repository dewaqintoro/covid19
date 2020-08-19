import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,EnvironmentOutlined,DashboardOutlined 
} from '@ant-design/icons';
import Link from 'next/link'
const { Header, Sider, Content } = Layout;

class Side extends Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
 

  render() {
    return (
       <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu mode="inline" defaultSelectedKeys="1">
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
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae consequatur rem, delectus ratione quo facere eius distinctio aut iure ea laudantium, accusamus omnis excepturi perspiciatis nihil cupiditate eum esse deleniti vel! Voluptate obcaecati ab, voluptates sequi nihil eveniet debitis voluptatem perspiciatis hic eos possimus id aliquam ea soluta consequatur maiores non sed repellat, molestias et at? Fugit vel similique tempore quibusdam culpa. Quod dolorem quisquam iusto tempora qui odit, aperiam eius nulla tenetur, in ea maxime quos inventore laboriosam impedit optio ab cum deleniti nostrum consequuntur fugiat repellat! Provident quas commodi neque consectetur laboriosam non, quibusdam architecto. Inventore sint tempora corrupti fuga nemo officia ut impedit, aperiam optio doloremque non voluptate, voluptatibus in deleniti ad fugit debitis quod consequatur dicta beatae quo? Cupiditate enim delectus odio quidem tenetur sit ab veritatis magnam. Perferendis sit, tenetur esse assumenda quia error vitae earum necessitatibus eius mollitia magni quidem voluptates architecto iusto dolores consequatur quasi sed blanditiis cupiditate. Provident deserunt placeat ad quaerat ut tempore magni voluptas id? Asperiores nisi natus dolores consequatur expedita voluptates? Deleniti quis minima accusamus praesentium exercitationem ea hic facilis vero autem molestias nemo molestiae voluptate reprehenderit amet cum mollitia architecto perspiciatis nihil ad, esse itaque, tempore soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae consequatur rem, delectus ratione quo facere eius distinctio aut iure ea laudantium, accusamus omnis excepturi perspiciatis nihil cupiditate eum esse deleniti vel! Voluptate obcaecati ab, voluptates sequi nihil eveniet debitis voluptatem perspiciatis hic eos possimus id aliquam ea soluta consequatur maiores non sed repellat, molestias et at? Fugit vel similique tempore quibusdam culpa. Quod dolorem quisquam iusto tempora qui odit, aperiam eius nulla tenetur, in ea maxime quos inventore laboriosam impedit optio ab cum deleniti nostrum consequuntur fugiat repellat! Provident quas commodi neque consectetur laboriosam non, quibusdam architecto. Inventore sint tempora corrupti fuga nemo officia ut impedit, aperiam optio doloremque non voluptate, voluptatibus in deleniti ad fugit debitis quod consequatur dicta beatae quo? Cupiditate enim delectus odio quidem tenetur sit ab veritatis magnam. Perferendis sit, tenetur esse assumenda quia error vitae earum necessitatibus eius mollitia magni quidem voluptates architecto iusto dolores consequatur quasi sed blanditiis cupiditate. Provident deserunt placeat ad quaerat ut tempore magni voluptas id? Asperiores nisi natus dolores consequatur expedita voluptates? Deleniti quis minima accusamus praesentium exercitationem ea hic facilis vero autem molestias nemo molestiae voluptate reprehenderit amet cum mollitia architecto perspiciatis nihil ad, esse itaque, tempore soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae consequatur rem, delectus ratione quo facere eius distinctio aut iure ea laudantium, accusamus omnis excepturi perspiciatis nihil cupiditate eum esse deleniti vel! Voluptate obcaecati ab, voluptates sequi nihil eveniet debitis voluptatem perspiciatis hic eos possimus id aliquam ea soluta consequatur maiores non sed repellat, molestias et at? Fugit vel similique tempore quibusdam culpa. Quod dolorem quisquam iusto tempora qui odit, aperiam eius nulla tenetur, in ea maxime quos inventore laboriosam impedit optio ab cum deleniti nostrum consequuntur fugiat repellat! Provident quas commodi neque consectetur laboriosam non, quibusdam architecto. Inventore sint tempora corrupti fuga nemo officia ut impedit, aperiam optio doloremque non voluptate, voluptatibus in deleniti ad fugit debitis quod consequatur dicta beatae quo? Cupiditate enim delectus odio quidem tenetur sit ab veritatis magnam. Perferendis sit, tenetur esse assumenda quia error vitae earum necessitatibus eius mollitia magni quidem voluptates architecto iusto dolores consequatur quasi sed blanditiis cupiditate. Provident deserunt placeat ad quaerat ut tempore magni voluptas id? Asperiores nisi natus dolores consequatur expedita voluptates? Deleniti quis minima accusamus praesentium exercitationem ea hic facilis vero autem molestias nemo molestiae voluptate reprehenderit amet cum mollitia architecto perspiciatis nihil ad, esse itaque, tempore soluta.</h1>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Side