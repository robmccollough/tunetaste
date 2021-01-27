import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import styles from './TrackParamBar.module.scss';

const TrackParamBar = (props) => {
    return (
        <FormControl component="fieldset" className={styles.container}>
            <FormLabel component="legend">Select Timeline:</FormLabel>
            <RadioGroup
                aria-label="timeline"
                name="timeline"
                value={props.value}
                onChange={props.handleChange}
                className={styles.radios}>
                <FormControlLabel
                    value="short_term"
                    control={<Radio color="primary" />}
                    label="Short"
                />
                <FormControlLabel
                    value="medium_term"
                    control={<Radio color="primary" />}
                    label="Medium"
                />
                <FormControlLabel
                    value="long_term"
                    control={<Radio color="primary" />}
                    label="Long"
                />
            </RadioGroup>
        </FormControl>
    );
};

export default TrackParamBar;
