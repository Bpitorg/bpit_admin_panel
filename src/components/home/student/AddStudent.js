import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FileUpload from "react-mui-fileuploader";
import http_lib from "../../../http/http";
import "../style.css";

const AddStudent = () => {
  const [enrollment_number, setEnrollment_number] = useState("");
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [batch, setBatch] = useState("");
  const [class_roll_number, setClass_roll_number] = useState("");
  const [student_group, setStudent_group] = useState("");
  const [student_phone_number, setStudent_phone_number] = useState("");
  const [student_email_id, setStudent_email_id] = useState("");
  const [mother_name, setMother_name] = useState("");
  const [father_name, setFather_name] = useState("");
  const [parent_phone_number, setParent_phone_number] = useState("");
  const [branch, setBranch] = useState();
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");

  const data = {
    enrollment_number,
    name,
    section,
    batch,
    class_roll_number,
    student_group,
    student_phone_number,
    student_email_id,
    mother_name,
    father_name,
    parent_phone_number,
    branch,
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      enrollment_number == null ||
      name == null ||
      section == null ||
      batch == null ||
      class_roll_number == null ||
      student_group == null ||
      student_phone_number == null ||
      student_email_id == null ||
      mother_name == null ||
      father_name == null ||
      parent_phone_number == null ||
      branch == null
    ) {
      setErrorText("One or more fields empty. Please check all the fields.");
      setTimeout(() => {
        setErrorText("");
      }, 3000);
      return;
    } else {
      console.log(data);
      setEnrollment_number("");
      setName("");
      setSection("");
      setBatch("");
      setClass_roll_number("");
      setStudent_group("");
      setStudent_phone_number("");
      setStudent_email_id("");
      setMother_name("");
      setFather_name("");
      setParent_phone_number("");
      setBranch("");
      setSuccessText("Student Added Successfully!");
      setTimeout(() => {
        setSuccessText("");
      }, 3000);
    }
  };
  const config = {
    headers: {
      Authorization: "Token " + localStorage.getItem("token"),
    },
  };
 useEffect(() => {
   axios.get(`http://localhost:8000/api/faculty/subjects/`, config).then((res) => {
     const data = res.data;
     console.log(data);
   });
 }, []);
  const [filesToUpload, setFilesToUpload] = useState([]);

  const handleFilesChange = (files) => {
    // Update chosen files
    setFilesToUpload([...files]);
  };

  const uploadFiles = () => {
    // Create a form and post it to server
    let formData = new FormData();
    filesToUpload.forEach((file) => formData.append("files", file));

    fetch("/file/upload", {
      method: "POST",
      body: formData,
    });
  }
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
        {/* ENROLLMENT NUMBER */}
        <TextField
          fullWidth
          id="outlined-basic"
          label="Enrollment Number"
          variant="outlined"
          value={enrollment_number}
          onChange={(e) => setEnrollment_number(e.target.value)}
        />
        {/* CLASS ROLL NUMBER */}
        <TextField
          fullWidth
          id="outlined-basic"
          label="Class Roll Number"
          variant="outlined"
          value={class_roll_number}
          onChange={(e) => setClass_roll_number(e.target.value)}
        />
      </div>
      <br />
      <div className="row">
        {/* BATCH */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Batch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={batch}
            label="Batch"
            onChange={(e) => setBatch(e.target.value)}
          >
            <MenuItem value={"2020"}>2020</MenuItem>
            <MenuItem value={"2021"}>2021</MenuItem>
            <MenuItem value={"2022"}>2022</MenuItem>
            <MenuItem value={"2023"}>2023</MenuItem>
            <MenuItem value={"2024"}>2024</MenuItem>
            <MenuItem value={"2025"}>2025</MenuItem>
            <MenuItem value={"2026"}>2026</MenuItem>
            <MenuItem value={"2027"}>2027</MenuItem>
          </Select>
        </FormControl>
        {/* BRANCH */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Branch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={branch}
            label="Branch"
            onChange={(e) => setBranch(e.target.value)}
          >
            <MenuItem value={"CSE"}>CSE</MenuItem>
            <MenuItem value={"IT"}>IT</MenuItem>
            <MenuItem value={"ECE"}>ECE</MenuItem>
            <MenuItem value={"EEE"}>EEE</MenuItem>
            <MenuItem value={"AI"}>AI</MenuItem>
            <MenuItem value={"DS"}>DS</MenuItem>
          </Select>
        </FormControl>
        {/* SECTION */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Section</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={section}
            label="Section"
            onChange={(e) => setSection(e.target.value)}
          >
            <MenuItem value={"A"}>A</MenuItem>
            <MenuItem value={"B"}>B</MenuItem>
            <MenuItem value={"C"}>C</MenuItem>
          </Select>
        </FormControl>
        {/* GROUP */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Group</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={student_group}
            label="Group"
            onChange={(e) => setStudent_group(e.target.value)}
          >
            <MenuItem value={"G1"}>G1</MenuItem>
            <MenuItem value={"G2"}>G2</MenuItem>
          </Select>
        </FormControl>
      </div>
      <br />
      <div className="row">
        {/* MOTHER'S NAME */}
        <TextField
          fullWidth
          id="outlined-basic"
          label="Mother's Name"
          variant="outlined"
          value={mother_name}
          onChange={(e) => setMother_name(e.target.value)}
        />
        {/* FATHER'S NAME */}
        <TextField
          fullWidth
          id="outlined-basic"
          label="Father's Name"
          variant="outlined"
          value={father_name}
          onChange={(e) => setFather_name(e.target.value)}
        />
      </div>
      <br />
      {/* STUDENT'S PHONE NUMBER */}
      <div className="row">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Student's Phone Number"
          variant="outlined"
          value={student_phone_number}
          onChange={(e) => setStudent_phone_number(e.target.value)}
        />
        {/* EMAIL ID */}
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email Id"
          variant="outlined"
          value={student_email_id}
          onChange={(e) => setStudent_email_id(e.target.value)}
        />
        {/* PARENT'S PHONE NUMBER */}
        <TextField
          fullWidth
          id="outlined-basic"
          label="Parents Phone Number"
          variant="outlined"
          value={parent_phone_number}
          onChange={(e) => setParent_phone_number(e.target.value)}
        />
      </div>
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
        BannerProps={{ background: "black" }}
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

export default AddStudent;
