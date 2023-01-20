import React from "react";
import styles from "../styles/Footer.module.sass";

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className={styles.footer}>
            <span className={styles.footer__coop}>
                &#169; 2023. Все права защищены.
            </span>
        </footer>
    );
};

export default Footer;
