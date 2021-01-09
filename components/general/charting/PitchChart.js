import React from 'react';
import Staff from '../../../public/svg/treble_clef.svg';
import Note from '../../../public/svg/note.svg';
import { mapNumberToPitch } from '../../../lib/parsing';
import styles from './PitchChart.module.scss';
const pitchMap = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];

const PitchChart = ({ data }) => {
    console.log(data);
    const dist = mapNumberToPitch(data);

    return (
        <div className={styles.container}>
            <div className={styles.letter}>{dist}</div>
            <div className={styles.graphic}>
                <Staff className={styles.staff} />
                <Note className={styles.note} />
            </div>
        </div>
    );
};

export default PitchChart;
