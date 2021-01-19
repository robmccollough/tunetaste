import React, { useState } from 'react';
import Staff from '../../../public/svg/staff.svg';
import PlainO from '../../../public/svg/plainO.svg';
import SharpO from '../../../public/svg/sharpO.svg';
import LineO from '../../../public/svg/lineO.svg';
import SharpLineO from '../../../public/svg/sharpLineO.svg';
import { mapNumberToPitch } from '../../../lib/parsing';
import styles from './PitchChart.module.scss';
const pitch_map = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
const note_map = {
    C: (
        <LineO
            style={{
                position: 'absolute',
                left: '50%',
                bottom: 40 //primary_offset + -1 * inc
            }}
        />
    ),
    'C♯': (
        <SharpLineO
            style={{
                position: 'absolute',
                left: '50%',
                bottom: 30 //primary_offset + -1 * inc
            }}
        />
    ),
    D: (
        <PlainO
            style={{
                position: 'absolute',
                left: '50%',
                bottom: 38 // primary_offset + 1 * inc
            }}
        />
    ),
    'D♯': (
        <SharpO
            style={{
                position: 'absolute',
                left: '50%',
                bottom: 47 //primary_offset + 1 * inc
            }}
        />
    ),
    E: (
        <PlainO
            style={{
                position: 'absolute',
                left: '50%',
                bottom: 49 //primary_offset + 2 * inc
            }}
        />
    ),
    F: (
        <PlainO
            style={{
                position: 'absolute',
                left: '50%',
                bottom: 62 //primary_offset + 3 * inc
            }}
        />
    ),
    'F♯': (
        <SharpO
            style={{
                position: 'absolute',
                left: '50%',
                bottom: 68 //primary_offset + 3 * inc
            }}
        />
    ),
    G: (
        <PlainO
            style={{
                position: 'absolute',
                left: '50%',
                bottom: 74 //primary_offset + 4 * inc
            }}
        />
    ),
    'G♯': (
        <SharpO
            style={{
                position: 'absolute',
                left: '50%',
                bottom: 81 //primary_offset + 4 * inc
            }}
        />
    ),
    A: (
        <PlainO
            style={{
                position: 'absolute',
                left: '50%',
                bottom: 87 //primary_offset + 5 * inc
            }}
        />
    ),
    'A♯': (
        <SharpO
            style={{
                position: 'absolute',
                left: '50%',
                bottom: 94 //primary_offset + 5 * inc
            }}
        />
    ),
    B: (
        <PlainO
            style={{
                position: 'absolute',
                left: '50%',
                bottom: 100 //primary_offset + 6 * inc
            }}
        />
    )
};

const PitchChart = ({ data }) => {
    const [index, setIndex] = useState(Math.round(data));

    const note = note_map[pitch_map[index]];

    return (
        <div className={styles.container}>
            <div className={styles.letter}>{pitch_map[index]}</div>
            <div className={styles.graphic}>
                <Staff className={styles.staff} />
                {note}
            </div>
            {/* <button
                onClick={() => {
                    console.log('Keychange');
                    setIndex(index + 1 < pitch_map.length ? index + 1 : pitch_map.length);
                }}>
                {'>'}
            </button>
            <button
                onClick={() => {
                    setIndex(index - 1 < 0 ? 0 : index - 1);
                }}>
                {'<'}
            </button> */}
        </div>
    );
};

export default PitchChart;
