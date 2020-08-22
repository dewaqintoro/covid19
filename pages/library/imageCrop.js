import React from 'react';
import PropTypes from 'prop-types';
import AvatarEditor from 'react-avatar-editor';

const ImageCrop = ({ imageSrc, onCrop, setEditorRef, scaleValue,rotateValue,borderRadiusValue, onScaleChange,onRotateChange,onBorderRadiusChange }) => (
  <div>
      <div className="editorOverlayInner">
        <div className="editorModalContent clearfix">
          <div className="cropCnt">
            <AvatarEditor 
            image={imageSrc} 
            border={50} 
            borderRadius={borderRadiusValue}
            scale={scaleValue} 
            rotate={rotateValue} 
            ref={setEditorRef}
            className="cropCanvas" 
            />
            <hr/>
            <label>
              Scale : 
              <input style={{ width: '100%' }} type="range" value={scaleValue} name="scale" min="0" max="10" onChange={onScaleChange} />
            </label>
            <br/>
            <label htmlFor="">
              Rotate : 
            <input style={{ width: '100%' }} type="range" value={rotateValue} name="rotate" min="0" max="360" onChange={onRotateChange} />
            </label>
            <br/>
            <label htmlFor="">
              Border Radius: 
            <input style={{ width: '100%' }} type="range" value={borderRadiusValue} name="borderRadius" min="0" max="100" onChange={onBorderRadiusChange} />
            </label>
            <br/>

            
            <button onClick={onCrop} className="editorOverlayCloseBtn crpBtn">
              Save
            </button>
          </div>
        </div>
      </div>
  </div>
);

ImageCrop.propTypes = {
  open: PropTypes.bool.isRequired,
  setEditorRef: PropTypes.func.isRequired,
  onCrop: PropTypes.func.isRequired,
  scaleValue: PropTypes.number.isRequired,
  onScaleChange: PropTypes.func.isRequired,
};

export default ImageCrop;
