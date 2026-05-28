import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import HomeIntro from '@/components/home/Intro';
import WhatWeTeach from '@/components/home/WhatWeTeach';
import HowItWorks from '@/components/home/HowItWorks';
import WhatPeopleSay from '@/components/home/WhatPeopleSay';
import OurMission from '@/components/home/OurMission';
import Counter from '@/components/home/Counter';
import Colleges from '@/components/home/Colleges';

export default function Home() {
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
