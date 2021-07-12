import FormikSemanticDropdown from 'components/FormikSemanticElements/FormikSemanticDropdown';
import {Formik} from 'formik';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Form} from 'semantic-ui-react';
import initialValues from './initial-values';
import validationSchema from './validation-schema';

// const genderRadioGroupOptions = [
//     {value: 'male', text: 'Male'},
//     {value: 'female', text: 'Female'}
// ];

const cityOptions = [
    {value: 55, text: 'Samsun'},
    {value: 34, text: 'İstanbul'},
    {value: 6, text: 'Ankara'},
    {value: 35, text: 'İzmir'}
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
                        {/*<FormikSemanticRadioGroup name="gender" label="Gender" options={genderRadioGroupOptions}/>*/}

                        <FormikSemanticDropdown name="city" options={cityOptions} label="City" placeholder="Select a city"/>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

        </Container>
    );
}

export default SemanticRegisterForm;
