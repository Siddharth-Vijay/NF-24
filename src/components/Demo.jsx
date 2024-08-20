import { useState } from 'react';
import IDCardPreview from './IDCardPreview';

const Demo = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {preview && (
        <div className='flex'>
          <h3>Uploaded Photo:</h3>
          <img src={preview} alt="Preview" style={{ width: '350px', height: '500px' }} />
          <IDCardPreview preview={preview} />
        </div>
      )}
    </div>
  );
}

export default Demo;