import ClassHoverButton from '@/components/ClassHoverButton';
import PageButton from '@/components/PageButton';
import ExploreOtherTracks from '@/components/ExploreOtherTracks';

const Engineering = () => {
  return (
    <div>
      <main>
        <div style={{ backgroundColor: '#ffd809' }} className="text-center p-5">
          <h1>Engineering Track</h1>
        </div>

        <section id="cs">
          <div className="container my-5">
            <p>
              We offer 3 different engineering courses during each semester: Engineering 1, 2, and
              3. Engineering classes help students develop a wide variety of skills, from
              problem-solving to an understanding of physics.
            </p>

            <h2 className="text-center p-5">Typical Class Progression</h2>

            <div className="d-flex flex-nowrap justify-content-center align-items-center">
              <ClassHoverButton link="/engineering/engineering1" color="#ffc819" className="Engineering 1" />
              <ClassHoverButton link="/engineering/engineering2" color="#388E3C" className="Engineering 2" />
              <ClassHoverButton link="/engineering/engineering3" color="#67aeda" className="Engineering 3" />
            </div>

            <p className="mt-5">
              We recommend that students below 5th grade begin with Engineering I, while those in
              6th-8th grade can begin with Engineering II.
            </p>

            <ExploreOtherTracks trackToOmit="/engineering" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Engineering;
