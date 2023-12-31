import React from 'react';
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
import Colleges from './HomeComponents/Colleges';


function Home() {
  return (
    <div>
      <div className="d-flex w-100 justify-content-center mb-5" >
        <Slideshow slides={[inperson1, inperson2, inperson3, inperson4, inperson5, inperson6]} banner={true} />
      </div>
      <HomeIntro />
      <div style={{ backgroundColor: 'aliceblue' }}>
        <WhatWeTeach />
      </div>
      <div style={{ backgroundColor: 'white' }}>
      <HowItWorks />
      </div>
      <div style={{ backgroundColor: '#67aeda' }}>
        <Counter />
      </div>
      <OurMission />
      <div style={{ backgroundColor: 'aliceblue' }}>
        <WhatPeopleSay />
      </div>
      <Colleges />
    </div >

  );
}


export default Home;
