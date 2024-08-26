import React, { useState } from 'react'
import './Gallery.css'
import c1 from './Lucy/race7.jpg'
import c2 from './Lucy/race6.jpg'
import c3 from './Lucy/race5.jpg'
import c4 from './Lucy/race4.jpg'
import c5 from './Lucy/race2.jpg'
import c6 from './Lucy/race3.jpg'

const Gallery = () => {
    const carrs=[c1,c2,c3,c4,c5,c6]



    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  
    const handleCloseModal = () => {
      setSelectedImage(null);
    };
    return (
    <div>
      <div className='Gallery'>
            <div className='secgallery'>
                <div className='trophy'>
                <i class="fa-solid fa-trophy"></i>
                </div>
                <h1>GALLERY</h1>
                <p><a>See</a> some <a>pictures</a> of our racers in their sports <a>cars</a> and see much more</p>
            </div>
           
           
      </div>
        <div className='cars'>
        <div className='car'>
        {carrs.map((carr) => (
          <img src={carr} onClick={() => handleImageClick(carr)} />
        ))}
      </div>

      {selectedImage && (
        <div className='modal' onClick={handleCloseModal}>
          <div className='modal-content'>
            <img src={selectedImage}  className='enlarged-image' />
          </div>
        </div>
      )}

            </div>
    </div>
  )
}

export default Gallery
