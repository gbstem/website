import { ClassProgression, TypicalClassProgression } from '@/components/ClassProgression';
import ExploreOtherTracks from '@/components/ExploreOtherTracks';
import TrackPage from '@/components/TrackPage';
import { constructSEO } from '@/lib/seo';

export const metadata = constructSEO({
  title: 'Engineering',
  description: 'Explore our engineering programs',
});

const Engineering = () => {
  return (
    <TrackPage trackName="Engineering" color="#ffd809">
      <p>
        We offer 3 different engineering courses during each semester: Engineering 1, 2, and 3.
        Engineering classes help students develop a wide variety of skills, from problem-solving to
        an understanding of physics.
      </p>

      <TypicalClassProgression>
        <ClassProgression
          items={[
            { link: '/engineering/engineering1', name: 'Engineering 1' },
            { link: '/engineering/engineering2', name: 'Engineering 2' },
            { link: '/engineering/engineering3', name: 'Engineering 3' },
          ]}
        />
      </TypicalClassProgression>

      <p className="mt-5">
        We recommend that students below 5th grade begin with Engineering I, while those in 6th-8th
        grade can begin with Engineering II.
      </p>

      <ExploreOtherTracks trackToOmit="/engineering" />
    </TrackPage>
  );
};

export default Engineering;
