import { Button, TextField } from "@material-ui/core";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./UpdateCandidate.css";

function UpdateCandidate() {
  const [candidate, setCandidate] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_API_URL}/candidates/${id}`)
      .then((res) => res.json())
      .then((jsonRes) => setCandidate(jsonRes));
  }, [id]);

  return (
    <div className="update_candidate">
      <h1>Update Candidate</h1>
      <hr></hr>
      <Formik
        initialValues={{
          name: "",
          email: "",
          experience: "",
        }}
        onSubmit={(values) => {
          fetch(`${process.env.REACT_APP_BASE_API_URL}/candidates/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
          console.log("submitted values", values);
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex">
              <label>Name</label>
              <TextField
                id="name"
                name="name"
                value={values.name}
                placeholder={candidate.name}
                onChange={handleChange}
                variant="filled"
                size="small"
              />
            </div>
            <div className="flex">
              <label>Email</label>
              <TextField
                id="email"
                name="email"
                value={values.email}
                placeholder={candidate.email}
                onChange={handleChange}
                variant="filled"
                size="small"
              />
            </div>
            <div className="flex">
              <label>Experience</label>
              <TextField
                id="experience"
                name="experience"
                value={values.experience}
                placeholder={candidate.experience}
                onChange={handleChange}
                variant="filled"
                size="small"
              />
            </div>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UpdateCandidate;
