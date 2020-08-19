import React, { Component } from "react";

import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import SideCompDew from './components/SideCompDew';
import { Card,Row, Col } from 'antd';
const { Meta } = Card;

class Profile extends Component {
  render() {
    return ( 
      <div>
      {/* {renderAuthButton()} */}
    <Layout>  
      <SideCompDew aktif="3"/>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 0, minHeight: 760 }}>
            <div className="content_profile">
            <Row>
              <Col className="left_profile" span={7}>
                <div className="card_profile">
                  <img src="bg.png" className="card_profil-img"/>
                  <img src="pp.png" className="profile-img"/>
                  {/* <input className="btnDew" type="file" id="myFile" name="filename"/> */}
                  <h1>Dewa Qintoro</h1>
                  <p className="idProfile">1234567890987654321</p>
                  <div className="about">
                    <h1>About</h1>
                    <hr style={{height: 3,background:'blue'}}></hr>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veniam fuga accusantium, autem explicabo, ex vitae est .lorem10Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veniam fuga accusantium, autem explicabo, ex vitae est 
                    </p>
                  </div>
                  {/* <a href="#" className="btn">Contact</a> */}
                  {/* <ul className="social-media">
                    <li><a href=""><i className="fab fa-facebook-square"></i></a></li>
                    <li><a href=""><i className="fab fa-twitter-square"></i></a></li>
                    <li><a href=""><i className="fab fa-instagram"></i></a></li>
                    <li><a href=""><i className="fab fa-google-plus-square"></i></a></li>
                  </ul> */}
                </div>
              </Col>

              <Col className="right_profile" span={17}>
                <div className="detailsProfile">
                  <div className="topTable">
                    <div className="">
                      <h5>Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</h5>
                      <hr/>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            </div>
          </div> 
        </Content>
      </Layout>
    </Layout>
  </div>
    )
  }
}

export default Profile