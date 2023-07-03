import React from 'react';
import Banner from '../images/banner.png';
import HomeIntro from './HomeComponents/Intro';
import WhatWeTeach from './HomeComponents/WhatWeTeach';
import HowItWorks from './HomeComponents/HowItWorks';
import WhatPeopleSay from './HomeComponents/WhatPeopleSay';
import OurMission from './HomeComponents/OurMission';
import Counter from './HomeComponents/Counter';
import Slideshow from '../Components/Slideshow';
import inperson1 from '../images/in-person/inperson1.jpeg'
import inperson2 from '../images/in-person/inperson2.JPG';
import inperson3 from '../images/in-person/inperson3.JPG';
import inperson4 from '../images/in-person/inperson4.JPG';
import inperson5 from '../images/in-person/inperson5.JPG';
import inperson6 from '../images/in-person/inperson6.JPG';


function Home() {
  return (
    <div>

      <div className="d-flex w-100 justify-content-center mb-5" >
        {/* <img src={Banner} alt="Banner" className="w-100" /> */}
        <Slideshow slides={[inperson1, inperson2, inperson3, inperson4, inperson5, inperson6]} banner={true} />
      </div>
      <HomeIntro />
      <div style={{ backgroundColor: 'aliceblue' }}>
        <WhatWeTeach />
      </div>
      <HowItWorks />
      <div style={{ backgroundColor: 'aliceblue' }}>
        <WhatPeopleSay />
      </div>
      <OurMission />
      <div style={{ backgroundColor: '#1D2256' }}>
        <Counter />
      </div>
    </div >

  );
}


export default Home;
