import * as Yup from "yup";

export const signUpSchema = Yup.object({
  enrollment_number: Yup.number()
    .min(3)
    .required("Please enter the Enrollment Number!"),
  name: Yup.string().min(2).max(25).required("Please enter the Name!"),
  section: Yup.string().required("Please select the Section!"),
  batch: Yup.string().required("Please select the Batch!"),
  class_roll_number: Yup.string()
    .min(3)
    .required("Please enter the Class Roll Number!"),
  student_group: Yup.string().required("Please select the Student's Group!"),
  studentPhoneNumber: Yup.number()
    .min(10)
    .required("Please enter the Student's Phone Number!"),
  student_email_id: Yup.string().email().required("Please enter the Email!"),
  mother_name: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter the Mother's name!"),
  father_name: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter the Father's name!"),

  parent_phone_number: Yup.number()
    .min(10)
    .required("Please enter the Parent's Phone Number!"),
  branch: Yup.string().required("Please select the Branch!"),
  course: Yup.string().required("Please select the Course!"),
  file: Yup.mixed()
    .required("Please select a file")
    .test(
      "fileFormat",
      "Invalid file format",
      (value) =>
        value &&
        [
          "application/vnd.ms-excel",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        ].includes(value.type)
    ),
});
