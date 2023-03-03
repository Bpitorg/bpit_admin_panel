import { Button, Divider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileUpload from "react-mui-fileuploader";
import { FACULTY_URL } from "../../../constants/api_endpoints";
import http_lib from "../../../http/http";
import "../style.css";

const AddFaculty = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [designation, setDesignation] = useState("");
  const [date_joined, setDate_joined] = useState("");
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");
  const data = {
    id,
    name,
    email,
    designation,
    date_joined,
    phone_number,
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      id == null ||
      name == null ||
      email == null ||
      designation == null ||
      date_joined == null ||
      phone_number == null
    ) {
      setErrorText("One or more fields empty. Please check all the fields.");
      setTimeout(() => {
        setErrorText("");
      }, 3000);
      return;
    } else {
      console.log(data);
      setId("");
      setName("");
      setEmail("");
      setDesignation("");
      setDate_joined("");
      setPhone_number("");
      setSuccessText("Student Added Successfully!");
      setTimeout(() => {
        setSuccessText("");
      }, 3000);
    }
  };


  const [filesToUpload, setFilesToUpload] = useState([]);

  const handleFilesChange = (files) => {
    // Update chosen files
    setFilesToUpload([...files]);
  };

  const uploadFiles = () => {
    // Create a form and post it to server
    let formData = new FormData();
    filesToUpload.forEach((file) => formData.append("files", file));
    //POST 
    
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="row">
        {/* NAME */}
        <TextField
          fullWidth
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* ID */}
        <TextField
          fullWidth
          id="outlined-basic"
          label="ID"
          variant="outlined"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <br />
      <div className="row">
        {/* EMAIL */}
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* PHONE NUMBER */}
        <TextField
          fullWidth
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
          value={phone_number}
          onChange={(e) => setPhone_number(e.target.value)}
        />
      </div>
      <br />
      <div className="row">
        {/* DESIGNATION */}
        <TextField
          fullWidth
          id="outlined-basic"
          label="Designation"
          variant="outlined"
          value={date_joined}
          onChange={(e) => setDesignation(e.target.value)}
        />
        {/* DATE JOINED  */}
        <TextField
          fullWidth
          id="outlined-basic"
          label="Date Joined"
          variant="outlined"
          value={date_joined}
          onChange={(e) => setDate_joined(e.target.value)}
        />
      </div>
      <br />
      <div></div>
      <br />
      <Button
        sx={{ margin: "1rem", width: "10rem" }}
        variant="contained"
        color="success"
        type="submit"
      >
        SUBMIT
      </Button>
      <div style={{ margin: "1rem", background: "red" }}>{errorText}</div>
      <div style={{ margin: "1rem", background: "green" }}>{successText}</div>
      <Divider orientation="horizontal" flexItem>
        OR, UPLOAD FILES
      </Divider>
      <FileUpload
        multiFile={true}
        onFilesChange={handleFilesChange}
        onContextReady={(context) => {}}
        title="Upload data in bulk"
      />
      <Button
        sx={{ margin: "1rem", width: "10rem" }}
        variant="contained"
        color="success"
        type="submit"
        onClick={uploadFiles}
      >
        UPLOAD
      </Button>
    </form>
  );
};

export default AddFaculty;
