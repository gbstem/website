import React from 'react';
import HeroSection from './HomeComponents/HeroSection';
import HomeIntro from './HomeComponents/Intro';
import WhatWeTeach from './HomeComponents/WhatWeTeach';
import HowItWorks from './HomeComponents/HowItWorks';
import WhatPeopleSay from './HomeComponents/WhatPeopleSay';
import OurMission from './HomeComponents/OurMission';
import Counter from './HomeComponents/Counter';
import Colleges from './HomeComponents/Colleges';

function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <HomeIntro />
      <WhatWeTeach />
      <HowItWorks />
      <Counter />
      <OurMission />
      <WhatPeopleSay />
      <Colleges />
    </div>
  );
}

export default Home;
