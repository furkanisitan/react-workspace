import {useField} from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import {FormSelect} from 'semantic-ui-react';

FormikSemanticDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.any,
        value: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired
    }))
};

function FormikSemanticDropdown(props) {

    const [field, meta, helpers] = useField(props);
    const {onBlur, ...fields} = field;

    return (
        <FormSelect
            {...fields}
            {...props}
            onChange={(e, v) => helpers.setValue(v.value)}
            error={meta.touched && meta.error && (meta.error)}/>
    );
}

export default FormikSemanticDropdown;
