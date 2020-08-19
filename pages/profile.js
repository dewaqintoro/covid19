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
          <div className="site-layout-background" style={{ padding: 24, minHeight: 760 }}>
            <div className="content_profile">
            <Row>
              <Col className="left_profile" span={8}>
              <div className="card_profile">
                <img src="bg.jpg" className="card_profil-img"/>
                <img src="pp.jpg" className="profile-img"/>
                {/* <input className="btnDew" type="file" id="myFile" name="filename"/> */}
                <h1>Dewa qintoro</h1>
                <p className="job-title">Web Developer</p>
                <p className="about">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veniam fuga accusantium, autem explicabo, ex vitae est .
                </p>
                <a href="#" className="btn">Contact</a>
                {/* <ul className="social-media">
                  <li><a href=""><i className="fab fa-facebook-square"></i></a></li>
                  <li><a href=""><i className="fab fa-twitter-square"></i></a></li>
                  <li><a href=""><i className="fab fa-instagram"></i></a></li>
                  <li><a href=""><i className="fab fa-google-plus-square"></i></a></li>
                </ul> */}
              </div>
              </Col>
              <Col span={16}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae odio quis similique cupiditate nulla. Repellendus, quasi non ipsam, veniam tempora hic incidunt cumque assumenda, soluta praesentium odit! Doloremque, fugit? Unde iusto reprehenderit tenetur? Mollitia laudantium vero aut fugit, fuga tenetur cupiditate in enim blanditiis nisi repellendus similique! Veniam ipsum odio, saepe maxime est, aspernatur delectus quis vitae doloremque aut quae iusto labore expedita facere illo molestias similique ad culpa cum repellat eaque quibusdam laudantium ullam. Quasi blanditiis ex deserunt beatae laudantium dicta cum harum rerum quaerat eius architecto obcaecati assumenda, quam dolor molestiae dignissimos quod doloremque cumque laboriosam molestias. Molestiae?</Col>
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