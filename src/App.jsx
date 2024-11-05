import './app.scss'
import {Home, Navbar } from "./Components"

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
    </div>
  );
};

export default App;