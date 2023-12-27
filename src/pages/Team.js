import React, { useState } from 'react';
import teamMembers from './teamMembers';
import '../styles.css'

const teams = ['presidents', 'outreach & events', 'math', 'engineering', 'computer science', 'science'];

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
    <div className="text-center" style={{ width: "25em", display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: "2rem" }}>
      <img src={profilePic} alt="Profile" className="rounded-circle img-fluid square-cropped-image" style={{ width: "15rem", borderWidth:"7px", borderStyle:"solid", borderColor:"#67aeda"}} />
      <h3>{name}</h3>
      <p>{`${school} ${graduationYear}`}</p>
      <p>{role.toUpperCase()}</p>
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <button className="btn btn-primary" onClick={handleClick} style={{ width: "fit-content" }}>
          View Bio
        </button></div>
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
    <div className="teams-page" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "5rem", marginBottom: "10rem", maxWidth: "150rem" }}>
      <div className="text-center">
        <h1>Our Team</h1>
      </div>
      <div>
        {teams.map((team) => {
          return (<div style={{ margin: "auto", width: "fit-content" }}>
            <h2 className='text-center p-3' style={{ marginTop: "7rem", marginBottom: "2rem", textTransform: "capitalize", rTopWidth: "0px"}}>{team} <span>{team === "presidents" ? "" : "Team"}</span></h2>
            <div className="row" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", margin: "auto" }}>
              {
                teamMembers.map((member, index) => {
                  if (team === member.team) {
                    return (<Profile
                      key={index}
                      name={member.name}
                      school={member.school}
                      graduationYear={member.graduationYear}
                      profilePic={member.profilePic}
                      bio={member.bio}
                      role={member.role}
                    />);
                  }
                })
              }
            </div>
          </div>);
        })}
      </div>
    </div >
  );
};

export default Team;
