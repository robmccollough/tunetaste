import React, { useState, useEffect } from 'react';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import styles from './PreviewPlayer.module.scss';

const useAudio = (url) => {
    const [audio, setAudio] = useState(null);
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        if (audio) {
            playing ? audio.play() : audio.pause();
        }
    }, [playing]);

    useEffect(() => {
        setAudio(new Audio(url));
    }, []);

    return [playing, toggle];
};

const PreviewPlayer = ({ url }) => {
    if (!url) {
        return (
            <div className={`${styles.container} ${styles.unavailable}`}>
                <PlayCircleOutlineIcon />
            </div>
        );
    }
    const [playing, toggle] = useAudio(url);
    //Progress bar?
    return (
        <div className={styles.container}>
            {playing ? (
                <PauseCircleOutlineIcon onClick={toggle} />
            ) : (
                <PlayCircleOutlineIcon onClick={toggle} />
            )}
        </div>
    );
};

export default PreviewPlayer;
