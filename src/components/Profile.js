import React, { useState, useEffect } from 'react';
import { getPersonal } from '../api/personalApi';
import './Profile.css'

function Profile() {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        getPersonal().then(_personal => setProfile(_personal));
    }, []);
    
    return (
        <div id="profile">
            <h3>Profile</h3>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">First name</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.firstname}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Last Name</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.lastname}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Residence</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.residence}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Nationality</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.nationality}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">E-Mail</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.email}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Birthdate</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.birthdate}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Place of birth</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.place_of_birth}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Family state</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.family_state}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Children</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.children}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Experienced</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.experienced}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Languages</div>
                <div className="col-md-11 col-sm-10 col-xs-12">
                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Availability</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.availability}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Recognitions</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.recognitions}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Summary</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.profile_summary}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Professional Skills Interests</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.professional_skills_interests}</div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Relevant Education</div>
                <div className="col-md-11 col-sm-10 col-xs-12">
                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-12">Other Education</div>
                <div className="col-md-11 col-sm-10 col-xs-12">{profile.other_education}</div>
            </div>
        </div>
    );
}

export default Profile;