import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AddStudentSchema, StudentInitialValues } from '../../../schemas/addStudentSchema';
import { ClassSections, CourseList, StudentGroups } from '../../../constants/constants';
import { GetYearList } from '../../../utils/utils';
import FileUploader from '../../common/file_uploader/fileUploader';
import { ADD_STUDENT_URL } from "../../../constants/apiEndpoints";
// import http_lib from '../../../http/http';
// import { BRANCH_URL } from '../../../constants/apiEndpoints';

function AddStudents({ setLoader }) {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
    initialValues: StudentInitialValues,
    validationSchema: AddStudentSchema,
    onSubmit: ({ course, name, enrollment_number, class_roll_number, batch, branch, section, student_group, mother_name, father_name, student_phone_number, student_email_id, parent_phone_number }) => {
      console.log('ndjksn')
    },
  })

  // useEffect(() => {
  //   http_lib.get(BRANCH_URL).then(res => console.log(res))
  // }, [])

  return (
    <>
      <Grid container spacing={2} component='form' onSubmit={handleSubmit}>

        {/* row 1 */}
        <Grid item xs={12}>
          <FormControl fullWidth
            error={touched.course && errors.course}
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
            <FormHelperText>{errors.course}</FormHelperText>
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
            onChange={handleChange}
            value={values.name}
            error={touched.name && errors.name}
          // helperText={touched.name && errors.name ? errors.name : ''}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Enrollment Number"
            name="enrollment_number"
            onChange={handleChange}
            value={values.enrollment_number}
            error={touched.enrollment_number && errors.enrollment_number}
            helperText={touched.enrollment_number && errors.enrollment_number ? errors.enrollment_number : ''}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Class Roll Number"
            name="class_roll_number"
            onChange={handleChange}
            value={values.class_roll_number}
            error={touched.class_roll_number && errors.class_roll_number}
            helperText={touched.class_roll_number && errors.class_roll_number ? errors.class_roll_number : ''}
          />
        </Grid>

        {/* row 3 */}
        <Grid item xs={3}>
          <FormControl fullWidth
            error={touched.batch && errors.batch}
          >
            <InputLabel required id="course-label">Batch</InputLabel>
            <Select
              labelId="batch-label"
              id="batch-label"
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
            <FormHelperText>{errors.batch}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Enrollment Number"
            name="enrollment_number"
            onChange={handleChange}
            value={values.enrollment_number}
            error={touched.enrollment_number && errors.enrollment_number}
            helperText={touched.enrollment_number && errors.enrollment_number ? errors.enrollment_number : ''}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth
            error={touched.section && errors.section}
          >
            <InputLabel required id="student-group-label">Section</InputLabel>
            <Select
              labelId="section-label"
              id="section-label"
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
            <FormHelperText>{errors.section}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth
            error={touched.student_group && errors.student_group}
          >
            <InputLabel required id="student-group-label">Student Group</InputLabel>
            <Select
              labelId="student-group-label"
              id="batch-label"
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
            <FormHelperText>{errors.student_group}</FormHelperText>
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
            onChange={handleChange}
            value={values.mother_name}
            error={touched.mother_name && errors.mother_name}
            helperText={touched.mother_name && errors.mother_name ? errors.mother_name : ''}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Father Name"
            name="father_name"
            onChange={handleChange}
            value={values.father_name}
            error={touched.father_name && errors.father_name}
            helperText={touched.father_name && errors.father_name ? errors.father_name : ''}
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
            onChange={handleChange}
            value={values.student_phone_number}
            error={touched.student_phone_number && errors.student_phone_number}
            helperText={touched.student_phone_number && errors.student_phone_number ? errors.student_phone_number : ''}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Student Email Id"
            name="student_email_id"
            onChange={handleChange}
            value={values.student_email_id}
            error={touched.student_email_id && errors.student_email_id}
            helperText={touched.student_email_id && errors.student_email_id ? errors.student_email_id : ''}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Parent Phone Number"
            name="parent_phone_number"
            onChange={handleChange}
            value={values.parent_phone_number}
            error={touched.class_roll_number && errors.parent_phone_number}
            helperText={touched.parent_phone_number && errors.parent_phone_number ? errors.parent_phone_number : ''}
          />
        </Grid>

        <Grid item xs={12} display='flex' flexDirection='column' my={2}>
          <Button variant='contained'>Submit</Button>
        </Grid>

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