import React from 'react';
import Banner from '../images/banner.png';
import HomeIntro from './HomeComponents/Intro';
import WhatWeTeach from './HomeComponents/WhatWeTeach';
import HowItWorks from './HomeComponents/HowItWorks';
import WhatPeopleSay from './HomeComponents/WhatPeopleSay';
import OurMission from './HomeComponents/OurMission';
import Counter from './HomeComponents/Counter';


function Home() {
  return (
    <div>

      <div className="d-flex w-100 justify-content-center">
        <img src={Banner} alt="Banner" className="w-100" />
      </div>

      <main>

        <HomeIntro />
        <WhatWeTeach />
        <HowItWorks />
        <WhatPeopleSay />
        <OurMission />
        <Counter />

        <script src="counter.js"></script>
      </main>

    </div >

  );
}


export default Home;
