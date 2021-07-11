import {ErrorMessage, Field, Form, Formik} from 'formik';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import initialValues from './initial-values';
import validationSchema from './validation-schema';

function SemanticRegisterForm() {
    return (
        <div>
            <h1>Register</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(JSON.stringify(values));
                }}
            >
                <Form>
                    <label htmlFor="fullName">First Name</label>
                    <Field id="fullName" name="fullName" placeholder="Jane Doe"/>
                    <ErrorMessage name="fullName"/>

                    <br/>

                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="jane@acme.com" type="email"/>
                    <ErrorMessage name="email"/>

                    <br/>

                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="****" type="password"/>
                    <ErrorMessage name="password"/>

                    <br/>

                    <label htmlFor="rePassword">Confirm Password</label>
                    <Field id="rePassword" name="rePassword" placeholder="****" type="password"/>
                    <ErrorMessage name="rePassword"/>

                    <br/>

                    <div id="my-radio-group">Gender</div>
                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                            <Field type="radio" name="gender" value="male"/>
                            Male
                        </label>
                        <label>
                            <Field type="radio" name="gender" value="female"/>
                            Female
                        </label>
                        <span> </span>
                        <ErrorMessage name="gender"/>
                    </div>

                    <br/>

                    <label htmlFor="city">City</label>
                    <Field as="select" name="city">
                        <option value="">Select a city</option>
                        <option value="City 1">City 1</option>
                        <option value="City 2">City 2</option>
                        <option value="City 3">City 3</option>
                    </Field>
                    <ErrorMessage name="city"/>

                    <br/>

                    <label htmlFor="dateOfBirth">Date Of Birth</label>
                    <Field id="dateOfBirth" name="dateOfBirth" placeholder="01.01.2000" type="date"/>
                    <ErrorMessage name="dateOfBirth"/>

                    <br/>

                    <Field id="isAgreed" name="isAgreed" type="checkbox"/>
                    <label htmlFor="isAgreed"> I agree to the Terms and Conditions</label>
                    <ErrorMessage name="isAgreed"/>

                    <br/>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default SemanticRegisterForm;
