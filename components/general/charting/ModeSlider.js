import React, { useEffect, useState } from 'react';
import styles from './ModeSlider.module.scss';

const ModeSlider = ({ data }) => {
    const [style, setStyle] = useState({
        left: '50%'
    });

    useEffect(() => {
        setTimeout(
            setStyle({
                left: Math.floor(data * 100).toString() + '%'
            }),
            1000
        );
    }, [data]);

    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                <div className={styles.minor}>
                    <span>Minor</span>
                </div>
                <div className={styles.major}>
                    <span>Major</span>
                </div>
                <div className={styles.line}>
                    <div className={styles.marker} style={style}>
                        <span className={styles.label}>{data}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModeSlider;
