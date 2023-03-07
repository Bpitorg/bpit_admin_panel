import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { ADD_STUDENT_URL, BRANCH_URL, COURSE_URL } from "../../../constants/api_endpoints";
import http_lib from "../../../http/http";
import { signUpSchema } from "../../../schemas/signupSchema";
import "../style.css";
import { AttachFile, CloudUpload } from "@mui/icons-material";
import BulkUploadNote from "../../BulkUploadNote/BulkUploadNote";
import { useNavigate } from "react-router-dom";

const styles = {
  input: {
    display: "none",
  },
  button: {
    margin: "8px",
  },
};

const initialValues = {
  enrollment_number: "",
  name: "",
  section: "",
  batch: "",
  class_roll_number: "",
  student_group: "",
  student_phone_number: "",
  student_email_id: "",
  mother_name: "",
  father_name: "",
  parent_phone_number: "",
  branch: "",
  course: "",
  file: "",
  fileUploadInput: "",
};

const AddStudent = () => {
  const { values, errors, handleBlur, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,

  });
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    http_lib
      .post(ADD_STUDENT_URL, values)
      .then(() => {
        navigate("/home/students");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    console.log(values)
  }
  const [courseList, setCourseList] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [filesToUpload, setFilesToUpload] = useState([]);

  useEffect(() => {
    http_lib
      .get(COURSE_URL)
      .then((res) => {
        const courseData = res.data;
        setCourseList(courseData);
      })
      .catch((err) => console.log(err));
    http_lib
      .get(BRANCH_URL)
      .then((res) => {
        const branchData = res.data;
        setBranchList(branchData);
      })
      .catch((err) => console.log(err));
  }, []);
  
const handleFormChange = (event) => {
  setFilesToUpload(event.target.files[0]);
  console.log(filesToUpload);
};
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* COURSE */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Course</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="course"
            label="Course"
            value={values.course}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            {courseList &&
              courseList.map((course) => (
                <MenuItem value={course.course_name} key={course.course_name}>
                  {course.course_name}
                </MenuItem>
              ))}
          </Select>
          <p className="errorText">{errors.course}</p>
        </FormControl>
      </div>
      <br />
      <div className="row">
        {/* NAME */}
        <FormControl fullWidth>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Student's Name"
            name="name"
            variant="outlined"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <p className="errorText">{errors.name}</p>
        </FormControl>
        {/* ENROLLMENT NUMBER */}
        <FormControl fullWidth>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enrollment Number"
            name="enrollment_number"
            variant="outlined"
            value={values.enrollment_number}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <p className="errorText">{errors.enrollment_number}</p>
        </FormControl>
        {/* CLASS ROLL NUMBER */}
        <FormControl fullWidth>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Class Roll Number"
            name="class_roll_number"
            variant="outlined"
            value={values.class_roll_number}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <p className="errorText">{errors.class_roll_number}</p>
        </FormControl>
      </div>
      <br />
      <div className="row">
        {/* BATCH */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Batch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="batch"
            id="demo-simple-select"
            label="Batch"
            value={values.batch}
            onBlur={handleBlur}
            onChange={handleChange}
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
          <p className="errorText">{errors.batch}</p>
        </FormControl>
        {/* BRANCH */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Branch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="branch"
            label="Branch"
            value={values.branch}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            {branchList &&
              branchList.map((branch) => (
                <MenuItem value={branch.branch_slug} key={branch.branch_slug}>
                  {branch.branch_slug}
                </MenuItem>
              ))}
          </Select>
          <p className="errorText">{errors.branch}</p>
        </FormControl>
        {/* SECTION */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Section</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="section"
            label="Section"
            value={values.section}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            <MenuItem value={"A"}>A</MenuItem>
            <MenuItem value={"B"}>B</MenuItem>
            <MenuItem value={"C"}>C</MenuItem>
          </Select>
          <p className="errorText">{errors.section}</p>
        </FormControl>
        {/* student_group */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">student_group</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="student_group"
            label="Student's Group"
            value={values.student_group}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            <MenuItem value={"G1"}>G1</MenuItem>
            <MenuItem value={"G2"}>G2</MenuItem>
          </Select>
          <p className="errorText">{errors.student_group}</p>
        </FormControl>
      </div>
      <br />
      <div className="row">
        {/* MOTHER'S NAME */}
        <FormControl fullWidth>
          <TextField
            fullWidth
            id="outlined-basic"
            name="mother_name"
            label="Mother's Name"
            variant="outlined"
            value={values.mother_name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <p className="errorText">{errors.mother_name}</p>
        </FormControl>
        {/* FATHER'S NAME */}
        <FormControl fullWidth>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Father's Name"
            name="father_name"
            value={values.father_name}
            onBlur={handleBlur}
            onChange={handleChange}
            variant="outlined"
          />
          <p className="errorText">{errors.father_name}</p>
        </FormControl>
      </div>
      <br />
      {/* STUDENT'S PHONE NUMBER */}
      <div className="row">
        <FormControl fullWidth>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Student's Phone Number"
            name="student_phone_number"
            variant="outlined"
            value={values.student_phone_number}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <p className="errorText">{errors.student_phone_number}</p>
        </FormControl>
        {/* student_email_id ID */}
        <FormControl fullWidth>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Student's Email Id"
            name="student_email_id"
            variant="outlined"
            value={values.student_email_id}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <p className="errorText">{errors.student_email_id}</p>
        </FormControl>
        {/* PARENT'S PHONE NUMBER */}
        <FormControl fullWidth>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Parents Phone Number"
            name="parent_phone_number"
            variant="outlined"
            value={values.parent_phone_number}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <p className="errorText">{errors.parent_phone_number}</p>
        </FormControl>
      </div>
      <br />
      <Button
        sx={{ margin: "1rem", width: "10rem" }}
        variant="contained"
        color="success"
        name="submitButton"
        type="submit"
        onClick={handleSubmit}
      >
        SUBMIT
      </Button>
      <div style={{ margin: "1rem", background: "red" }}>{}</div>
      <div style={{ margin: "1rem", background: "green" }}>{}</div>
      <Divider orientation="horizontal" flexItem>
        OR, UPLOAD FILES
      </Divider>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "rgba(25, 118, 210, 0.26)",
        }}
      >
        <div style={{ width: "50%" , margin:"1rem"}}>
          <input
            accept=".xls,.xlsx"
            style={styles.input}
            id="contained-button-file"
            multiple={false}
            type="file"
            onChange={handleFormChange}
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="outlined"
              color="primary"
              component="span"
              startIcon={<AttachFile />}
              style={styles.button}
            >
              Select Excel File
            </Button>
          </label>
          <br />
          {filesToUpload.name != null && (
            <div>
              <div style={{ marginLeft: "1rem" }}>
                <h3>Selected File:</h3>
                <p>{filesToUpload.name}</p>
              </div>

              <Button
                variant="contained"
                color="success"
                component="span"
                startIcon={<CloudUpload />}
                style={styles.button}
                onClick={() => console.log(filesToUpload)}
              >
                Upload
              </Button>
            </div>
          )}
          {!filesToUpload.name && (
            <Button
              variant="outlined"
              color="success"
              component="span"
              startIcon={<CloudUpload />}
              style={styles.button}
              onClick={() => alert("Please Select a file first!")}
            >
              Upload
            </Button>
          )}
        </div>
        <BulkUploadNote />
      </div>
    </form>
  );
};

export default AddStudent;
