import styles from './Header.module.css'

import RocketLogo from '../assets/rocket.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={RocketLogo} alt="logo foguete" />
            <strong>to<span>do</span></strong>
        </header>
    )
}