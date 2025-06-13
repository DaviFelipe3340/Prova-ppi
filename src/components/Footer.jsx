import styles from './footer.module.css'
import { Github } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { MessageCircle } from 'lucide-react'

export default function Footer({text, nome, github, instagram, whatsapp}) {
    return (
        <>
        <footer className={styles.footer}>
            <p className={styles.text}>{text}</p>
            <h3 className={styles.nome}>{nome}</h3>
            <div className={styles.icons}>
                <a href={github} className={styles.link}><Github color='var(--black)' /></a>
                <a href={instagram} className={styles.link}><Instagram color='var(--black)' /></a>
                <a href={whatsapp} className={styles.link}><MessageCircle color='var(--black)' /></a>
            </div>

        </footer>
        </>
    )
}