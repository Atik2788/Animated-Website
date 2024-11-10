import { useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'

const STTop = () => {

  const [isActive, setActive] = useState(false)

  function showArrow(){
    if(window.scrollY >= 300){
      setActive(true);
    }
    else{
      setActive(false)
    }
  }

  window.addEventListener("scroll", showArrow)

  return (
    // style comes from app.scss in src file
 
      <div className={isActive ? 'app__sttop active' : 'app__sttop'}>
        <a href="#home"> <BsArrowUp/> </a>    
    </div>
  )
}

export default STTop