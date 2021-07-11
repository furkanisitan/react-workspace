import * as yup from 'yup';

const validationSchema = yup.object().shape({
    // fullName: yup.string().required()
    // email: yup.string().email().required(),
    // password: yup.string().min(4).required(),
    // rePassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match.').required(),
    //gender: yup.string().oneOf(['male', 'female']).required()
    // city: yup.string().oneOf(['City 1', 'City 2', 'City 3']).required(),
    // dateOfBirth: yup.date().max(new Date()).required(),
    // isAgreed: yup.boolean().required()
});

export default validationSchema;
