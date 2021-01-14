import React from "react";

// import Candidate from "./Components/Candidate";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import CandidatesList from "./Components/CandidatesList";
import CandidateProfile from "./Components/CandidateProfile";
import AddCandidate from "./Components/AddCandidate";
import UpdateCandidate from "./Components/UpdateCandidate";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/candidates" component={CandidatesList} exact />
        <Route path="/candidates/add" component={AddCandidate} exact />
        <Route path="/candidates/update/:id" component={UpdateCandidate} exact />
        <Route path="/candidates/:id" component={CandidateProfile} exact />
        <Redirect from="/" to="/candidates" />
      </Switch>
    </div>
  );
}

export default App;
