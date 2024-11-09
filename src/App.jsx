import './app.scss'

import {Home, Navbar, DashboardPreview, AnaLytics, Feature, Distribution } from "./Components/index"

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <DashboardPreview/>
      <AnaLytics/>
      <Feature/>
      <Distribution/>
    </div>
  );
};

export default App;