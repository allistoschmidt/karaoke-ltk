"use client";

import { useState } from "react";

import styles from "./Form.module.css";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Success from "./Success";

import { FormData } from "./types";

export default function Form() {

    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState<FormData>({

        nome: "",

        idade: "",

        telefone: "",

        escoteiro: "",

        musica: "",

        idolo: ""

    });

    return (

        <div className={styles.overlay}>

            <div
                className={`${styles.modal} ${step === 4 ? styles.modalSuccess : ""
                    }`}
            >

                <div className={styles.header}>

                    <div className={styles.ticket}>

                        <span className={styles.badge}>
                            INSCRIÇÕES ABERTAS
                        </span>

                        <h1 className={styles.eventTitle}>
                            🎤 KARAOKÊ 2026
                        </h1>

                        <p className={styles.eventInfo}>
                            Sábado • Campo Largo • Edição Especial
                        </p>

                        <div className={styles.ticketLine}></div>

                    </div>

                </div>

                <img
                    src="/vinil.png"
                    className={styles.discoLeft}
                    alt=""
                />

                <img
                    src="/vinil.png"
                    className={styles.discoRight}
                    alt=""
                />

                <div className={`${styles.star} ${styles.star1}`}>
                    ✦
                </div>

                <div className={`${styles.star} ${styles.star2}`}>
                    ★
                </div>

                <div className={`${styles.star} ${styles.star3}`}>
                    ✦
                </div>

                <div className={styles.progress}>

                    <div className={`${styles.dot} ${step >= 1 ? styles.active : ""}`} />

                    <div className={`${styles.line} ${step >= 2 ? styles.activeLine : ""}`} />

                    <div className={`${styles.dot} ${step >= 2 ? styles.active : ""}`} />

                    <div className={`${styles.line} ${step >= 3 ? styles.activeLine : ""}`} />

                    <div className={`${styles.dot} ${step >= 3 ? styles.active : ""}`} />

                </div>

                <p className={styles.stepText}>

                    {step <= 3 ? `Etapa ${step} de 3` : "Inscrição concluída"}

                </p>

                {step === 1 && (

                    <Step1

                        data={formData}

                        setData={setFormData}

                        next={() => setStep(2)}

                    />

                )}

                {step === 2 && (

                    <Step2

                        data={formData}

                        setData={setFormData}

                        back={() => setStep(1)}

                        next={() => setStep(3)}

                    />

                )}

                {step === 3 && (

                    <Step3

                        data={formData}

                        setData={setFormData}

                        back={() => setStep(2)}

                        next={() => setStep(4)}

                    />

                )}

                {step === 4 && (

                    <Success />

                )}

            </div>

        </div>

    );

}
