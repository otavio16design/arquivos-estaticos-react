import React from 'react'
import open from '../../../assets/open.png';
import favorito from '../../../assets/favorito.png';

export default function Cards({ itens, styles }) {
    return (
        <ul className={styles.galeria__cards}>
            {itens.map((foto) => {
                return (
                    <li key={foto.id} className={styles.galeria__card}>
                        <img className={styles.galeria__imagem} src={foto.imagem} alt={foto.titulo} />
                        <p className={styles.galeria__descricao}> {foto.titulo} </p>
                        <div>
                            <p> {foto.creditos} </p>
                            <span>
                                <img src={favorito} alt="Foto coração de curtir" />
                                <img src={open} alt="Ícone de abrir modal" />
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
