import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const StopWatch = props => {

    const [second, setSecond] = useState(props.second);

    useEffect(() => {

        const interval = setInterval(() => {
            console.log('interval');
            // 'second' cannot be used instead of 'prevState'. Because it causes the state to be updated.
            setSecond(prevState => prevState + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            {second}
        </div>
    );
};

StopWatch.propTypes = {
    second: PropTypes.number
};

StopWatch.defaultProps = {
    second: 0
};

export default StopWatch;
