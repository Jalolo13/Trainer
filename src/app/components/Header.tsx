"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Header.module.sass";

type Props = {};

const Header = (props: Props) => {
    const [active, setActive] = useState(0);

    const list = ["Главная", "Тренажёр"];
    return (
        <header className={styles.header}>
            <h2 className={styles.header__title}>Типа лого</h2>
            <ul className={styles.header__list}>
                {list.map((el, i) => (
                    <Link key={i} href={el === "Главная" ? "/" : "/trainer"}>
                        <li
                            key={i}
                            className={
                                active === i
                                    ? styles.header__list_item +
                                      " " +
                                      styles.active
                                    : styles.header__list_item
                            }
                            onClick={() => setActive(i)}
                        >
                            {el}
                        </li>
                    </Link>
                ))}
            </ul>
        </header>
    );
};

export default Header;
