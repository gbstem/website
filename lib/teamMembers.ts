const teamMembers = [
  {
    name: 'Michael Bolgov',
    school: 'University of Chicago',
    graduationYear: '‘27',
    profilePic: 'MichaelBolgov.jpg',
    role: 'Co-President',
    bio: 'Michael is a third-year student at UChicago majoring in Molecular Engineering. He has been a gbSTEM math instructor, curriculum developer, and assistant director at gbSTEM prior to assuming his current role. Michael currently works as an undergraduate research assistant at a lab at UChicago, where he explores the possible origins of life on Earth. In his free time, Michael enjoys reading, playing piano, rock climbing, and playing tennis.',
    team: 'presidents',
  },
  {
    name: 'Kendree Chen',
    school: 'MIT',
    graduationYear: '‘29',
    profilePic: 'kendreeC.jpg',
    role: 'Co-President',
    bio: 'Kendree is a freshman at MIT. She joined gbSTEM as a Scratch instructor and was CS director before becoming a president. She has taught coding classes for seven years, interned at a Boston University computer science lab, and works part-time as a freelance web developer. She founded the gbSTEM Lego Robotics program, and was captain of her high school FIRST robotics team. In her spare time, she enjoys crocheting, baking, and building websites with HTML, CSS, and JavaScript.',
    team: 'presidents',
  },

  {
    name: 'Hana Kaneko',
    school: 'Boston University Academy',
    graduationYear: '‘27',
    profilePic: 'HanaKaneko.jpg',
    role: 'Co-President',
    bio: 'Hana is a senior at Boston University Academy. She started at gbSTEM as a Scratch instructor and in-person LEGO robotics instructor and gained experience as a Communications Associate before becoming a Vice President. She is the lead of Outreach and Business of her school’s FIRST Robotics Competition (FRC) team, and has various experiences in one-on-one tutoring and mentoring in areas such as algebra, ELA, social studies, and time management. For fun, she likes playing soccer, sketching, and doing escape rooms.',
    team: 'presidents',
  },

  {
    name: 'Jieling Pua',
    school: 'Brookline High School',
    graduationYear: '‘27',
    profilePic: 'JielingPua.jpg',
    role: 'Co-President',
    bio: 'Jieling is driven by a passion for STEM and education. She established and leads The SciSapience Club, engaging with professionals and showcasing student work to deepen understanding of scientific careers and opportunities. She has extensive experience in educational support, mentorship, and fostering welcoming communities for younger students, through roles as a math teaching assistant and tutor.',
    team: 'presidents',
  },

  {
    name: 'Sarah Meyer',
    school: 'Worcester Polytechnic Institute',
    graduationYear: '‘27',
    profilePic: 'sarah.jpg',
    role: 'Advisor, Fundraising & Partnerships Manager',
    bio: 'Sarah is a junior at WPI majoring in bioinformatics and computational biology. She started as a Scratch instructor during Spring 2021, and has been a part of the gbSTEM team ever since. She believes in making STEM education affordable and accessible for every family. Outside of gbSTEM, she enjoys coding, cooking, baking, and spending time with friends and family.',
    team: 'advisors',
  },

  {
    name: 'Zizi Fan',
    school: 'Boston University Academy',
    graduationYear: '‘28',
    profilePic: 'zizi.jpg',
    role: 'Co-Director of Recruitment',
    bio: 'Zizi is a junior at Boston University Academy. She first joined gbSTEM in 2025 as an in-person robotics instructor before becoming communications associate. Zizi has a deep passion for STEM, especially biology, and she wishes to pursue a career in medicine. In her free time, she enjoys dancing, watching dramas, and making clothes.',
    team: 'recruitment',
  },

  {
    name: 'Talia Hsieh',
    school: 'Brookline High School',
    graduationYear:'‘27',
    profilePic:'TaliaHsieh.jpg',
    role: 'Co-Director of Recruitment',
    bio: 'Talia is a senior at Brookline High School. She joined gbSTEM as a Scratch instructor and an Engineering instructor before becoming a Partnership Lead. Talia wants to pursue a career in engineering. Throughout high school, she has tutored for various STEM classes and is a member of her high school FIRST robotics team, where she focuses on Computer Aided Design and online outreach. In her free time, she enjoys practicing martial arts and reading.',
    team: 'recruitment',
  },

  {
    name: 'Dennis Zhou',
    school: 'Milton Academy',
    graduationYear:'‘27',
    profilePic:'dennis.jpg',
    role: 'Recruitment Officer + Web Curriculum Developer',
    bio: 'Dennis joined in 2023 as a web development instructor. He started learning how to code since he was seven years old. He is experienced in HTML/CSS/JS, Java, and Python. He has developed various apps and developed his own store website for a self-made clothing brand. He has interned at various companies including CodeWizardsHQ in developing a cybersecurity app. Outside of school, he loves to swim and go out with his friends.',
    team: 'recruitment',
  },

  {
    name: 'Sonya Farruqui',
    school: '',
    graduationYear:'',
    profilePic:'sonya.jpg',
    role: 'Recruitment Officer',
    bio: 'Sonya started working with gbSTEM in 2025 as an Environmental Science instructor and is now a part of the Recruitment team. Sonya has always had a passion for STEM, particularly with Biology. In her free time, she loves to spend time with friends and family, play tennis, and listen to music!',
    team: 'recruitment',
  },

  {
    name: 'Luke Mussalli',
    school: 'Milton Academy',
    graduationYear: '‘27',
    profilePic: 'LukeMussalli.jpg',
    role: 'Outreach Associate',
    bio: 'Luke is a junior at Milton Academy. He joined gbSTEM in September of 2023 where he taught Scratch I. Luke has been passionate about STEM since he was young. In his free time Luke likes to play the piano, to play squash, and to hang out with friends.',
    team: 'outreach',
  },

  {
    name: 'Sampreetha Srimam',
    school: 'Sharon High School',
    graduationYear: '‘27',
    profilePic: 'Sampreetha.jpg',
    role: 'Outreach Associate',
    bio: 'Sampreetha is a junior at Sharon High School. In her free time she loves to bake, read, and listen to music. She has a keen interest in STEM and has loved computer science ever since she was introduced to the coding language Python! As a second term events associate, she is looking forward to organizing more events!!',
    team: 'outreach',
  },
  {
    name: 'Rupinika Golla',
    school: 'Milford High School',
    graduationYear: '‘28',
    profilePic: 'RupinikaGolla.jpg',
    role: 'Communications Associate',
    bio: 'Rupinika is a junior at Milford High School. She joined gbSTEM in 2025 as a math instructor and enjoys helping younger students develop confidence in problem solving. She is passionate about math and computer science and hopes to pursue a career in a STEM-related field. Outside of gbSTEM, Rupinika enjoys playing the guitar, violin, and tennis.',
    team: 'outreach',
  },

  {
    name: 'Joshua Flanagan',
    school: 'Boston University Academy',
    graduationYear: '‘27',
    profilePic: 'Placeholder.jpg',
    role: 'Outreach Associate',
    bio: '',
    team: 'outreach',
  },

  {
    name: 'Allen Yu',
    school: 'Tufts University',
    graduationYear: '‘28',
    profilePic: 'Allen.jpg',
    role: 'Math Co-Director',
    bio: 'Allen is a sophomore at Tufts University studying chemical engineering. He was a gbSTEM python instructor prior to assuming his current role. Outside of gbSTEM, he loves to write articles and short stories to be published online, play tennis, and listen to classical pieces, such as Nocturne, Op. 9 No. 2 by Frédéric Chopin.',
    team: 'math',
  },
  {
    name: 'Sudeep Chitrothu',
    school: 'Northwestern University',
    graduationYear: '‘28',
    profilePic: 'SudeepC.jpg',
    role: 'Math Co-Director',
    bio: 'Sudeep is a junior at Northwestern University studying biomedical engineering and neuroscience. He has taught math, computer science, and engineering courses at gbSTEM. Through his role as a math director, he hopes to design engaging curricula that sparks a love for problem-solving. In his free time, he likes to teach, play badminton, and try new food.',0
    team: 'math',
  },

  {
    name: 'Leila Koplan',
    school: 'Brookline High School',
    graduationYear: '‘27',
    profilePic: 'LeilaKoplan.jpg',
    role: 'Math I Curriculum Developer',
    bio: 'Leila is a Math I curriculum developer at gbSTEM. She is a junior at Brookline High School and loves spending time with friends and playing lacrosse.',
    team: 'math',
  },

  {
    name: 'Zaria Wellesley',
    school: 'Buckingham Browne & Nichols School',
    graduationYear: '‘28',
    profilePic: 'zaria.jpg',
    role: 'Math II Curriculum Developer',
    bio: 'Zaria is a junior at BB&N. She taught at gbSTEM as a substitute instructor and a Math II instructor before becoming a curriculum developer. At her school, she is a math peer tutor and leads a girls math club for elementary students. Zaria is very passionate about STEM and hopes to study medicine. In her free time, she runs track and cross country and enjoys spending time with her friends.',
    team: 'math',
  },

  {
    name: 'Dhyey Shah',
    school: 'Chelmsford High',
    graduationYear: '‘28',
    profilePic: 'DhyeyShah.jpg',
    role: 'Math III Curriculum Developer',
    bio: "Dhyey is a math educator with a background in teaching Mathematics II, now leading the Math III team. He enjoys blending logic with strategy—whether in teaching or playing soccer, cricket, or chess. He is also a member of his school's math and science teams, where he continues to explore new challenges and collaborate with peers who share his enthusiasm for STEM.",
    team: 'math',
  },

  {
    name: 'Amogh Hiremath',
    school: 'North Attleborro High School',
    graduationYear: '‘27',
    profilePic: 'Amogh.jpg',
    role: 'Math IV Curriculum Developer',
    bio: 'Amogh is a Senior at North Attleboro High School, and serves as the Math IV curriculum developer. He joined gbSTEM in 2025, initially teaching Engineering II before teaching Math III. Amogh is committed to sharing the gift of knowledge with younger students, as well as boosting problem-solving skills. Having been captivated by STEM from a young age, he hopes to pass on his enthusiasm to others. In his free time, he enjoys playing games with friends and sports like basketball.',
    team: 'math',

  },

  {
    name: 'Meghanaa Balasubramani',
    school: 'Milton Academy',
    graduationYear: '‘27',
    profilePic: 'MeghanaaID.jpg',
    role: 'Math V Curriculum Developer',
    bio: 'Meghanaa is a senior at Milton Academy. She began at gbSTEM as a Math III instructor, working with a vibrant group of students while teaching engaging topics such as powers of ten, estimation, fractions, and so much more. She now serves as the Math V curriculum developer, creating advanced math lessons designed to prepare students for competitions like the AMC. She loves having the opportunity to incorporate the feedback she gained from her own experience as an instructor into the lessons she creates, helping ensure that every student & teacher has a smooth and rewarding Math V experience. Outside of teaching, she loves eating all food (especially spicy food), having long, thoughtful conversations with friends in cafés or common rooms, and playing video games with them. She is also a devoted fan of boba and buttered popcorn (separately, of course).',
    team: 'math',
  },

  {
    name: 'Grace Qiu',
    school: 'Mass Academy',
    graduationYear: '‘26',
    profilePic: 'GraceQiu.jpg',
    role: 'Engineering Co-Director',
    bio: 'Grace first began working at gbSTEM in 2022 as an Engineering I instructor. She has experience teaching students of all ages and different subjects, ranging from engineering to art. She hopes to pursue a major in mechanical engineering and robotics engineering. Her favorite hobbies are robotics, swimming, art, and music.',
    team: 'engineering',
  },

  {
    name: 'Sanaaya Hora',
    school: 'Nobles and Greenough School',
    graduationYear: '‘28',
    profilePic: 'SanaayaHora.jpg',
    role: 'Engineering Co-Director + Engineering III Curriculum Developer',
    bio: 'Sanaaya is a junior at the Noble and Greenough School. She joined gbSTEM in 2024 as an Engineering 1 instructor and is now an Engineering Co-Director. Sanaaya is deeply passionate about STEM education and health advocacy, especially in youth communities. In her free time, she loves to read, write, bake, and spend time with her friends and family.',
    team: 'engineering',
  },

  {
    name: 'Anzar Ahmed',
    school: '',
    graduationYear: '',
    profilePic: 'Placeholder.jpg',
    role: 'Engineering I Curriculum Developer',
    bio: '',
    team: 'engineering',
  },

  {
    name: 'Aarav Agrawal',
    school: 'Milton Academy',
    graduationYear: '‘27',
    profilePic: 'AaravAgrawal.jpg',
    role: 'Engineering II Curriculum Developer',
    bio: 'In fourth grade Aarav began pursuing robotics at a competitive level, and since then, he has been fascinated by different topics in STEM. Starting during his sophomore year in high school, he began teaching engineering courses for gbSTEM, and since then, his passion for expanding stem education has only grown. Outside of school and gbSTEM, some of his favorite hobbies include playing tennis and programming.',
    team: 'engineering',
  },

  {
    name:'Peter Cohan',
    school: 'Milton Academy',
    graduationYear:'‘28',
    profilePic: 'PeterCohan.jpg',
    role:'Engineering III Curriculum Developer',
    bio: 'Peter is a junior at Milton Academy, with a deliberate passion for mechanics, acoustics, and sensing. Before his current role at gbSTEM, he assumed the position of an Engineering II instructor. Peter spent Summer 2026 at a consulting engineering firm in Cambridge, and as an independent tinkerer in his home lab (Instagram: @petercohanlab). In his free time, Peter enjoys playing the guitar and other instruments, the outdoors, and skiing.',
    team: 'engineering',
 },

  {
    name: 'Maxwell Yu',
    school: 'California Institute of Technology',
    graduationYear: '‘29',
    profilePic: 'MaxwellYu.jpg',
    role: 'Computer Science Director',
    bio: 'Maxwell joined gbSTEM in 2022 as a web development instructor. He first started teaching himself to code when he was six years old and is now experienced with HTML/CSS/JS, Java, C#, C++, Python, Powershell, and R. He maintains multiple professional websites, including that of his robotics team. He has also reached the silver division of the USA Computing Olympiad and worked as a data science intern at a neurobiology lab. He is eager to share his passion for coding, encouraging students to explore computer science independently and think critically to solve problems.',
    team: 'computer science',
  },

  {
    name: 'Shaun Ng',
    school: 'Boston University Academy',
    graduationYear: '‘27',
    profilePic: 'Placeholder.jpg',
    role: 'Python I Curriculum Developer',
    bio: '',
    team: 'computer science',
  },

  {
    name: 'Siddharth Monagari',
    school: '',
    graduationYear: '',
    profilePic: 'Placeholder.jpg',
    role: 'Python II Curriculum Developer',
    bio: '',
    team: 'computer science',
  },

 {
    name: 'Teddy Shi',
    school: 'Boston University Academy',
    graduationYear: '‘27',
    profilePic: 'TeddyShi.png',
    role: 'Scratch I Curriculum Developer',
    bio: 'Teddy is a junior at Boston University Academy. He first began working at gbSTEM in 2024. He has experience teaching students of many ages. In his free time, he enjoys playing volleyball, doing photography and participating in his school robotics team. Teddy is excited to work with everyone in the upcoming semester!',
    team: 'computer science',
  },

  {
    name: 'Laura Meli',
    school: 'Milton Academy',
    graduationYear: '‘28',
    profilePic: 'LauraMeli.jpg',
    role: 'Scratch II Curriculum Developer',
    bio: 'Laura is a junior at Milton Academy. She first joined as a student here, taking Python 1A, before becoming the Scratch 2 Curriculum Developer. At gbSTEM, she has taught Scratch, Lego Robotics, Python, Engineering, and Math. She has competed in several coding competitions, earning 2nd and 3rd place in the BPS coders challenge. In her free time she participates in her school's debate team, goes on runs, plays the guitar, dances, and spends time with her family!',
    team: 'computer science',
  },


  {
    name: 'Dillan Agrawal',
    school: 'Milton Academy',
    graduationYear: '‘28',
    profilePic: 'DillanAgrawal.jpg',
    role: 'Science Director',
    bio: 'Dillan is a junior at Milton Academy. He’s very interested in STEM, with a particular fondness for programming and mathematics. His favorite language is Java, and he has recently taken a liking to Python and its usage in ML. He has previously taught and developed curriculum for the Math V track. Dillan joined gbSTEM in 2024, intending to share his love for problem-solving with younger, curious students. Outside of school, he enjoys robotics, tennis, and chess.',
    team: 'science',
  },


  {
    name: 'Millie Heredia',
    school: 'Milton Academy',
    graduationYear: '‘27',
    profilePic: 'MillieHeredia.jpg',
    role: 'Environmental Science Curriculum Developer',
    bio: 'Millie is a junior at Milton Academy. She has previously been an Environmental Science instructor at gbSTEM and is now an Environmental Science curriculum developer. She enjoys playing on the varsity volleyball team, baking, and hanging out with friends and roommates',
    team: 'science',
  },

  {
    name: 'Sharon Xiong',
    school: 'Boston University Academy',
    graduationYear: '‘27',
    profilePic: 'SharonXiong.jpeg',
    role: 'Physics Curriculum Developer',
    bio: 'Sharon is a senior at Boston University Academy with a strong interest in physics and engineering. She joined gbSTEM as an instructor for the in-person LEGO robotics program and is currently helping develop a new physics curriculum after taking advanced physics courses at Boston University. Outside the classroom, Sharon is the captain of the FIRST Robotics Competition team at her school, where she is also a tour guide and peer tutor. In her free time, she enjoys exploring Boston with friends, crocheting, soccer, and tennis.',
    team: 'science',
  },
];

export default teamMembers;
