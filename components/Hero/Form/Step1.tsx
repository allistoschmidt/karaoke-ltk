"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { FormData } from "./types";

import styles from "./FormFields.module.css";

interface Props {

    data: FormData;

    setData: Dispatch<SetStateAction<FormData>>;

    next: () => void;

}

export default function Step1({

    data,

    setData,

    next

}: Props) {

    const [error, setError] = useState("");

    function handleNext() {

        if (
            !data.nome.trim() ||
            !data.idade.trim() ||
            !data.telefone.trim()
        ) {

            setError("Preencha todos os campos antes de continuar.");

            return;

        }

        setError("");

        next();

    }

    return (

        <div className={styles.container}>

            <div>

                <h1 className={styles.title}>
                    🎤 Quem vai subir ao palco?
                </h1>

                <p className={styles.subtitle}>
                    Vamos começar conhecendo você.
                </p>

            </div>

            <div className={styles.field}>

                <label htmlFor="nome">
                    Nome completo
                </label>

                <input

                    id="nome"

                    type="text"

                    placeholder="Digite seu nome"

                    value={data.nome}

                    onChange={(e) =>
                        setData((prev) => ({
                            ...prev,
                            nome: e.target.value
                        }))
                    }

                />

            </div>

            <div className={styles.field}>

                <label htmlFor="idade">
                    Idade
                </label>

                <input

                    id="idade"

                    type="number"

                    placeholder="18"

                    value={data.idade}

                    onChange={(e) =>
                        setData((prev) => ({
                            ...prev,
                            idade: e.target.value
                        }))
                    }

                />

            </div>

            <div className={styles.field}>

                <label htmlFor="telefone">
                    Telefone
                </label>

                <input

                    id="telefone"

                    type="tel"

                    placeholder="(41) 99999-9999"

                    value={data.telefone}

                    onChange={(e) =>
                        setData((prev) => ({
                            ...prev,
                            telefone: e.target.value
                        }))
                    }

                />

            </div>

            {error && (

                <p className={styles.error}>
                    {error}
                </p>

            )}

            <div className={styles.buttons}>

                <div />

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
