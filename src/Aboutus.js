import React, { useEffect } from 'react'
import './Aboutus.css'
import img1 from './Lucy/race.jpg'
import img2 from './Lucy/race2.jpg'
import img3 from './Lucy/race3.jpg'


const Aboutus = () => {
  const images=[img1,img2,img3];
  return (
    <div>
        <div className='About'>
            <div className='secabout'>
                <div className='trophy'>
                <i class="fa-solid fa-trophy"></i>
                </div>
                <h1>ABOUT US</h1>
                <p><a>Learn</a> more about our <a>race car</a> </p>
            </div>
            </div>
            <div className='thirdabout'>
              <div className='ourabout'>
                <h1>Our About</h1>
                <p>There are many <a>variations of passages</a> of Lorem <a>Ipsum</a> available, but the majority have suffered alteration in some form, by <a>injected humour</a>, or randomised words which don’t look even slightly <a>believable</a>. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden <a>in the middle of text</a>. All the Lorem Ipsum generators on the <a>Internet tend</a> to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a <a>dictionary of </a>over 200 Latin words, <a>combined</a> with a handful of model sentence structures, to generate Lorem <a>Ipsum</a> which looks reasonable if youu the door my life</p>
              </div>
            </div>
           
   
    </div>
  )
}

export default Aboutus;
