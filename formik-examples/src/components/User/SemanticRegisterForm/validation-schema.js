import * as yup from 'yup';

const validationSchema = yup.object().shape({
    // fullName: yup.string().required()
    // email: yup.string().email().required(),
    // password: yup.string().min(4).required(),
    // rePassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match.').required(),
    //gender: yup.string().oneOf(['male', 'female']).required()
    city: yup.number().required()
    // dateOfBirth: yup.date().max(new Date()).required(),
    // isAgreed: yup.boolean().required()
});

export default validationSchema;
