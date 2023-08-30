import React from 'react';
import "./ProfileCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ProfileCard({ name, specialization, experience, location, imagesrc, idnumber, fullDetail }) {
  return (
    <div className="col-lg-3 pe-0 width">
      <div className="cards m-b-30">
        <div className="media">
          <div className="mt-0 d-inline-block">
            <div className=" mt-0">
              <img className="img-fluid rounded thumb-lg ms-0 me-0" src={imagesrc} alt="" />
            </div>
            <div className="d-inline expert-name d-flex mt-3"><h6 className="mt-0 font-18 mb-1 d-flex">{name}</h6></div>
          </div>
          <div className="media-body custom-block-info pt-0 mt-1">
            <div className="d-flex">
              <a href="/New folder/FormDetailsPage" className="id-fulldetails">
                <small className="small-name">{idnumber}</small>
              </a>
            </div>
            <div className="d-flex">
              <small className="mt-2">{specialization}</small>
            </div>
            <div className="d-flex">
              <small className="small-name1 mt-2">{experience}</small>
            </div>
            <div className="d-flex">
              <small className="small-name2 mt-2">{location}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
