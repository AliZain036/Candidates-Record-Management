// import { Button } from "@material-ui/core";
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CandidateProfile.css";

function CandidateProfile() {
  const [candidate, setCandidate] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_API_URL}/candidates/${id}`)
      .then((res) => res.json())
      .then((jsonRes) => setCandidate(jsonRes));
  }, [id]);

  console.log(id);

  const deleteCandidate = () => {
    fetch(`${process.env.REACT_APP_BASE_API_URL}/candidates/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="candidate_profile">
      <h1>Candidate Profile</h1>
      <hr></hr>
      <div className="flex">
        <h4>Name:</h4>
        <h4>{candidate.name}</h4>
      </div>
      <div className="flex">
        <h4>Email:</h4>
        <h4>{candidate.email}</h4>
      </div>
      <div className="flex">
        <h4>Experience:</h4>
        <h4>{candidate.experience + ' Years'}</h4>
      </div>
      <Link to={`/candidates/update/${id}`}>
        <Button variant="contained" color="primary">
          Update
        </Button>
      </Link>
      <Link to="/candidates">
        <Button onClick={deleteCandidate} variant="contained" color="secondary">
          Delete
        </Button>
      </Link>
    </div>
  );
}

export default CandidateProfile;
