import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles.css';

function Colleges() {
  const colleges = [
    { name: 'Harvard', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png' },
    { name: 'MIT', logo: 'https://download.logo.wine/logo/Massachusetts_Institute_of_Technology/Massachusetts_Institute_of_Technology-Logo.wine.png' },
    { name: 'Tufts University', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Tufts_University_logo.png' },
    { name: 'University of Chicago', logo: 'https://i0.wp.com/biocars.uchicago.edu/wp-content/uploads/2019/05/cropped-logo.png?ssl=1' },
    { name: 'Brown University', logo: 'https://smartwatermagazine.com/sites/default/files/brown_university_logo.jpg' },
    { name: 'Boston University', logo: 'https://content.sportslogos.net/logos/30/619/full/boston_university_terriers_logo_secondary_2015_sportslogosnet-5796.png' },
    { name: 'Northwestern University', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Northwestern_University.png' },
    { name: 'Georgetown', logo: 'https://www.georgetown.edu/wp-content/uploads/2019/10/Georgetown_logo_blueRGB.jpg' },
    { name: 'NYU', logo: 'https://yt3.ggpht.com/-RZYi5isxH_M/AAAAAAAAAAI/AAAAAAAAAAA/rmWpoe2qZzI/s900-c-k-no/photo.jpg' },
    { name: 'Worcester Polytechnic Institute', logo: 'https://buildagrad.com/content/v2/images/wpi/WPI_Seal_FulClr.jpg' },
    { name: 'Swarthmore College', logo: 'https://www.thecollegetour.com/wp-content/uploads/2022/08/swarthmore-college.png' },
    { name: 'UCLA', logo: 'https://1000logos.net/wp-content/uploads/2017/11/UCLA-Logo.png' },
    { name: 'Columbia', logo: 'https://admissions.ucr.edu/sites/default/files/styles/form_preview/public/2020-07/ucr-education-logo-columbia-university.png?itok=-0FD6Ma2' },
    { name: 'Princeton', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/140px-Princeton_seal.svg.png' },
    { name: 'UMass Amherst', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/UMass_Seal_Medium_PMS_202.png' },
  ];

  return (
    <section className="py-5 bg-white border-top">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="fw-bold">Our Instructors Have Attended</h2>
            <p className="lead text-muted">Learn from students at top universities</p>
          </Col>
        </Row>

        <div className="logo-carousel-container">
          <div className="logo-carousel">
            <div className="logo-slide">
              {colleges.map((college, index) => (
                <div key={`slide1-${index}`} className="logo-item">
                  <div className="college-logo-wrapper bg-white rounded shadow-sm p-4 mx-2 d-flex align-items-center justify-content-center" style={{ height: '120px', width: '200px' }}>
                    <img 
                      src={college.logo} 
                      alt={`${college.name} Logo`} 
                      title={college.name}
                      className="img-fluid"
                      style={{ maxHeight: '80px', maxWidth: '160px', objectFit: 'contain' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="logo-slide">
              {colleges.map((college, index) => (
                <div key={`slide2-${index}`} className="logo-item">
                  <div className="college-logo-wrapper bg-white rounded shadow-sm p-4 mx-2 d-flex align-items-center justify-content-center" style={{ height: '120px', width: '200px' }}>
                    <img 
                      src={college.logo} 
                      alt={`${college.name} Logo`} 
                      title={college.name}
                      className="img-fluid"
                      style={{ maxHeight: '80px', maxWidth: '160px', objectFit: 'contain' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx="true">{`
          .logo-carousel-container {
            width: 100%;
            overflow: hidden;
            margin: 0 auto;
            position: relative;
          }
          
          .logo-carousel {
            display: flex;
            width: 100%;
          }
          
          .logo-slide {
            display: flex;
            animation: scroll 30s linear infinite;
            padding-right: 0.5rem;
          }
          
          .logo-item {
            flex: 0 0 auto;
            min-width: 200px;
          }
          
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </Container>
    </section>
  );
}

export default Colleges;
