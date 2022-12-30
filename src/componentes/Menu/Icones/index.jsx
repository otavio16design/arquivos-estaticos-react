import React from 'react'

export default function Icones({ itens, styles }) {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {itens.map((icon) => {
                    return (
                        <li className={styles.menu__item}>
                            <img src={icon.imagem} alt={icon.titulo} />
                            <a href="/">{icon.tag}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
