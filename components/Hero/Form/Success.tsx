"use client";

import Image from "next/image";
import styles from "./FormFields.module.css";

export default function Success() {

    return (

        <div className={styles.finish}>

            <Image
                src="/vinil.png"
                alt=""
                width={120}
                height={120}
                className={styles.finishDiscLeft}
            />

            <Image
                src="/vinil.png"
                alt=""
                width={120}
                height={120}
                className={styles.finishDiscRight}
            />

            <div className={styles.confetti}></div>

            <div className={styles.confetti2}></div>

            <span className={`${styles.sparkle} ${styles.spark1}`}>✨</span>
            <span className={`${styles.sparkle} ${styles.spark2}`}>⭐</span>
            <span className={`${styles.sparkle} ${styles.spark3}`}>💖</span>

            <span className={styles.badge}>
                INSCRIÇÃO RECEBIDA
            </span>

            <h1 className={styles.finishTitle}>
                KARAOKÊ 2026
            </h1>

            <p className={styles.finishSubtitle}>
                Campo Largo • Edição Especial
            </p>

            <div className={styles.finishDivider}></div>

            <h2 className={styles.finishThanks}>
                Obrigado pela inscrição!
            </h2>

            <p className={styles.finishText}>

                Sua inscrição foi enviada com sucesso.

                <br /><br />

                Estamos muito felizes por ter você
                participando do nosso Karaokê.

                <br /><br />

                Nos vemos no palco!

            </p>

        </div>

    );

}
