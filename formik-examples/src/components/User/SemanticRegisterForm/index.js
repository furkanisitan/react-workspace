import {
    FormikSemanticCheckbox,
    FormikSemanticDropdown,
    FormikSemanticInput,
    FormikSemanticRadioGroup
} from 'components/FormikSemanticElements';
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

const cityOptions = [
    {value: 55, text: 'Samsun'},
    {value: 34, text: 'İstanbul'},
    {value: 6, text: 'Ankara'},
    {value: 35, text: 'İzmir'}
];

function SemanticRegisterForm() {

    return (
        <Container style={{paddingBottom: '50px'}}>

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

                        <FormikSemanticInput name="fullName" label="Full Name" placeholder="Jane Doe"/>
                        <FormikSemanticInput name="email" label="Email" placeholder="jane@acme.com" type="email"/>
                        <FormikSemanticInput name="password" label="Password" placeholder="****" type="password"/>
                        <FormikSemanticInput name="rePassword" label="Confirm Password" placeholder="****"
                                             type="password"/>
                        <FormikSemanticRadioGroup name="gender" label="Gender" options={genderRadioGroupOptions}/>
                        <FormikSemanticDropdown name="city" options={cityOptions} label="City"
                                                placeholder="Select a city"/>
                        <FormikSemanticInput name="dateOfBirth" label="Date Of Birth" type="date"/>
                        <FormikSemanticCheckbox name="isAgreed" label="I agree to the Terms and Conditions"/>

                        <Form.Button type="submit" content="Submit"/>
                    </Form>
                )}
            </Formik>

        </Container>
    );
}

export default SemanticRegisterForm;
