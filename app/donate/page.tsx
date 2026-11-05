import { GBSTEM_DONATE } from '@/lib/constants';
import { constructSEO } from '@/lib/seo';
import DonationCalculator from '@/components/donate/DonationCalculator';

export const metadata = constructSEO({
  title: 'Donate',
  description: 'Support the Greater Boston STEM Program',
});
import SponsorshipTiers from '@/components/donate/SponsorshipTiers';

const contributionBenefits = [
  {
    title: 'Maintain our Website:',
    description:
      'Your generosity helps us keep our website up and running, serving as a valuable resource for students, parents, and educators.',
  },
  {
    title: 'Secure In-Person Venues:',
    description:
      'We believe in the power of in-person interaction for effective STEM education. Your donations enable us to secure suitable venues where students can engage in hands-on learning activities.',
  },
  {
    title: 'Buy Materials and Snacks for Classes:',
    description:
      "Creating an engaging and nurturing learning environment is vital to fostering students' curiosity. Your support allows us to provide the necessary materials and snacks for our in-person classes.",
  },
  {
    title: 'Provide Prizes at Community Events:',
    description:
      'By donating, you help us provide exciting prizes that inspire and motivate students at our events.',
  },
  {
    title: 'Access Necessary Software:',
    description:
      'Staying at the forefront of STEM education requires the use of up-to-date software. Your contributions assist us in acquiring the software needed to enhance our programs and initiatives.',
  },
  {
    title: 'Thank Our Hardworking Instructors!',
    description:
      'We thank our instructors for their dedicated work each year with free gbSTEM merchandise.',
  },
];

function Donate() {
  return (
    <div className="site-container">
      <div className="m-12 text-center">
        <h1>Support Us</h1>
      </div>

      <p>
        The Greater Boston STEM Program relies on your support to provide enriching learning
        experiences for students in our community. As a registered 501(c)3 nonprofit organization,
        all donations to us are tax deductible.
      </p>

      <a className="btn mb-6" href={GBSTEM_DONATE} target="_blank" rel="noreferrer">
        Make A Contribution
      </a>

      <div className="m-4 rounded-[10px] border border-divider bg-[aliceblue] p-4 shadow-[0_1px_5px_#1d2256] md:m-12 md:p-12">
        <DonationCalculator />
      </div>

      <h2 className="text-center">Sponsoring gbSTEM</h2>
      <p className="p-8">
        We thank significant monetary (typically corporate) sponsors with benefits that include
        brand visibility on gbSTEM merchandise and social media. More benefits become available with
        higher sponsorship tiers.
      </p>

      <SponsorshipTiers />

      <h2 className="p-4 text-center">Your Contributions Will Help Us...</h2>
      <ol className="list-[square]">
        {contributionBenefits.map((benefit, index) => (
          <li key={index} className="mb-4">
            <strong>{benefit.title}</strong> {benefit.description}
          </li>
        ))}
      </ol>

      <p>
        Together, we can empower the next generation of innovators and problem solvers. Join us in
        supporting STEM education by making a tax-deductible donation today. Your generosity will
        help us provide quality education, cultivate critical skills, and inspire students to pursue
        fulfilling STEM careers. Thank you for your unwavering support of the Greater Boston STEM
        Program.
      </p>
    </div>
  );
}

export default Donate;
