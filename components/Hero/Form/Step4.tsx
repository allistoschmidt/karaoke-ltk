"use client";

import { useState } from "react";

import styles from "./FormFields.module.css";
import { FormData } from "./types";


interface Props {

    data: FormData;

    next: () => void;

    back: () => void;

}

export default function Step4({

    data,

    next,

    back

}: Props) {

    const [loading, setLoading] = useState(false);

    async function finalizar() {

        setLoading(true);

        console.log(data);

        try {

            const response = await fetch("/api/inscricao", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            });

            const result = await response.json();

            console.log(result);

            if (!response.ok || !result.ok) {

                alert(JSON.stringify(result, null, 2));

                return;

            }

            next();

        } catch (err) {

            console.error(err);

            alert("Não foi possível enviar sua inscrição. Tente novamente.");

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className={styles.container}>

            <div>

                <h1 className={styles.title}>
                    🍕 Cardápio da Noite
                </h1>

                <p className={styles.subtitle}>
                    Além de muita música, teremos algumas delícias durante o evento.
                </p>

            </div>

            <div className={styles.menuBox}>

                <div className={styles.menuItem}>

                    <span>🍟 Batata Frita</span>

                    <strong>R$ 5,00</strong>

                </div>

                <div className={styles.menuItem}>

                    <span>🍕 Fatia de Pizza</span>

                    <strong>R$ 8,00</strong>

                </div>

                <div className={styles.menuItem}>

                    <span>💧 Água</span>

                    <strong>R$ 5,00</strong>

                </div>

                <div className={styles.menuItem}>

                    <span>🥤 Refrigerante</span>

                    <strong>R$ 8,00</strong>

                </div>

            </div>

            <div className={styles.infoBox}>

                <h3>
                    🎤 Nos vemos no palco!
                </h3>

                <p>
                    Obrigado por participar do nosso Karaokê!
                </p>

                <p>
                    Estamos ansiosos para ouvir sua apresentação.
                </p>

            </div>

            <div className={styles.buttons}>

                <button
                    className={`${styles.button} ${styles.secondary}`}
                    onClick={back}
                    disabled={loading}
                >
                    ← Voltar
                </button>

                <button
                    className={`${styles.button} ${styles.primary}`}
                    onClick={finalizar}
                    disabled={loading}
                >
                    {loading
                        ? "Enviando..."
                        : "Finalizar inscrição 🎉"}
                </button>

            </div>

        </div>

    );

}