import logo from './logo.png';
import lupa from './lupa.png';
import styles from './Cabecalho.module.scss'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} style={{ width: '100px' }} alt="Logo do Alura Space" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?" />
                <img src={lupa} style={{ width: '30px' }} alt="Icone de Buscar" />
            </div>
        </header>
    )
}