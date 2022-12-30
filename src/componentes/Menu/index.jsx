import React from 'react'
import Icones from './Icones'
import styles from './Menu.module.scss'
import icon from './icon.json';

export default function Menu() {
    return (
        <>
            <Icones itens={icon} styles={styles} />
        </>
    )
}
