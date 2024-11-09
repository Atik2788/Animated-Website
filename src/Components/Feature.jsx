import {feature} from '../Images'


const Feature = () => {
  return (
    <div className="app__feature">
        <div className="feature__container">
            <div className="left__feature">
                <img src={feature} alt="" />
            </div>
            <div className="right__feature"></div>
        </div>
    </div>
  )
}

export default Feature