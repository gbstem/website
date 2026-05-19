import {
  ClassProgression,
  ClassProgressionDownArrow,
  ClassProgressionOr,
  TypicalClassProgression,
} from '@/components/ClassProgression';
import ExploreOtherTracks from '@/components/ExploreOtherTracks';
import TrackPage from '@/components/TrackPage';

const CS = () => {
  return (
    <TrackPage trackName="Computer Science" color="#67aeda">
      <p>
        We offer five course levels in the computer science track: Scratch, Scratch 2, Python 1,
        Python 2, and Web Development. Each course, with the exception of Scratch 1 and Python 1,
        takes place in two parts: a fall &quot;A&quot; section, and a continuing spring
        &quot;B&quot; section. Note that the A section must be taken before the B section. The A
        section is only offered in the fall, and the B section is only offered in the spring.
        Scratch 1 and Python 1 are offered every fall and every spring. Students should take the B
        class after the A class. Classes take a project-based learning approach as students will
        learn through collaborating and working with peers on mini-projects.
      </p>

      <TypicalClassProgression>
        <ClassProgression
          gradient={['#ffd233', '#ff8c00']}
          items={[
            { link: '/cs/scratch1', name: 'Scratch 1' },
            { link: '/cs/scratch2', name: 'Scratch 2' },
            { link: '/cs/scratch3', name: 'Scratch 3' },
          ]}
        />
        <ClassProgressionDownArrow />
        <ClassProgression
          gradient={['#66BB6A', '#67aeda', '#bf60bf']}
          items={[
            { link: '/cs/python1', name: 'Python 1' },
            { link: '/cs/python2', name: 'Python 2' },
            { link: '/cs/python3', name: 'Python 3' },
          ]}
        />
        <ClassProgressionOr />
        <ClassProgression
          gradient={['#66BB6A', '#67aeda', '#bf60bf']}
          items={[
            { link: '/cs/python1', name: 'Python 1' },
            { link: '/cs/python2', name: 'Python 2' },
            { link: '/cs/webdev', name: 'Web Development' },
          ]}
        />
      </TypicalClassProgression>

      <p>
        We recommend students younger than 5th grade begin with Scratch, while those in 6th-8th
        grade should begin with Python. Those who have completed Scratch 2b should proceed to Python
        1a.
      </p>

      <ExploreOtherTracks trackToOmit="/cs" />
    </TrackPage>
  );
};

export default CS;
