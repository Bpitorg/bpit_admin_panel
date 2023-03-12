import * as Yup from "yup";

export const AddStudentSchema = Yup.object({
  course: Yup.number("snk").required("Please select the Course!"),
  name: Yup.string().min(3).required("Please enter the Name!"),
  enrollment_number: Yup.string().min(11).max(11).required("Please enter the Enrollment Number!"),
  class_roll_number: Yup.number().required("Please enter the Class Roll Number!"),
  batch: Yup.string().min(4).max(4).required("Please select the Batch!"),
  branch: Yup.string().required("Please select the Branch!"),
  section: Yup.string().min(1).max(1).required("Please select the Section!"),
  student_group: Yup.string().required("Please select the Student's Group!"),
  mother_name: Yup.string().min(2).max(25).required("Please enter the Mother's name!"),
  father_name: Yup.string().min(2).max(25).required("Please enter the Father's name!"),
  student_phone_number: Yup.number().min(10).required("Please enter the Student's Phone Number!"),
  student_email_id: Yup.string().email().required("Please enter the Email!"),
  parent_phone_number: Yup.number().min(10).required("Please enter the Parent's Phone Number!"),
});

export const StudentInitialValues = {
  course: 3,
  name: '',
  enrollment_number: '',
  class_roll_number: '',
  batch: '',
  branch: '',
  section: '',
  student_group: '',
  mother_name: '',
  father_name: '',
  student_phone_number: '',
  student_email_id: '',
  parent_phone_number: ''
}