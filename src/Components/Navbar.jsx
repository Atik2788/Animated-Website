import { useState } from 'react';
import { routes } from '../Data/dummy';
import '../Styles/navbar.scss'

const Navbar = () => {

    const [bgColor, setBgColor] = useState(false)

    function changeBgColor (){
        if(window.scrollY >=70){
            setBgColor(true)
        }
        else{setBgColor(false) }    
    }

    window.addEventListener("scroll", changeBgColor)

    return (
        <div className={bgColor ? 'app__navbar active' : 'app__navbar'}>
            <div className="navbar__logo">
                <p>D'task</p>
            </div>
            <ul className="navbar__routes">
                {
                    routes.map((route, index) =>(
                        <li key={index} className='route'>
                            <a href={route.path}>{route.name}</a>
                        </li>
                    ))
                }
            </ul>
            <div className="navbar__buttons">
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    );
};

export default Navbar;