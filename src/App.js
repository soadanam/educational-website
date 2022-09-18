import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import AllCourses from './components/AllCourses/AllCourses';
import TopCourses from './components/TopCourses/TopCourses';
import NoMatch from './components/NoMatch/NoMatch';
import ContactUs from './components/ContactUs/ContactUs';
import Top from './components/Top/Top';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import ReadMore from './components/ReadMore/ReadMore';

import { createContext } from 'react';
import About from './components/About/About';
export const RingContext = createContext('ring');

function App() {
  return (
    <div className="App">
      <RingContext.Provider value = {'Context API'}>
        <BrowserRouter>
          <Top></Top>
          <Navigation></Navigation>

          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/home' element={<Home></Home>} />
            <Route path='/home/services' element={<Services></Services>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/allCourses' element={<AllCourses />} ></Route>
            <Route path='/topCourses' element={<TopCourses />}></Route>
            <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
            {/* <Route path='/responsive' element={<ButtonAppBar/>}></Route> */}
            <Route path='/home/services/:any' element={<ReadMore></ReadMore>}> </Route>


            <Route path='*' element={<NoMatch></NoMatch>}></Route>
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </RingContext.Provider>
    </div>
  );
}

export default App;
