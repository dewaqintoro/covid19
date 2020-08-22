import React, {Component} from 'react';
import ImageCrop from './library/imageCrop';
import { Modal, Button } from 'antd';
import { UserOutlined, LockOutlined,EditOutlined } from '@ant-design/icons';
// import Persist from './persist';
import Cookies from 'universal-cookie';

class UploadDew extends Component {

 
  //   constructor(props, context) {
  //   super(props, context);
  //   this.state = {
  //     userProfilePic: this.state.userProfilePic,
  //     editor: null,
  //     scaleValue: 1,
  //   };
  // }

 

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    // const cookies = new Cookies();
    // const newPPPP = this.state.userProfilePic
    // console.log("hmmmmm",newPPPP)
    // cookies.set('access_token', "newPPPP", { path: '/' ,maxAge  :5000});
    // console.log("hmmmmm v2",newPPPP)
    // console.log(cookies.get('access_token'));
    // const access_token = cookies.get('access_token')


    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };





   setEditorRef = editor => this.setState({ editor });

    onCrop = () => {
    const { editor } = this.state;
    if (editor !== null) {
      const url = editor.getImageScaledToCanvas().toDataURL();
      this.setState({ userProfilePic: url});
    }
  };

  onScaleChange = (scaleChangeEvent) => {
    const scaleValue =  parseFloat(scaleChangeEvent.target.value);
    this.setState({ scaleValue });
  };

  onRotateChange = (rotateChangeEvent) => {
    const rotateValue =  parseFloat(rotateChangeEvent.target.value);
    this.setState({ rotateValue });
  };

  onBorderRadiusChange = (borderChangeEvent) => {
    const borderRadiusValue =  parseFloat(borderChangeEvent.target.value);
    this.setState({ borderRadiusValue });
  };

  DataURLtoFile = (dataurl, filename) => {
  let arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

 profilePicChange = (fileChangeEvent) => {
    const file = fileChangeEvent.target.files[0];
    const { type } = file;
    if (!(type.endsWith('jpeg') || type.endsWith('png') || type.endsWith('jpg') || type.endsWith('gif'))) {
    } else {
      this.setState({ openCropper: true, selectedImage: fileChangeEvent.target.files[0], fileUploadErrors: [] });
    }
  };
  render(){ 
    
 

  return (
    <div className="">
        {/* {console.log("lokasi gambar",this.state.userProfilePic)} */}

        <div>
          {/* <h1>Profile</h1> */}
          {/* <img src={this.state.userProfilePic} alt="Profile" /> */}
          {/* <img src={this.state.userProfilePic} className="profile-img"/> */}
        </div>
        <div className="card_profile">
          <img src="bg.png" className="card_profil-img"/>
          <img src={this.state.userProfilePic} className="profile-img"/>
          <Button style={{marginTop: -150,marginLeft: 60, position:"absolute", }} type="primary" shape="circle" icon={<EditOutlined />} onClick={this.showModal}/>
          <h1>Dewa Qintoro</h1> 
          <p className="idProfile">1234567890987654321</p>
          {/* <p>access_token: {access_token}</p> */}
          <Persist dewaaaa={this.state.userProfilePic}/>
          <div className="about">
            <h3 style={{fontWeight: "bold"}}>About</h3>
            <hr style={{height: 3,background:'blue'}}/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veniam fuga accusantium, autem explicabo, ex vitae est .lorem10Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veniam fuga accusantium, autem explicabo, ex vitae est 
            </p>
          </div>
        </div>

        


        <Modal
          title="Edit Photo"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          centered={1}
        >
          <input type="file" name="profilePicBtn" accept="image/png, image/jpeg" onChange={this.profilePicChange} />
          <ImageCrop
          imageSrc={this.state.selectedImage}
          setEditorRef={this.setEditorRef}
          onCrop={this.onCrop}
          scaleValue={this.state.scaleValue}
          rotateValue={this.state.rotateValue}
          borderRadiusValue={this.state.borderRadiusValue}
          onScaleChange={this.onScaleChange}
          onRotateChange={this.onRotateChange}
          onBorderRadiusChange={this.onBorderRadiusChange}


        />
        </Modal>

    </div>

  );
  }
}

export default UploadDew;
