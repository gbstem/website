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
    <div className="container">
      <div className="m-5 text-center">
        <h1>Support Us</h1>
      </div>

      <p>
        The Greater Boston STEM Program relies on your support to provide enriching learning
        experiences for students in our community. As a registered 501(c)3 nonprofit organization,
        all donations to us are tax deductible.
      </p>

      <a
        type="button"
        className="btn btn-primary mb-4"
        href="https://www.paypal.com/fundraiser/charity/4605663"
        target="_blank"
        rel="noreferrer"
      >
        Make A Contribution
      </a>

      <div
        className="m-md-5 p-md-5 m-3 p-3"
        style={{
          borderRadius: '10px',
          borderWidth: '1px',
          boxShadow: '0px 1px 5px #1d2256',
          backgroundColor: 'aliceblue',
          borderStyle: 'solid',
        }}
      >
        <DonationCalculator />
      </div>

      <h2 className="text-center" style={{ marginTop: '5rem' }}>
        Sponsoring gbSTEM
      </h2>
      <p style={{ padding: '2rem' }}>
        We thank significant monetary (typically corporate) sponsors with benefits that include
        brand visibility on gbSTEM merchandise and social media. More benefits become available with
        higher sponsorship tiers.
      </p>

      <SponsorshipTiers />

      <h2 className="p-3 text-center" style={{ marginTop: '3rem' }}>
        Your Contributions Will Help Us...
      </h2>
      <ol style={{ listStyleType: 'square' }}>
        {contributionBenefits.map((benefit, index) => (
          <li key={index} className="mb-3">
            <strong>{benefit.title}</strong> {benefit.description}
          </li>
        ))}
      </ol>

      <p style={{ marginTop: '2rem', marginBottom: '5rem' }}>
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
