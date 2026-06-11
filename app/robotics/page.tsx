import ExploreOtherTracks from '@/components/ExploreOtherTracks';
import TrackPage from '@/components/TrackPage';
import { interpolateColor } from '@/lib/colors';
import { constructSEO } from '@/lib/seo';

export const metadata = constructSEO({
  title: 'Robotics',
  description: 'Explore our robotics programs',
});

function Robotics() {
  return (
    <TrackPage trackName="Lego Robotics" color="#bf60bf" subtitle="Grades 5-8">
      <p>
        gbSTEM offers a FIRST Lego League Challenge Robotics program. In FIRST Lego League (FLL),
        students working in teams get to build Lego robots to solve missions and earn points in a
        colorful and educational yearly game. They then can compete with students from all across
        the globe. In addition to building robots, students build organization, research, and
        leadership skills by designing an innovative project to benefit their community. A high
        majority of FLL alumni go on to pursue successful careers in STEM fields.{' '}
        <a href="https://www.firstlegoleague.org/">Learn more about FIRST Lego League.</a>
      </p>
      <div className="pb-8">
        <h2 className="p-3 text-center">Prerequisites</h2>
        <p>
          It is recommended that students sign up for this program after having taken a CS or
          Engineering track course, but no experience is required. It is expected that students in
          the robotics program will be able to make the majority of class times, as their teammates
          will be depending on them.
        </p>
      </div>
      <h2 className="p-3 text-center">Skills Taught and Practiced</h2>
      <div className="d-flex justify-content-center mb-5 flex-wrap gap-3">
        {[
          'The Design Process',
          'Engineering Principles',
          'Problem Solving',
          'Robot Programming',
          'Teamwork',
          'Research',
          'Presenting To Judges',
          'Leadership and Organization',
        ].map((skill, index, arr) => (
          <div
            key={skill}
            className="rounded-3 d-flex align-items-center justify-content-center fw-bold min-h-[80px] w-[200px] p-3 text-center text-lg font-(--font-montserrat) text-black shadow-sm"
            style={{
              backgroundColor: interpolateColor(
                ['#66BB6A', '#67aeda', '#bf60bf'],
                index / (arr.length - 1)
              ),
            }}
          >
            {skill}
          </div>
        ))}
      </div>
      <ExploreOtherTracks trackToOmit="/robotics" />
    </TrackPage>
  );
}

export default Robotics;
