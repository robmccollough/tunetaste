import React, { useState, useEffect } from 'react';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

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
    const [playing, toggle] = useAudio(url);

    return (
        <div>
            {playing ? (
                <PauseCircleOutlineIcon onClick={toggle} />
            ) : (
                <PlayCircleOutlineIcon onClick={toggle} />
            )}
        </div>
    );
};

export default PreviewPlayer;
