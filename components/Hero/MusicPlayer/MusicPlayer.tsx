"use client";

import { useRef, useState } from "react";
import styles from "./MusicPlayer.module.css";

export default function MusicPlayer() {

    const audioRef = useRef<HTMLAudioElement>(null);

    const [playing, setPlaying] = useState(false);

    function toggleMusic() {

        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setPlaying(!playing);

    }

    return (

        <>
            <audio
                ref={audioRef}
                src="/audio/esquenta.mp3"
                loop
            />

            <button
                className={styles.player}
                onClick={toggleMusic}
            >

                {playing ? "⏸ PAUSE" : "▶ PLAY"}

            </button>

        </>

    );

}
