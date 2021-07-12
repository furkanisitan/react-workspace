import {useField} from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import {FormCheckbox} from 'semantic-ui-react';

FormikSemanticCheckbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string
};

function FormikSemanticCheckbox(props) {

    const [field, meta, helpers] = useField(props.name);
    const {value, ...fields} = field;

    return (
        <FormCheckbox
            {...fields}
            {...props}
            value={value ? 1 : 0}
            defaultChecked={meta.value}
            onChange={(e, v) => helpers.setValue(!v.value)}
            error={meta.touched && meta.error && ({content: meta.error, pointing: 'left'})}/>
    );
}

export default FormikSemanticCheckbox;
