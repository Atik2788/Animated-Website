import './app.scss'

import {Home, Navbar, DashboardPreview, AnaLytics, Feature, Distribution, Footer } from "./Components/index"

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
    </div>
  );
};

export default App;