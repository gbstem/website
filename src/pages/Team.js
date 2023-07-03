import React, { useState } from 'react';
import teamMembers from './teamMembers';
import '../styles.css'


// Profile component
const Profile = ({ name, school, graduationYear, profilePic, bio, role }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="col-md-3 text-center mb-5" >
      <div className="justify-content-center">
        <img src={profilePic} alt="Profile" className="rounded-circle img-fluid w-75 square-cropped-image" />
      </div>
      <h2>{name}</h2>
      <p>{`${school} ${graduationYear}`}</p>
      <p>{role.toUpperCase()}</p>
      <button className="btn btn-primary" onClick={handleClick}>
        View Bio
      </button>
      {
        showModal && (
          <div className="modal show" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{name}</h5>
                  <button type="button" className="close" onClick={handleClose}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>{bio}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
};

// Teams page component
const Team = () => {
  // Sample data

  return (
    <div className="teams-page">
      <div className="text-center m-5">
        <h1>Our Team</h1>
      </div>
      <div className="row">
        {teamMembers.map((member, index) => (
          <Profile
            key={index}
            name={member.name}
            school={member.school}
            graduationYear={member.graduationYear}
            profilePic={member.profilePic}
            bio={member.bio}
            role={member.role}
          />
        ))}
      </div>
    </div >
  );
};

export default Team;
