import * as Yup from 'yup'

export const LoginSchema = Yup.object({
    email: Yup.string().required('Please enter your email'),
    password: Yup.string().required('Please enter your password')
})

export const LoginInitialValues = {
    email: '',
    password: ''
}