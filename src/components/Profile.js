import React, { useState, useEffect } from "react";
import { getPersonal } from "../api/personalApi";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getPersonal().then(_personal => setProfile(_personal));
  }, []);

  return (
    <div id="profile">
      <h3>Profile</h3>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-6 title">First name</div>
        <div className="col-md-11 col-sm-10 col-xs-6">{profile.firstname}</div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-6 title">Last Name</div>
        <div className="col-md-11 col-sm-10 col-xs-6">{profile.lastname}</div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-6 title">Residence</div>
        <div className="col-md-11 col-sm-10 col-xs-6">{profile.residence}</div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-6 title">Nationality</div>
        <div className="col-md-11 col-sm-10 col-xs-6">
          {profile.nationality}
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-6 title">E-Mail</div>
        <div className="col-md-11 col-sm-10 col-xs-6">{profile.email}</div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-6 title">Birthdate</div>
        <div className="col-md-11 col-sm-10 col-xs-6">{profile.birthdate}</div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-6 title">Place of birth</div>
        <div className="col-md-11 col-sm-10 col-xs-6">
          {profile.place_of_birth}
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-6 title">Family state</div>
        <div className="col-md-11 col-sm-10 col-xs-6">
          {profile.family_state}
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-6 title">Children</div>
        <div className="col-md-11 col-sm-10 col-xs-6">{profile.children}</div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-6 title">Experienced</div>
        <div className="col-md-11 col-sm-10 col-xs-6">
          {profile.experienced}
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-12 title">Languages</div>
        <div className="col-md-11 col-sm-10 col-xs-12" />
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-6 title">Availability</div>
        <div className="col-md-11 col-sm-10 col-xs-6">
          {profile.availability}
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-6 title">Recognitions</div>
        <div className="col-md-11 col-sm-10 col-xs-6">
          {profile.recognitions}
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-12 title">Summary</div>
        <div className="col-md-11 col-sm-10 col-xs-12">
          {profile.profile_summary}
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-12 title">
          Professional Skills Interests
        </div>
        <div className="col-md-11 col-sm-10 col-xs-12">
          {profile.professional_skills_interests}
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-12 title">
          Relevant Education
        </div>
        <div className="col-md-11 col-sm-10 col-xs-12" />
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-2 col-xs-12 title">Other Education</div>
        <div className="col-md-11 col-sm-10 col-xs-12">
          {profile.other_education}
        </div>
      </div>
    </div>
  );
}

export default Profile;
