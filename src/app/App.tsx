import React, { FC } from 'react';
import './app.scss'
import NavBar from '../components/navbar/NavBar';
import AboutUs from '../components/sections/about-us/AboutUs';
import Contacts from '../components/sections/contacts/Contacts';
import Gallery from '../components/sections/gallery/Gallery';
import Main from '../components/sections/main/Main';
import WhyUs from '../components/sections/why-us/WhyUsSection';


const App: FC = () => {
  return (
    <div>
     <NavBar />
     <Main />
     <AboutUs />
     <WhyUs />
     <Gallery />
     <Contacts />
    </div>
  );
}

export default App;
