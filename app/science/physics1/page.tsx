import ClassPage from '@/components/ClassPage';

const title = 'Physics I';
const classTitle = 'SCI 201';
const color = '#5CBF60';
const returnLink = '/science';
const description =
  'Do you like learning the science behind the natural world around you? Are you curious about how humans and the environment impact each other? In Physics, we’ll examine just that: the relationship between humans and the physical world, forces, motion, and much more. This course will revolve around the idea of cause and effect in today’s physical phenomena, and students will be asked to utilize their creativity to think about these phenomena scientifically, analyze current solutions, and brainstorm their own ideas. This course will combine comprehensive lessons with hands-on, project-based learning to allow students to both learn about a wide range of topics and gain personal experience working with some. In addition to projects that accompany units of the course, students will create and present a final project to cap off their learning during this course.';
const prerequisites =
  'We recommend this course for anyone who is passionate about or wants to learn more about physical phenomena and design forward-thinking solutions. Students taking this course should be comfortable with basic math and be able to read and understand simple equations.';
const slides = [
  '/images/science/coral.jpeg',
  '/images/science/oxbow.jpg',
  '/images/science/snail.jpg',
];
const slideCaptions = ['', '', ''];
const modules = ['Forces and Motion', 'Energy and Work', 'Waves and Sound'];
const gradeRange = '5-8';
const onlineOnly = true;
const includeExampleProjects = true;

function Physics() {
  return (
    <ClassPage
      title={title}
      classTitle={classTitle}
      color={color}
      trackPage={returnLink}
      description={description}
      prerequisites={prerequisites}
      slides={slides}
      slideCaptions={slideCaptions}
      modules={modules}
      gradeRange={gradeRange}
      online={onlineOnly}
      includeExampleProjects={includeExampleProjects}
    />
  );
}

export default Physics;
