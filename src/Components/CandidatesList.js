import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Candidate from "./Candidate";
import './CandidatesList.css';

function CandidatesList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_API_URL}/candidates`)
      .then((res) => res.json())
      .then((jsonRes) => setCandidates(jsonRes))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="candidates_list">
      <h1>List of Candidates</h1>
      <Link to="/candidates/add">
        <Button type="submit" variant="contained" color="primary">
          Add New Candidate
        </Button>
      </Link>
      <hr></hr>
      
      <ul>
        {candidates.map((candidate) => (
          <Candidate key={candidate.id} candidate={candidate} />
        ))}
      </ul>
    </div>
  );
}

export default CandidatesList;
