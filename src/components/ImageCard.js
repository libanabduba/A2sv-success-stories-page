import React from 'react';

const ImageCard = ({ children, imageSrc, ...props }) => {

    return (
    <div {...props} className='relative max-w-sm overflow-hidden rounded-2xl shadow-lg group'>
        <img src={imageSrc}  alt="" />
        <div className='absolute inset-0 flex items-end '>
            <div className= 'p-4 text-white'>
                {children}
            </div>
        </div>
    </div>
    // bg-gradient-to-t from-black/60 to-transparent
        
  );
};

export default ImageCard;
