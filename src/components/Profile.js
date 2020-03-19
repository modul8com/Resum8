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
        <div className="col-sm-5 col-md-2 col-3 title">First name</div>
        <div className="col-sm-7 col-md-10 col-9">{profile.firstname}</div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-md-2 col-3 title">Last Name</div>
        <div className="col-sm-7 col-md-10 col-9">{profile.lastname}</div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-md-2 col-3 title">Residence</div>
        <div className="col-sm-7 col-md-10 col-9">{profile.residence}</div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-md-2 col-3 title">Nationality</div>
        <div className="col-sm-7 col-md-10 col-9">
          {profile.nationality}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-md-2 col-3 title">E-Mail</div>
        <div className="col-sm-7 col-md-10 col-9">{profile.email}</div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-md-2 col-3 title">Birthdate</div>
        <div className="col-sm-7 col-md-10 col-9">{profile.birthdate}</div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-md-2 col-3 title">Place of birth</div>
        <div className="col-sm-7 col-md-10 col-9">
          {profile.place_of_birth}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-md-2 col-3 title">Family state</div>
        <div className="col-sm-7 col-md-10 col-9">
          {profile.family_state}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-md-2 col-3 title">Children</div>
        <div className="col-sm-7 col-md-10 col-9">{profile.children}</div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-md-2 col-3 title">Experienced</div>
        <div className="col-sm-7 col-md-10 col-9">
          {profile.experienced}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-md-2 col-12 title">Languages</div>
        <div className="col-sm-7 col-md-10 col-12" />
      </div>
      <div className="row">
        <div className="col-sm-5 col-md-2 col-3 title">Availability</div>
        <div className="col-sm-7 col-md-10 col-9">
          {profile.availability}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-md-2 col-3 title">Recognitions</div>
        <div className="col-sm-7 col-md-10 col-9">
          {profile.recognitions}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-12 title">Summary</div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-12">
          {profile.profile_summary}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-12 title">
          Professional Skills Interests
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-12">
          {profile.professional_skills_interests}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-12 title">
          Relevant Education
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-12" />
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-12 title">Other Education</div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-12">
          {profile.other_education}
        </div>
      </div>
    </div>
  );
}

export default Profile;
