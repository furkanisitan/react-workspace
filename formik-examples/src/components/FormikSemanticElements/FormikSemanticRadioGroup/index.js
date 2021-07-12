import {useField} from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import {FormGroup, FormRadio} from 'semantic-ui-react';

FormikSemanticRadio.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    isLast: PropTypes.bool
};

function FormikSemanticRadio({isLast, ...props}) {

    const [field, meta, helpers] = useField(props.name);

    const hasError = () =>
        meta.touched && meta.error;
    
    return (
        <FormRadio
            {...field}
            {...props}
            checked={props.value === meta.value}
            onChange={(e, v) => helpers.setValue(v.value)}
            className={hasError() ? 'error' : ''}
            error={hasError() && isLast && meta.error}
        />
    );
}

FormikSemanticRadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired
    }))
};

function FormikSemanticRadioGroup(props) {

    return (
        <FormGroup inline>
            <label>{props.label}</label>

            {props.options.map((radio, i) => (
                <FormikSemanticRadio
                    key={i}
                    name={props.name}
                    value={radio.value}
                    label={radio.text}
                    isLast={props.options.length - 1 === i}
                />
            ))}
        </FormGroup>
    );
}

export default FormikSemanticRadioGroup;
