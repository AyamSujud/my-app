import React from 'react';

function ImageContainer() {
  return (
    <div className="relative w-full">
      <img src="pronen.jpg" alt="Gambar" className="w-full h-1/2 object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-200 text-5xl font-bold text-center">
        Abdul Rasyid Nurhidayah
      </div>
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-mono italic text-center">
        Front-end developer
      </div>
    </div>
  );
}

export default ImageContainer;
