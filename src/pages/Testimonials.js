import React from 'react';


const testimonials = [
  {
    "text": "gbSTEM gave my daughter the opportunity to take her first steps in computer science and safe, welcoming, and fun environment. You sparked interest and curiosity in her. Every week she spent hours outside class working on her own Scratch projects in addition to the class projects. Thank you!",
    "author": "Parent of 3rd grade student"
  },
  {
    "text": "The program provided extra practice for my child. He learned so much more. We have been very fortunate to be assigned to awesome instructors.",
    "author": "Parent of 5th grade student"
  },
  {
    "text": "Thanks gbSTEM for building student’s interests and confidence on coding/pythons, building 3-D projects and slide-presentations in engineering sessions.   All staffs are very kind, helpful and encouraging.",
    "author": "Parent of 7th grade student"
  },
  {
    "text": "Thank you for providing opportunities for all children to get exposed to STEM! Your work helps alleviate hesitations toward technical topics and better prepare kids to love STEM. We love this program and hope to continue utilizing this resource in the future!",
    "author": "Parent of 7th grade student"
  },
  {
    "text": "gbSTEM was providing live lessons long before PSB [the Public Schools of Brookline] were able to, and I especially appreciated the structure that provided during a time of great uncertainty and stress.",
    "author": "Parent of a 6th grade student"
  },
  {
    "text": "I'm super impressed that this was all put together by high school students and that all instructors are teaching for free. gbSTEM provided some much-needed intellectual stimulation for my kids, especially during this period of remote learning when the curriculum being provided by school (especially in math) has not been challenging. Thank you gbSTEM!",
    "author": "Parent of 2nd and 4th grade students"
  },
  {
    "text": "My daughter really enjoyed her Scratch class. The instructor provided extra help when needed, and she understood that the students enrolled were very young. She tried to accommodate everyone and taught at a slower pace. Thank you for introducing my daughter to Scratch! It was a wonderful experience.",
    "author": "Parent of a 3rd grade student"
  },
  {
    "text": "gbSTEM is an innovative program that met a need for out-of-school time enrichment for children by rallying the knowledge and skills of some truly amazing high school students.",
    "author": "Parent of a 2nd grade student"
  },
  {
    "text": "It's a great opportunity for my son to work with a high school student and work on coding. He really enjoys working with his tutor!",
    "author": "Jennifer M., parent of a 7th grade student"
  },
  {
    "text": "gbSTEM is fantastic! The tutors are kind and engaging, and the curriculum is tailored to each student's individual needs. My daughter is beginning to love computer science, and her math grades have improved as well!",
    "author": "Parent of a 7th grade student"
  },
  {
    "text": "My kids are having great fun creating their own code and running their own computer programs. It gives them a great deal of satisfaction when their programs run successfully. I am very glad that they are able to pick up some programming skills in just a few weeks. My daughter likes math and it is great that gbSTEM provides the opportunity for her to learn more and be challenged.",
    "author": "Parent of 5th and 7th grade students"
  },
  {
    "text":

      "Elena and Yuen Ler are passionate about and dedicated to making a difference in the community and fostering a love for math and computer science. They create curriculum to motivate students to love their classes and want to learn more.",
    "author": "Parent of a 3rd grade student"
  },
  {
    "text": "Thank you for mentoring younger students, you are setting a great example. My son loved his gbSTEM CS sessions and looked forward for the weekend hackathon. Math CS session was engaging and supported learning in a safe fun way. We are is awe of how professionally you all are managing gbSTEM! It is a great program and we will continue supporting you.",
    "author": "Parent of a 3rd grade student"
  },
  {
    "text": "The gbSTEM helped our children stay on schedule with a purpose weekly. It helped them to learn materials beyond what the school teaches them. It also boost their confidence and make them believe in themselves. Overall, we are extremely impressed with the organization and the instructors.",
    "author": "Parent of a 4th grade student"
  },
  {
    "text": "Teachers are very professional",
    "author": "Parent of a 3rd grade student"
  },
  {
    "text": "I am amazed you provide this for free! I really hope that you will keep an online class option even as COVID rates fall.",
    "author": "Parent of a 4th grade student"
  },
  {
    "text": "My child came into coding without knowing what it really is. Now she is so excited about it and wants to keep doing it. Thank you gbSTEM for awakening that passion.",
    "author": "Parent of a 3rd grade student"
  },
  {
    "text": "A fabulous introduction to coding for young children!",
    "author": "Parent of a 2nd grade student"
  }
]

function Testimonial(props) {
  return (
    <div className="col-md-5 ">
      <div className="p-4 m-4"
        style={{
          border: '5px solid #1D2256',
          borderRadius: '20px',
        }}
      >
        <div >
          <p>{props.text}</p>
        </div>
        <div >
          <p>{`-- ${props.author}`}</p>
        </div>
      </div>
    </div>
  )
}

function Testimonials() {

  return (
    <div className="container">
      <div className="text-center m-5">
        <h1>What People Say</h1>
      </div>

      <div className="row">
        {
          testimonials.map((testimonial, index) => {
            return (
              <Testimonial
                key={index}
                text={testimonial.text}
                author={testimonial.author}
              />
            )
          }
          )
        }
      </div>

    </div>
  );

}

export default Testimonials;