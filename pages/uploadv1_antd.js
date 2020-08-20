
import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';



const UploadDew = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log("src newFileList",newFileList[0].url);
    console.log("src fileList",fileList);

  };

  const onPreview = async file => {
    let src = file.url;
    console.log("src v1b");
    if (!src) {
      console.log("src v1",src);
      
      src = await new Promise(resolve => {
        console.log("src v1c");
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  return (
    <ImgCrop rotate>
      <Upload
      className="dewww"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
  )
}

export default UploadDew
