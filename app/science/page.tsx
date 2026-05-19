import { ClassProgression, TypicalClassProgression } from '@/components/ClassProgression';
import ExploreOtherTracks from '@/components/ExploreOtherTracks';
import TrackPage from '@/components/TrackPage';
import { constructSEO } from '@/lib/seo';

export const metadata = constructSEO({
  title: 'Science',
  description: 'Explore our science programs',
});

const ScienceTrack = () => {
  return (
    <TrackPage trackName="Science" color="#5CBF60">
      <p>
        The Science Track currently offers an in-depth Environmental Science course. Each course
        takes place in two parts: a fall &quot;A&quot; section, and a continuing spring
        &quot;B&quot; section. Note that the A section must be taken before the B section. The A
        section is only offered in the fall, and the B section is only offered in the spring.
        Environmental Science revolves around the idea of cause and effect as it pertains to
        prevalent environmental issues. In the course, students are asked both to learn about the
        effects humanity has had upon the environment and to utilize their creativity to analyze
        current solutions and brainstorm their own ideas.
      </p>
      <p>We recommend students between 2nd and 5th grade take Environmental Science.</p>

      <TypicalClassProgression>
        {/* The destination page is the same, but this includes anchors that don't really
        exist just to make them unique as the framework requires. */}
        <ClassProgression
          items={[
            { link: '/science/science1', name: 'Environmental Science A' },
            { link: '/science/science1#b', name: 'Environmental Science B' },
          ]}
        />
      </TypicalClassProgression>

      <ExploreOtherTracks trackToOmit="/science" />
    </TrackPage>
  );
};

export default ScienceTrack;
