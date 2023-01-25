import React,{useState} from 'react'
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/user_elections.css';

function UserElectionsData(props) {
    return (
      <div>
        <>
        {/* <Sidebar title="Admin"/> */}
    
      <div className="card-container">
        <div className="card">
          <div className="content">
            <h2>{props.id}</h2>
            <h3>Election</h3>
            <p>
              <ul >
                  <li>Type : {props.type}</li>
                  <li>Organizer : {props.organizer}</li>
                  <li>Start Date : {props.startDate}</li>
                  <li>End Date : {props.endDate}</li>
                  <li>Start Time : {props.startTime}</li>
                  <li>End Time : {props.endTime}</li>
              </ul>
              
            </p>
            <Link to="/user/voting-area">Cast Your Vote</Link>
          </div>
        </div>
        
      </div>
    
  </>
  
      </div>
    )
  }

  export default UserElectionsData
