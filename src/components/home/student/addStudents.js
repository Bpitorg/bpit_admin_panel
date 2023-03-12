import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AddStudentSchema, StudentInitialValues } from '../../../schemas/addStudentSchema';
import { ClassSections, CourseList, StudentGroups } from '../../../constants/constants';
import { GetYearList } from '../../../utils/utils';
import FileUploader from '../../common/file_uploader/fileUploader';
import { ADD_STUDENT_URL, BRANCH_URL } from "../../../constants/apiEndpoints";
import http_lib from '../../../http/http';
import { useNavigate } from 'react-router-dom';

function AddStudents({ setLoader }) {
  const navigate = useNavigate()
  const [branchList, setBranchList] = useState([]);
  const [error, setError] = useState('')

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
    initialValues: StudentInitialValues,
    validationSchema: AddStudentSchema,
    onSubmit: ({ course, name, enrollment_number, class_roll_number, batch, branch, section, student_group, mother_name, father_name, student_phone_number, student_email_id, parent_phone_number }) => {
      setLoader(true)
      const data = {
        is_file: false,
        student_data: [
          { enrollment_number, name, section, batch, class_roll_number, student_group, student_phone_number, student_email_id, mother_name, father_name, parent_phone_number, branch, course, },
        ],
      }
      http_lib.post(ADD_STUDENT_URL, data)
        .then(() => {
          setLoader(false)
          navigate("/home/students");
        })
        .catch((err) => {
          console.log(err)
          setError(JSON.stringify(err.response.data))
          setLoader(false)
        });
    }
  })

  useEffect(() => {
    // Get Branch List
    setLoader(true);
    http_lib
      .get(BRANCH_URL)
      .then((res) => {
        setBranchList(res.data);
        setLoader(false)
      })
      .catch((err) => {
        console.log(err)
        setLoader(false)
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Grid container spacing={2} component='form' noValidate onSubmit={(e) => handleSubmit(e)}>

        {/* row 1 */}
        <Grid item xs={12}>
          <FormControl fullWidth
            error={touched.course && errors.course !== undefined}
          >
            <InputLabel required id="course-label">Course</InputLabel>
            <Select
              labelId="course-label"
              id="course-label"
              name="course"
              label="Course"
              value={values.course}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {
                CourseList.map((course, key) => (
                  <MenuItem value={course.id} key={key}>
                    {`${course.course_name} (${course.course_slug})`}
                  </MenuItem>
                ))
              }
            </Select>
            <FormHelperText>{errors.course !== undefined ? errors.course : null}</FormHelperText>
          </FormControl>
        </Grid>

        {/* row 2 */}
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Student Name"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            error={touched.name && errors.name !== undefined}
            helperText={touched.name && errors.name !== undefined ? errors.name : ''}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Enrollment Number"
            name="enrollment_number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.enrollment_number}
            error={touched.enrollment_number && errors.enrollment_number !== undefined}
            helperText={touched.enrollment_number && errors.enrollment_number !== undefined ? errors.enrollment_number : ''}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Class Roll Number"
            name="class_roll_number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.class_roll_number}
            error={touched.class_roll_number && errors.class_roll_number !== undefined}
            helperText={touched.class_roll_number && errors.class_roll_number !== undefined ? errors.class_roll_number : ''}
          />
        </Grid>

        {/* row 3 */}
        <Grid item xs={3}>
          <FormControl fullWidth
            error={touched.batch && errors.batch !== undefined}
          >
            <InputLabel required id="batch-label">Batch</InputLabel>
            <Select
              labelId="batch-label"
              name="batch"
              label="Batch"
              value={values.batch}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {
                GetYearList().map((year, key) => (
                  <MenuItem value={year} key={key}>
                    {year}
                  </MenuItem>
                ))
              }
            </Select>
            <FormHelperText>{touched.batch && errors.batch !== undefined ? errors.batch : null}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth
            error={touched.branch && errors.branch !== undefined}
          >
            <InputLabel required id="branch-label">Branch</InputLabel>
            <Select
              labelId="branch-label"
              name="branch"
              label="Branch"
              value={values.branch}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {
                branchList.map((branch, key) => (
                  <MenuItem value={branch['branch_code']} key={key}>
                    {`${branch['branch_name']} ( ${branch['branch_slug']} )`}
                  </MenuItem>
                ))
              }
            </Select>
            <FormHelperText>{touched.branch && errors.branch !== undefined ? errors.branch : null}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth
            error={touched.section && errors.section !== undefined}
          >
            <InputLabel required id="section-label">Section</InputLabel>
            <Select
              labelId="section-label"
              name="section"
              label="Section"
              value={values.section}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {
                ClassSections.map((section, key) => (
                  <MenuItem value={section} key={key}>
                    {section}
                  </MenuItem>
                ))
              }
            </Select>
            <FormHelperText>{touched.section && errors.section !== undefined ? errors.section : null}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth
            error={touched.student_group && errors.student_group !== undefined}
          >
            <InputLabel required id="student-group-label">Student Group</InputLabel>
            <Select
              labelId="student-group-label"
              name="student_group"
              label="Student Group"
              value={values.student_group}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {
                StudentGroups.map((group, key) => (
                  <MenuItem value={group} key={key}>
                    {group}
                  </MenuItem>
                ))
              }
            </Select>
            <FormHelperText>{touched.student_group && errors.student_group !== undefined ? errors.student_group : null}</FormHelperText>
          </FormControl>
        </Grid>

        {/* row 4 */}
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Mother Name"
            name="mother_name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.mother_name}
            error={touched.mother_name && errors.mother_name !== undefined}
            helperText={touched.mother_name && errors.mother_name !== undefined ? errors.mother_name : ''}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Father Name"
            name="father_name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.father_name}
            error={touched.father_name && errors.father_name !== undefined}
            helperText={touched.father_name && errors.father_name !== undefined ? errors.father_name : ''}
          />
        </Grid>

        {/* row 5 */}
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Student Phone Number"
            name="student_phone_number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.student_phone_number}
            error={touched.student_phone_number && errors.student_phone_number !== undefined}
            helperText={touched.student_phone_number && errors.student_phone_number !== undefined ? errors.student_phone_number : ''}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Student Email Id"
            name="student_email_id"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.student_email_id}
            error={touched.student_email_id && errors.student_email_id !== undefined}
            helperText={touched.student_email_id && errors.student_email_id !== undefined ? errors.student_email_id : ''}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Parent Phone Number"
            name="parent_phone_number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.parent_phone_number}
            error={touched.parent_phone_number && errors.parent_phone_number !== undefined}
            helperText={touched.parent_phone_number && errors.parent_phone_number !== undefined ? errors.parent_phone_number : ''}
          />
        </Grid>

        <Grid item xs={12} display='flex' flexDirection='column' my={2}>
          <Button type='submit' variant='contained'>Submit</Button>
        </Grid>
        <Typography sx={{ color: "error.main" }}>{error}</Typography>


        <Grid item xs={12}>
          <Typography variant='h5' mb={4} align='center'>OR</Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <FileUploader
          setLoader={setLoader}
          sampleFileLink={process.env.PUBLIC_URL + "/upload_data_files/student_format.xlsx"}
          url={ADD_STUDENT_URL}
        />
      </Grid>
    </>
  )
}

export default AddStudents;