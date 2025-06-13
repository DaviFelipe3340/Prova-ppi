import styles from './card.module.css';

export default function Card({img, title, children}) {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={img} alt="" />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{children}</p>
        </div>
    )
}