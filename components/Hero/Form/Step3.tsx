"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import { FormData } from "./types";
import styles from "./FormFields.module.css";

interface Props {
    data: FormData;
    setData: Dispatch<SetStateAction<FormData>>;
    next: () => void;
    back: () => void;
}

const PIX =
    "00020101021126500014br.gov.bcb.pix0128priscilaalmeidagio@gmail.com5204000053039865802BR5922GIOVANNA A DE MEDEIROS6011CAMPO LARGO62070503***630448BD";

const WHATSAPP =
    "https://wa.me/5541987913869?text=Olá!%20Segue%20o%20comprovante%20do%20pagamento%20da%20minha%20inscrição%20no%20Karaokê%202026.";

export default function Step3({
    data,
    next,
    back
}: Props) {

    async function copiarPix() {
        await navigator.clipboard.writeText(PIX);
        alert("Chave PIX copiada!");
    }

    async function finalizar() {
        try {

            const response = await fetch("/api/inscricao", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.ok) {
                next();
            } else {
                console.error(result);
                alert("Erro ao realizar a inscrição.");
            }

        } catch (error) {

            console.error(error);
            alert("Erro de conexão. Tente novamente.");

        }
    }

    return (

        <div className={styles.container}>

            <div>

                <h1 className={styles.title}>
                    💳 Pagamento
                </h1>

                <p className={styles.subtitle}>
                    O ingresso custa <strong>R$ 20,00 antecipado</strong> e
                    <strong> R$ 25,00 no dia.</strong>

                    <br /><br />

                    Para garantir o valor promocional,
                    realize o pagamento via PIX e envie o comprovante.
                </p>

            </div>

            <div className={styles.priceGrid}>

                <div className={styles.priceCardPromo}>

                    <span className={styles.priceBadge}>
                        🎟️ ANTECIPADO
                    </span>

                    <h2>R$ 20,00</h2>

                    <p>
                        Garanta seu ingresso com desconto.
                    </p>

                </div>

                <div className={styles.priceCard}>

                    <span className={styles.priceBadgeGray}>
                        📅 NO DIA
                    </span>

                    <h2 className={styles.normalPrice}>
                        R$ 25,00
                    </h2>

                    <p>
                        Pagamento realizado na entrada do evento.
                    </p>

                </div>

            </div>

            <div className={styles.pixBox}>

                <Image
                    src="/qrcode-pix.jpeg"
                    alt="QR Code PIX"
                    width={260}
                    height={260}
                    style={{
                        width: "100%",
                        maxWidth: "260px",
                        height: "auto",
                    }}
                />

                <h3>
                    Pagamento via PIX
                </h3>

                <p>
                    Escaneie o QR Code ou copie a chave abaixo.
                </p>

                <textarea
                    readOnly
                    className={styles.pixText}
                    value={PIX}
                />

                <button
                    className={`${styles.button} ${styles.primary}`}
                    onClick={copiarPix}
                >
                    📋 Copiar chave PIX
                </button>

            </div>

            <div className={styles.whatsBox}>

                <h2>
                    Confirmação da inscrição
                </h2>

                <p>
                    Após realizar o pagamento,
                    envie o comprovante clicando no botão abaixo:
                </p>

                <small>
                    Sua inscrição será confirmada após o recebimento do comprovante.
                </small>

            </div>

            <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsButton}
            >

                <span>📲</span>

                <div>

                    <strong>
                        Enviar comprovante
                    </strong>

                    <small>
                        Abrir conversa no WhatsApp
                    </small>

                </div>

            </a>

            <div className={styles.buttons}>

                <button
                    className={`${styles.button} ${styles.secondary}`}
                    onClick={back}
                >
                    ← Voltar
                </button>

                <button
                    className={`${styles.button} ${styles.primary}`}
                    onClick={finalizar}
                >
                    Finalizar inscrição 🎉
                </button>

            </div>

        </div>

    );

}