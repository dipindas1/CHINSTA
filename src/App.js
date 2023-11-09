import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './PAGES/AUTH/LOGIN/Login';
import ProfilePic from './PAGES/AUTH/LOGIN/ProfilePic';
import Home from './PAGES/HOMEBORD/Home';
import Path from './Route_Path/Route_Path';
import HomeScreen from './PAGES/HOME/HomeScreen';

function App() {
  return (
 <>
 {/* <Home/> */}
 {/* <ProfilePic/> */}

 <BrowserRouter>
 <Routes>

  <Route path={Path.LOGIN} element={ <Login/>} />
  <Route path={Path.PROFILE_PIC} element={<ProfilePic/>} />
  <Route path={Path.DASHBOARD} element={<Home/>} />
  <Route path='/' element={<Home/>} >
    <Route path={Path.DASH_HOME} element={<HomeScreen/>}/>
  </Route>
  
 </Routes>
 
 
 </BrowserRouter>

 </>
  );
}

export default App;
