import React from "react";

function Mission() {
  return (
    <div className="container">
      <div className="text-center m-5">
        <h1>Mission</h1>
      </div>
      <p>At gbSTEM (Greater Boston STEM Program), our mission is to empower and inspire the next generation of innovators, problem-solvers, and leaders in the fields of Science, Technology, Engineering, and Mathematics (STEM). We believe that through STEM education, students can develop the skills, knowledge, and confidence to make a positive impact on the world around them.</p>

      <h2 className = "text-center" style = {{padding:"1rem"}}>Our Core Values</h2>
      <ol style = {{listStyleType:"square"}}>
        <li style = {{marginBottom:"0.5rem"}}><strong>Excellence:</strong> We strive for excellence in all aspects of our program, fostering a learning environment that encourages academic achievement, critical thinking, and a commitment to continuous improvement.</li>
        <li style = {{marginBottom:"0.5rem"}}><strong>Inclusivity:</strong> We are dedicated to promoting diversity and inclusivity in STEM education. We believe that everyone should have equal opportunities to engage with STEM, and we actively seek to create an inclusive community that values and respects all individuals.</li>
        <li style = {{marginBottom:"0.5rem"}}><strong>Collaboration:</strong> We emphasize the importance of collaboration and teamwork in STEM fields. Through hands-on projects, group activities, and interdisciplinary learning, we cultivate collaboration skills that are essential for success in the modern world.</li>
        <li style = {{marginBottom:"0.5rem"}}><strong>Critical Thinking:</strong> We nurture critical thinking skills in our students, encouraging them to ask questions, analyze problems, and develop innovative solutions. By fostering a mindset of curiosity and inquiry, we empower our students to become independent and adaptable thinkers.</li>
        <li style = {{marginBottom:"0.5rem"}}><strong>Innovation and Project-based Learning:</strong> We foster a culture of innovation through our project-based learning approach. This hands-on experience nurtures creativity, critical thinking, and problem-solving skills, preparing students for projects in the real world.</li>
        <li style = {{marginBottom:"0.5rem"}}><strong>Accessibility:</strong> We are committed to making STEM education accessible to all students, regardless of their background or location. We strive to remove barriers, provide equal opportunities, and ensure that all students can participate and thrive in our program.</li>
      </ol>

      <p style = {{marginTop:"2rem", marginBottom:"5rem"}}>Join us at gbSTEM and become part of a dynamic community dedicated to empowering the next generation of STEM leaders. Together, let's unlock the potential of every student, ignite their passion for discovery, and equip them with the skills to shape a brighter future.</p>
    </div>
  )
}

export default Mission;