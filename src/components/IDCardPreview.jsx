import React, { useRef, useEffect } from 'react';

const IDCardPreview = ({ preview }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const cardDesign = new Image();
    cardDesign.src = '/IDCard.png';
    cardDesign.onload = () => {
      ctx.drawImage(cardDesign, 0, 0, canvas.width, canvas.height);

      if(preview) {
        const userImage = new Image();
        userImage.src = preview;
        userImage.onload = () => {
          ctx.drawImage(userImage, 105, 190, 280, 350);
        };
      }
    };
  }, [preview]);

  return <canvas ref={canvasRef} width={500} height={700} />;
}

export default IDCardPreview;