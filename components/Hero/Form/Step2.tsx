"use client";

import { Dispatch, SetStateAction } from "react";

import { FormData } from "./types";

import styles from "./FormFields.module.css";

interface Props {

    data: FormData;

    setData: Dispatch<SetStateAction<FormData>>;

    next: () => void;

    back: () => void;

}

export default function Step2({

    data,

    setData,

    next,

    back

}: Props) {

    function handleNext() {

        if (

            data.escoteiro === "" ||

            !data.musica.trim() ||

            !data.idolo.trim()

        ) {

            alert("Preencha todos os campos antes de continuar.");

            return;

        }

        next();

    }

    return (

        <div className={styles.container}>

            <div>

                <h1 className={styles.title}>
                    ⭐ Conta pra gente...
                </h1>

                <p className={styles.subtitle}>
                    Queremos conhecer um pouco mais sobre você.
                </p>

            </div>

            <div className={styles.field}>

                <label>
                    Você faz parte do Movimento Escoteiro?
                </label>

                <div className={styles.radioGroup}>

                    <label className={styles.radio}>

                        <input

                            type="radio"

                            checked={data.escoteiro === "sim"}

                            onChange={() =>
                                setData(prev => ({
                                    ...prev,
                                    escoteiro: "sim"
                                }))
                            }

                        />

                        Sim

                    </label>

                    <label className={styles.radio}>

                        <input

                            type="radio"

                            checked={data.escoteiro === "nao"}

                            onChange={() =>
                                setData(prev => ({
                                    ...prev,
                                    escoteiro: "nao"
                                }))
                            }

                        />

                        Não

                    </label>

                </div>

            </div>

            <div className={styles.field}>

                <label>
                    Que música você quer cantar?
                </label>

                <input

                    type="text"

                    placeholder="Poderá cantar mais no dia!"

                    value={data.musica}

                    onChange={(e) =>
                        setData(prev => ({
                            ...prev,
                            musica: e.target.value
                        }))
                    }

                />

            </div>

            <div className={styles.field}>

                <label>
                    Qual ídolo ou banda você gostaria de conhecer?
                </label>

                <input

                    type="text"

                    placeholder="Ex.: Bruno Mars"

                    value={data.idolo}

                    onChange={(e) =>
                        setData(prev => ({
                            ...prev,
                            idolo: e.target.value
                        }))
                    }

                />

            </div>

            <div className={styles.buttons}>

                <button

                    className={`${styles.button} ${styles.secondary}`}

                    onClick={back}

                >

                    ← Voltar

                </button>

                <button

                    className={`${styles.button} ${styles.primary}`}

                    onClick={handleNext}

                >

                    Próximo →

                </button>

            </div>

        </div>

    );

}
