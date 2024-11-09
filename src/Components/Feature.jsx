import {feature} from '../Images'
import {features} from '../Data/dummy';
import { TiTick } from 'react-icons/ti';
import '../Styles/feature.scss'
import Control from './Control';


const Feature = () => {
  return (
    <div className="app__feature">
        <div className="feature__container">
            <div className="left__feature">
                <img src={feature} alt="" draggable={false} />
            </div>
            <div className="right__feature">
              <div className="right__text">
                <h1>Feature to help <br /> your team succeed</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione facilis maxime id et ea aliquid laborum distinctio non accusamus ipsam nesciunt doloremque ad alias tempora, vero molestias ipsum ab deleniti.</p>
              </div>
              <div className="feature__content">
                {features.map((feature, index) =>(
                  <div className="feature" key={index}>
                    <TiTick/> 
                    <div className="feature__text">
                      <p>{feature}</p>
                      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, tempore.</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
        <Control/>
    </div>
  )
}

export default Feature