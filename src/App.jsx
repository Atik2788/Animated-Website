import './app.scss'
import {Home, Navbar, DashboardPreview, AnaLytics } from "./Components/index"

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      {/* <DashboardPreview/> */}
      <AnaLytics/>
    </div>
  );
};

export default App;