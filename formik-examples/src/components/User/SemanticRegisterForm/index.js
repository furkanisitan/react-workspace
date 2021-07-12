import FormikSemanticRadioGroup from 'components/FormikSemanticElements/FormikSemanticRadioGroup';
import {Formik} from 'formik';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Form} from 'semantic-ui-react';
import initialValues from './initial-values';
import validationSchema from './validation-schema';

const genderRadioGroupOptions = [
    {value: 'male', text: 'Male'},
    {value: 'female', text: 'Female'}
];

function SemanticRegisterForm() {

    return (
        <Container>

            <h1>Register</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(JSON.stringify(values));
                }}
            >
                {({handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>

                        {/*<FormikSemanticInput name="fullName" label="Full Name" placeholder="Jane Doe"/>*/}
                        {/*<FormikSemanticInput name="email" label="Email" placeholder="jane@acme.com" type="email"/>*/}
                        {/*<FormikSemanticInput name="password" label="Password" placeholder="****" type="password"/>*/}
                        {/*<FormikSemanticInput name="rePassword" label="Confirm Password" placeholder="****" type="password"/>*/}

                        <FormikSemanticRadioGroup name="gender" label="Gender" options={genderRadioGroupOptions}/>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

        </Container>
    );
}

export default SemanticRegisterForm;
