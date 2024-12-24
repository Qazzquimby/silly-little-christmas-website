import React, { useEffect, useRef, useState } from 'react';

const ScratchCard = ({ imageUrl, width = 300, height = 200 }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const imageCanvas = document.createElement('canvas');
    const scratchCanvas = document.createElement('canvas');
    imageCanvas.width = width;
    imageCanvas.height = height;
    scratchCanvas.width = width;
    scratchCanvas.height = height;

    const imageCtx = imageCanvas.getContext('2d');
    const scratchCtx = scratchCanvas.getContext('2d');

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;
    
    img.onload = () => {
      imageCtx.drawImage(img, 0, 0, width, height);
      
      scratchCtx.fillStyle = '#DAA520';
      scratchCtx.fillRect(0, 0, width, height);

      ctx.drawImage(scratchCanvas, 0, 0);

      canvas.dataset.imageCanvas = imageCanvas.toDataURL();
    };

    img.onerror = (error) => {
      console.error('Error loading image:', error);
    };
  }, [imageUrl, width, height]);

  const getPosition = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;

    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const scratch = (event) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const currentPosition = getPosition(event);

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext('2d');

    tempCtx.drawImage(canvas, 0, 0);

    tempCtx.globalCompositeOperation = 'destination-out';
    tempCtx.strokeStyle = 'rgba(0,0,0,1)';
    tempCtx.lineWidth = 40;
    tempCtx.lineCap = 'round';
    tempCtx.beginPath();
    tempCtx.moveTo(lastPosition.x, lastPosition.y);
    tempCtx.lineTo(currentPosition.x, currentPosition.y);
    tempCtx.stroke();

    ctx.clearRect(0, 0, width, height);

    const img = new Image();
    img.src = canvas.dataset.imageCanvas;
    ctx.drawImage(img, 0, 0);

    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(tempCanvas, 0, 0);

    setLastPosition(currentPosition);
  };

  const startDrawing = (event) => {
    event.preventDefault();
    setIsDrawing(true);
    setLastPosition(getPosition(event));
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDrawing(false);
    };

    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ 
        touchAction: 'none',
        border: '1px solid #ccc'
      }}
      onMouseDown={startDrawing}
      onMouseMove={scratch}
      onTouchStart={startDrawing}
      onTouchMove={scratch}
      onTouchEnd={stopDrawing}
    />
  );
};

export default ScratchCard;