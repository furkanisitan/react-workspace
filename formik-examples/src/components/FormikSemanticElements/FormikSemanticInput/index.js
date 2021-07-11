import {useField} from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import {FormInput} from 'semantic-ui-react';

FormikSemanticInput.propTypes = {
    name: PropTypes.string.isRequired
};

function FormikSemanticInput(props) {

    const [field, meta] = useField(props.name);

    return (
        <FormInput {...field} {...props} error={meta.touched && meta.error && (meta.error)}/>
    );
}

export default FormikSemanticInput;
