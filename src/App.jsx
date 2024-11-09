import './app.scss'

import {Home, Navbar, DashboardPreview, AnaLytics, Feature } from "./Components/index"

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <DashboardPreview/>
      <AnaLytics/>
      <Feature/>
    </div>
  );
};

export default App;