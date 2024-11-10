import './app.scss'

import {Home, Navbar, DashboardPreview, AnaLytics, Feature, Distribution, Footer,STTop  } from "./Components/index"

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <DashboardPreview/>
      <AnaLytics/>
      <Feature/>
      <Distribution/>
      <Footer/>
      <STTop/>
    </div>
  );
};

export default App;