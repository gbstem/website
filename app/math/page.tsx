const ArrowDown = '/images/icons/arrow-down.svg';
import ClassHoverButton from '@/components/ClassHoverButton';
import PageButton from '@/components/PageButton';
import ExploreOtherTracks from '@/components/ExploreOtherTracks';

function Math() {
  return (
    <div>
      <div style={{ backgroundColor: '#cccccc' }} className="text-center p-5">
        <h1>Math Track</h1>
      </div>
      <div className="container">
        <div className="my-5">
          <p>
            We offer five different mathematics course levels. Each course takes place in two parts:
            a fall "A" section, and a continuing spring "B" section. Note that the A section must be
            taken before the B section. The A section is only offered in the fall, and the B section
            is only offered in the spring. Each course teaches enrichment topics and content outside
            of the standard school curriculum. There is an emphasis on creative thinking,
            problem-solving, and competition math strategies. Each class will also feature fun
            brainteasers and logic puzzles. All courses will be largely problem-based, with a short
            lesson at the beginning. The goal of the Math Track is to equip students with the
            critical thinking and problem-solving skills that will help them succeed in middle
            school and beyond.
          </p>
        </div>

        <h2 className="text-center p-3">Typical Class Progression</h2>

        <div style={{ margin: 'auto', marginTop: '1rem', marginBottom: '6rem' }}>
          <div className="d-flex flex-nowrap justify-content-center align-items-center">
            <ClassHoverButton link="/math/math1a" color="#ffd233" className="Math 1a" />
            <ClassHoverButton link="/math/math1b" color="#ffc819" className="Math 1b" />
            <ClassHoverButton link="/math/math2a" color="#ffb347" className="Math 2a" />
            <ClassHoverButton link="/math/math2b" color="#ff8c00" className="Math 2b" />
          </div>
          <div className="d-flex justify-content-center my-3">
            <img alt="down arrow" src={ArrowDown} style={{ width: '3rem', height: '5rem' }} />
          </div>
          <div className="d-flex flex-nowrap justify-content-center align-items-center">
            <ClassHoverButton link="/math/math3a" color="#66BB6A" className="Math 3a" />
            <ClassHoverButton link="/math/math3b" color="#388E3C" className="Math 3b" />
            <ClassHoverButton link="/math/math4a" color="#67aeda" className="Math 4a" />
            <ClassHoverButton link="/math/math4b" color="#4b8fc2" className="Math 4b" />
            <ClassHoverButton link="/math/math5a" color="#A97ABF" className="Math 5a" />
            <ClassHoverButton link="/math/math5b" color="#bf60bf" className="Math 5b" />
          </div>
        </div>

        <p>
          {' '}
          Students may start anywhere along the class progression if they are ready to take that
          class.
        </p>

        <ExploreOtherTracks trackToOmit="/math" />
      </div>
    </div>
  );
}

export default Math;
