import Image from "next/image";
import styles from "./Decorations.module.css";

export default function Decorations() {
    return (
        <div className={styles.decorations}>

            <div className={`${styles.cutout} ${styles.disco}`}>
                <Image
                    src="/decorations/globo.png"
                    alt=""
                    width={170}
                    height={170}
                />
            </div>

            <div className={`${styles.cutout} ${styles.speaker}`}>
                <Image
                    src="/decorations/altofalante.png"
                    alt=""
                    width={230}
                    height={230}
                />
            </div>

            <div className={`${styles.cutout} ${styles.microphone}`}>
                <Image
                    src="/decorations/mic.png"
                    alt=""
                    width={140}
                    height={140}
                />
            </div>

            <div className={`${styles.cutout} ${styles.mouth}`}>
                <Image
                    src="/decorations/boca.png"
                    alt=""
                    width={120}
                    height={120}
                />
            </div>

            <div className={`${styles.cutout} ${styles.finger}`}>
                <Image
                    src="/decorations/dedin.png"
                    alt=""
                    width={85}
                    height={140}
                />
            </div>

            <div className={`${styles.cutout} ${styles.woman}`}>
                <Image
                    src="/decorations/mulher.png"
                    alt=""
                    width={110}
                    height={160}
                />
            </div>

        </div>
    );
}
