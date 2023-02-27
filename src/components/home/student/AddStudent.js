import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-router-dom";

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

  return (
    <form onSubmit={formSubmitHandler}>
      {/* NAME */}

      <TextField
        style={{ margin: "1rem" }}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* ENROLLMENT NUMBER */}

      <TextField
        style={{ margin: "1rem" }}
        id="outlined-basic"
        label="Enrollment Number"
        variant="outlined"
        value={enrollment_number}
        onChange={(e) => setEnrollment_number(e.target.value)}
      />

      {/* CLASS ROLL NUMBER */}

      <TextField
        style={{ margin: "1rem" }}
        id="outlined-basic"
        label="Class Roll Number"
        variant="outlined"
        value={class_roll_number}
        onChange={(e) => setClass_roll_number(e.target.value)}
      />
      <br />

      {/* BATCH */}

      <FormControl sx={{ margin: "1rem", minWidth: "8rem" }}>
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

      <FormControl sx={{ margin: "1rem", minWidth: "8rem" }}>
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

      <FormControl sx={{ margin: "1rem", minWidth: "8rem" }}>
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

      <FormControl sx={{ margin: "1rem", minWidth: "8rem" }}>
        <InputLabel id="demo-simple-select-label">Group</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={student_group}
          label="Group"
          onChange={(e) => setStudent_group(e.target.value)}
        >
          <MenuItem value={"G2"}>G1</MenuItem>
          <MenuItem value={"G1"}>G2</MenuItem>
        </Select>
      </FormControl>
      <br />

      {/* MOTHER'S NAME */}

      <TextField
        style={{ margin: "1rem" }}
        id="outlined-basic"
        label="Mother's Name"
        variant="outlined"
        value={mother_name}
        onChange={(e) => setMother_name(e.target.value)}
      />

      {/* FATHER'S NAME */}

      <TextField
        style={{ margin: "1rem" }}
        id="outlined-basic"
        label="Father's Name"
        variant="outlined"
        value={father_name}
        onChange={(e) => setFather_name(e.target.value)}
      />
      <br />

      {/* STUDENT'S PHONE NUMBER */}

      <TextField
        style={{ margin: "1rem" }}
        id="outlined-basic"
        label="Student's Phone Number"
        variant="outlined"
        value={student_phone_number}
        onChange={(e) => setStudent_phone_number(e.target.value)}
      />

      {/* EMAIL ID */}

      <TextField
        style={{ margin: "1rem" }}
        id="outlined-basic"
        label="Email Id"
        variant="outlined"
        value={student_email_id}
        onChange={(e) => setStudent_email_id(e.target.value)}
      />

      {/* PARENT'S PHONE NUMBER */}

      <TextField
        style={{ margin: "1rem" }}
        id="outlined-basic"
        label="Parents Phone Number"
        variant="outlined"
        value={parent_phone_number}
        onChange={(e) => setParent_phone_number(e.target.value)}
      />
      <br />
      <Button
        sx={{ margin: "1rem", width: "10rem" }}
        variant="contained"
        color="secondary"
        type="submit"
      >
        SUBMIT
      </Button>
      <div style={{ margin: "1rem", background: "red" }}>{errorText}</div>
      <div style={{ margin: "1rem", background: "green" }}>{successText}</div>
    </form>
  );
};

export default AddStudent;
