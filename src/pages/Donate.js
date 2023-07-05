import DonationCalculator from "../Components/DonationCalculator";

function Donate() {
  return (


    <div class="container" >

      <div className="text-center m-5">
        <h1>Support Us</h1>
      </div>


      <p>The Greater Boston STEM Program relies on your support to provide enriching learning experiences for students in our community. As a registered 501(c)3 nonprofit organization, all donations are tax deductible, giving you an opportunity to make a difference while enjoying potential tax advantages.</p>


      <a type="button" class="btn btn-primary mb-4"
        href="https://www.paypal.com/fundraiser/charity/4605663"
        target="_blank" rel="noreferrer"
      >Donate now</a>

      <div className="m-4">
        <DonationCalculator />
      </div>


      <p>When you donate to our cause, you directly contribute to:</p>
      <ol>
        <li><strong>Maintaining our Website:</strong> Your generosity helps us keep our website up and running, serving as a valuable resource for students, parents, and educators.</li>
        <li><strong>Securing In-Person Venues:</strong> We believe in the power of in-person interaction for effective STEM education. Your donations enable us to secure suitable venues where students can engage in hands-on learning activities.</li>
        <li><strong>Materials and Snacks for Classes:</strong> Creating an engaging and nurturing learning environment is vital to fostering students' curiosity. Your support allows us to provide the necessary materials and snacks for our in-person classes.</li>
        <li><strong>Offering Prizes at Community Events:</strong> By donating, you help us provide exciting prizes that inspire and motivate students at our events.</li>
        <li><strong>Access to Necessary Software:</strong> Staying at the forefront of STEM education requires the use of up-to-date software. Your contributions assist us in acquiring the software needed to enhance our programs and initiatives.</li>
        <li><strong>Merch:</strong> We buy gbSTEM merch to give back to instructors, showing our appreciation for their dedication and support.</li>      </ol>

      <p>Together, we can empower the next generation of innovators and problem solvers. Join us in supporting STEM education by making a tax-deductible donation today. Your generosity will help us provide quality education, cultivate critical skills, and inspire students to pursue fulfilling STEM careers. Thank you for your unwavering support of the Greater Boston STEM Program.</p>


    </div>


  )
}

export default Donate;