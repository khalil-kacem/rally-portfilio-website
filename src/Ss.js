import Lucy from './Lucy/lucy-modified.jpg'
import '@fortawesome/fontawesome-free/css/all.css';
import './Ss.css'
const Ss= () => {
  return (
    <div className='Cont'>
        <div className='Desclucy'>
            <h1>Serpil Lucy Pak</h1>
            <p>It is a long established fact that a reader will be distracted by. The point of using Lorem the pilot one car for. It is a long established fact that a reader will be distracted by the readable content of a page when at its layout.</p>
            <div className='personal'>
            <div className='pilot'>       
                 <i class="fa-solid fa-user"></i>
                 <h1>Pilot</h1>
                 <h6>Jhonatan Peeter</h6>
            </div>
            <div className='envelope'>       
                <i class="fa-solid fa-envelope"></i>
                <h1>Email </h1>
                <h6></h6>
            </div>
        </div>
        </div>
        <div className='Imglucy'>
            <img src={Lucy}/>
        </div>
       

      
    </div>
  )
}

export default Ss;
