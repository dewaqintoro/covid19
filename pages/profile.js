import React, { Component } from "react";

import { Layout, Menu ,Form, Input, Button, Checkbox } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Card,Row, Col } from 'antd';
const { Meta } = Card;
import Sidedua from "./coba/sidedua";
import { UserOutlined, LockOutlined } from '@ant-design/icons';


class Profile extends Component {
  render() {
    console.log("props side dua2",this.props.aktif)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidedua aktif="3"/>
      {/* <div className="logoutDew">
        <button className="btnLogoutDew" onClick={onSignOutClick}>
        <img className="imgBawah" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596626011/icon/mdi_power_settings_new_z0g0h1.png"/>
        </button>
      </div> */}
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360,background: "transparent" }}>

            {/* konten */}
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
                  <div className="head_profile">
                      <h5>Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</h5>
                      <hr/>
                  </div>

                  <div className="form_profile">
                  <form>

                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputEmail4">First Name</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Dewa"/>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">Last Name</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Qintoro"/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Username</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="@dewaqintoro"/>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">Email</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="dewaqintoro@gmail.com"/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Password</label>
                        <input type="password" class="form-control" id="inputEmail4" placeholder="********"/>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">No Handphone</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="082123456789"/>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="exampleFormControlTextarea1">Address</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Jln Bareng, gang Sebelah, No 404</textarea>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Country</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Indonesia"/>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">City</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Yogyakarta"/>
                      </div>
                    </div>
              
                  </form>

                  </div>
                </div>
              </Col>
            </Row>
            </div>


          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    )
  }
}


export default Profile