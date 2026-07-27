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

            <span className={styles.badge}>
                INSCRIÇÃO RECEBIDA
            </span>

            <h1 className={styles.finishTitle}>
                <span className={styles.kara}>LTKARA</span>
                <span className={styles.oke}>OKÊ</span>
                <span className={styles.year}> 2026</span>
            </h1>

            <p className={styles.finishSubtitle}>
                Clube Quapasso • Campo Largo/PR • Edição Especial
            </p>

            <div className={styles.finishDivider}></div>

            <h2 className={styles.finishThanks}>
                Obrigado e prepare a voz!!!
            </h2>

            <p className={styles.finishText}>

                Sua inscrição foi enviada com sucesso.

                <br /><br />

                Nos vemos no palco dia 29 de agosto!

            </p>

        </div>

    );

}
