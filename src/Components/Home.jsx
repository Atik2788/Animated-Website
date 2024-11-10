import '../Styles/home.scss'
import {TiTick} from "react-icons/ti"

const Home = () => {
  return (
    <div id='home' className='app__home'>
      <div className="home__text">
        <h1>Make Your Business</h1>
        <h1>More Powerfull</h1>        
      </div>

        <div className="trics__container">
          <p>
            <span><TiTick/></span> Lifitime Support
          </p>
          <p>
            <span><TiTick/></span> No NCC Register
          </p>
        </div>

        <div className="input__container">
          <input type="text" placeholder='Input your email' />
          <button>Try for free</button>
        </div>

    </div>
  )
}

export default Home