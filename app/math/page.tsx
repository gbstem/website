import {
  ClassProgression,
  ClassProgressionDownArrow,
  TypicalClassProgression,
} from '@/components/ClassProgression';
import ExploreOtherTracks from '@/components/ExploreOtherTracks';
import TrackPage from '@/components/TrackPage';
import { constructSEO } from '@/lib/seo';

export const metadata = constructSEO({
  title: 'Math',
  description: 'Explore our math programs',
});

function Math() {
  return (
    <TrackPage trackName="Math" color="#cccccc">
      <p>
        We offer five different mathematics course levels. Each course takes place in two parts: a
        fall &quot;A&quot; section, and a continuing spring &quot;B&quot; section. Note that the A
        section must be taken before the B section. The A section is only offered in the fall, and
        the B section is only offered in the spring. Each course teaches enrichment topics and
        content outside of the standard school curriculum. There is an emphasis on creative
        thinking, problem-solving, and competition math strategies. Each class will also feature fun
        brainteasers and logic puzzles. All courses will be largely problem-based, with a short
        lesson at the beginning. The goal of the Math Track is to equip students with the critical
        thinking and problem-solving skills that will help them succeed in middle school and beyond.
      </p>

      <TypicalClassProgression>
        <ClassProgression
          gradient={['#ffd233', '#ff8c00']}
          items={[
            { link: '/math/math1a', name: 'Math 1a' },
            { link: '/math/math1b', name: 'Math 1b' },
            { link: '/math/math2a', name: 'Math 2a' },
            { link: '/math/math2b', name: 'Math 2b' },
          ]}
        />
        <ClassProgressionDownArrow />
        <ClassProgression
          gradient={['#66BB6A', '#67aeda', '#bf60bf']}
          items={[
            { link: '/math/math3a', name: 'Math 3a' },
            { link: '/math/math3b', name: 'Math 3b' },
            { link: '/math/math4a', name: 'Math 4a' },
            { link: '/math/math4b', name: 'Math 4b' },
            { link: '/math/math5a', name: 'Math 5a' },
            { link: '/math/math5b', name: 'Math 5b' },
          ]}
        />
      </TypicalClassProgression>

      <p>
        Students may start anywhere along the class progression if they are ready to take that
        class.
      </p>

      <ExploreOtherTracks trackToOmit="/math" />
    </TrackPage>
  );
}

export default Math;
