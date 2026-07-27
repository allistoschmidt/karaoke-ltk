"use client";

import { useState } from "react";

import styles from "./Hero.module.css";
import Decorations from "./Decorations/Decorations";
import Form from "./Form/Form";

export default function Hero() {

    const [openForm, setOpenForm] = useState(false);

    async function glitterExplosion() {

        const confetti = (await import("canvas-confetti")).default;

        const rect = document
            .getElementById("heroButton")!
            .getBoundingClientRect();

        const x = (rect.left + rect.width / 2) / window.innerWidth;

        const y = (rect.top + rect.height / 2) / window.innerHeight;

        for (let i = 0; i < 4; i++) {

            setTimeout(() => {

                confetti({

                    particleCount: 8,

                    spread: 70,

                    startVelocity: 18,

                    scalar: .8,

                    origin: {
                        x: x + (Math.random() - .5) * .05,
                        y: y + (Math.random() - .5) * .03
                    },

                    colors: [
                        "#ffffff",
                        "#ff4db8",
                        "#ffd84d",
                        "#74f8ff"
                    ],

                    shapes: ["star"]

                });

            }, i * 70);

        }

    }

    function handleOpenForm() {

        glitterExplosion();
        setOpenForm(true);

    }

    return (

        <>

            <section className={styles.hero}>

                <div className={styles.paper}></div>

                <Decorations />

                <div className={styles.poster}>

                    <span className={styles.edition}>
                        An LTK Production
                    </span>

                    <h1 className={styles.title}>
                        <span>KARA</span>
                        <span>OKÊ</span>
                    </h1>

                    <p className={styles.subtitle}>
                        edição especial 2026
                    </p>

                    <div className={styles.tagline}>
                        Vem cantar com a gente!
                    </div>

                    <button
                        id="heroButton"
                        className={styles.button}
                        onMouseEnter={glitterExplosion}
                        onClick={handleOpenForm}
                    >
                        COMEÇAR INSCRIÇÃO
                    </button>

                </div>

            </section>

            {openForm && (
                <Form />
            )}

        </>

    );

}