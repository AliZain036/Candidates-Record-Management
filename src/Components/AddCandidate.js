import { Button, TextField } from "@material-ui/core";
import React from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import "./AddCandidate.css";

function AddCandidate() {

  return (
    <div className="add_candidate">
      <h1> Add Candidate</h1>
      <hr></hr>
      <Formik
        initialValues={{
          name: "",
          email: "",
          experience: "",
        }}
        onSubmit={(values) => {
          fetch(`${process.env.REACT_APP_BASE_API_URL}/candidates`, {
            method: "POST",
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
        }
      }
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex">
              <label>Name</label>
              <TextField
                id="name"
                name="name"
                value={values.name}
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
                onChange={handleChange}
                variant="filled"
                size="small"
              />
            </div>
              <Button type="submit" variant="contained" color="primary">
                Add
              </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddCandidate;
