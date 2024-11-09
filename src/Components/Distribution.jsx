import '../Styles/distribution.scss'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import {BsApple} from "react-icons/bs"
import {twophones} from '../Images'

const Distribution = () => {
  return (
    <div className='app__distribution'>
        <div className="distribution__container">
            <div className="left__distribution">
                <div className="distribution__text">
                    <h1>D'task also works on your phone.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fugiat nihil quasi hic nostrum porro consequuntur facere dicta molestiae voluptatum dolorum id nisi ab quibusdam non aperiam enim, sunt eos rerum accusantium harum ducimus ullam perspiciatis totam? Accusamus magni molestias modi. Quae dolores adipisci ullam aut consequuntur assumenda harum aliquam?</p>
                </div>
                <div className="distribution__buttons">
                    <button> <BsApple/> Download App</button>
                    <button><IoLogoGooglePlaystore/> Download App</button>
                </div>
            </div>

            <div className="right__distribution">
                <img src={twophones} alt=""  draggable={false}/>
            </div>
        </div>
    </div>
  )
}

export default Distribution